// count instances of element...
Array.prototype.count = function(element) {
	return this.findAll( function(x){ return x == element; } ).length;
}

// count instances of elements...
Array.prototype.countAll = function(elements) {
	return this.findAll( function(x){ return elements.member(x); } ).length;
}

// removes the first instance of element...
Array.prototype.remove = function(element) {
	this.splice(this.indexOf(element), 1);
	return this;
}

// is the array empty
Array.prototype.empty = function() {
	return this.length == 0;
}

function trackArmyBuilderEvent(eventName, params) {
	try {
		if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
			window.gtag('event', eventName, params || {});
		}
	}
	catch (err) {
		// Analytics must never break army builder behaviour.
	}
}

function armyBuilderEventParams(actionSource) {
	var listId = ArmyforgeUI && ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : '';
	var armyName = ArmyList && ArmyList.data ? (ArmyList.data.name || ArmyList.data.id || '') : '';
	var params = {
		list_id: listId || ''
	};
	if (armyName) {
		params.army_name = armyName;
	}
	if (actionSource) {
		params.action_source = actionSource;
	}
	return params;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ArmyforgeUI = {
	urlData:{},
	printV2Data:{
		loaded:false,
		globalRules:null,
		armyRules:null
	},
	activate:function(id) {
		var msgDiv = $('menuItemMsg' + id);
		msgDiv.hide();	
		var row = $('menuItem' + id);
		row.removeClassName('inactive');
		row.addClassName('interactive');
	},

	addFormation:function(formationType, noDefaults, actionSource, formationCategory) {
		//alert('add formation');
		var formation = Force.addFormation(formationType);
		// todo remove delete listener...
		ArmyforgeUI.renderFormation( formation );
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.checkUpgradeMenuItems();
		ArmyforgeUI.checkFormationMenuItems();
		ArmyforgeUI.checkWarnings();
		if (formation && actionSource) {
			var eventParams = armyBuilderEventParams(actionSource);
			eventParams.formation_name = formation.type && formation.type.name ? formation.type.name : '';
			eventParams.formation_points = formation.calcPoints();
			if (formationCategory) {
				eventParams.formation_category = formationCategory;
			}
			trackArmyBuilderEvent('select_formation', eventParams);
		}
	},

	addUpgrade:function(formation, upgradeType, actionSource) {
		formation.upgrades.push( upgradeType );
		ArmyforgeUI.updateUpgrade(formation, upgradeType);
		ArmyforgeUI.checkUpgradeMenuItems();
		ArmyforgeUI.checkWarnings();
		if (actionSource) {
			var eventParams = armyBuilderEventParams(actionSource);
			eventParams.formation_name = formation && formation.type && formation.type.name ? formation.type.name : '';
			eventParams.upgrade_name = upgradeType && upgradeType.name ? upgradeType.name : '';
			if (typeof upgradeType.pts === 'number') {
				eventParams.upgrade_points = upgradeType.pts;
			}
			trackArmyBuilderEvent('select_upgrade', eventParams);
		}
	},

	checkWarnings:function() {
		$('warnings').update();
		Force.getWarnings().each(function(x) {
			$('warnings').insert('WARNING: ' + x + '').insert(new Element('br'));
		});
	},

	checkFormationMenuItems:function() {
		ArmyList.allNonFixedFormations.each(function(f) {
			var msgs = Force.cannotAdd(f);
			var id = '_' + f.id;
			if (msgs.empty()) {
				ArmyforgeUI.activate(id);
			}
			else {
				ArmyforgeUI.deactivate(id,msgs);
			}
		});
	},

	checkUpgradeMenuItems:function() {
		Force.formations.each(function(f) {
			// formation upgrades
			f.type.upgrades.each(function(u) {
				var id = '_' + f.id + '_' + u.id;
				var msgs = f.cannotAdd(u);
				if (msgs.empty()) {
					ArmyforgeUI.activate(id);
				}
				else {
					ArmyforgeUI.deactivate(id,msgs);
				}
			});
			
			// upgrade swaps			
			f.upgrades.uniq().each(function(u) {
				f.type.optionsFor(u).each( function(o) {
					var id = '_' + f.id + '_' + u.id + '_' + o.id; 
					var msgs = f.cannotSwap(u,o);
					if (msgs.empty()) {
						ArmyforgeUI.activate(id);
					}
					else {
						ArmyforgeUI.deactivate(id,msgs);
					}					
				});
			});
		});				
	},

	createMenuItem:function(id,name,pts) {
		var item = new Element('tr', {'id':'menuItem_'+id, 'class':'interactive listItem even'});
		item.update( new Element('td').update(name) ).insert( new Element('td', {'class':'points'}).update(pts) );

		var msgBox = new Element('div', {'id':'menuItemMsg_'+id, 'class':'constraint'});
		item.firstDescendant().insert({top:msgBox});
		msgBox.hide();

		return item;
	},

	createMenu:function(name,items) {
		var newTable = new Element('table').update(
								new Element('tr').update(
									new Element('th', {colspan:2}).update(name) ));		
		if (items.length < 1) {	
			var listItem = new Element('tr', {'class':'listItem even'}).update(
									new Element('td', {colspan:'2', 'class':'inactive'}).update('None available') );
			newTable.insert(listItem);		
		};		
		items.each(function(i) {
			newTable.insert(i);
		});
		newTable.childElements().eachSlice(2, function(x) {
			x[0].removeClassName('even');
		});

		return new Element('div', {'class':'listDiv'}).update(newTable);
	},

	createSwapPopup:function(formation, upgrades, upgradeType) {
		var menuItems = [];
		upgrades.each(function(x) {
			var id = formation.id + '_' + upgradeType.id + '_' + x.id;
			var points = x.pts - upgradeType.pts;
			if (points > 0) {
				points = '+' + points;
			}
			var menuItem = ArmyforgeUI.createMenuItem(id, x.name, points);
			menuItems.push(menuItem);		
			menuItem.observe('click',
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.swapUpgrade)
						.bindAsEventListener(this, formation, x, upgradeType));
		});
		var menu = ArmyforgeUI.createMenu('REPLACE WITH...',menuItems);

		var dropDown = new Element('div', {'class':'dropDown'}).update(menu);
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},

	createSectionMenu:function(section) {
		var menuItems = [];
		section.formations.each(function(f) {
			var menuItem = ArmyforgeUI.createMenuItem(f.id, f.name, f.cost);
			menuItems.push(menuItem);		
			 // should this be done after the table is inserted in the DOM?
			menuItem.observe('click', 
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.addFormation)
						.bindAsEventListener(this, f, false, 'chooser', section.name));
		});
		var menu = ArmyforgeUI.createMenu(section.name,menuItems);

		$('armyList').insert(menu);
	},

	createUpgradesPopup:function(formation) {
		var menuItems = [];
		formation.type.upgrades.each( function(u){
			var menuItem = ArmyforgeUI.createMenuItem(formation.id+'_'+u.id, u.name, u.pts);
			menuItems.push(menuItem);
			menuItem.observe('click',
					ArmyforgeUI.wrapActivatableHandler(menuItem, ArmyforgeUI.addUpgrade)
						.bindAsEventListener(this, formation, u, 'upgrade_panel'));
		});
		var menu = ArmyforgeUI.createMenu('UPGRADES',menuItems);
		var dropDown = new Element('div', {'class':'dropDown'}).update(menu);
		dropDown.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
		return dropDown;
	},

	deactivate:function(id, msgs) {
		var msgDiv = $('menuItemMsg' + id);
		msgDiv.show();
		msgDiv.update('['+msgs.join(', ')+']');
		
		var row = $('menuItem' + id);
		row.removeClassName('interactive');
		row.addClassName('inactive');
	},

	formationRowFor:function(formation) {
		return $('formation_'+formation.id);
	},

	formationDetailsRowFor:function(formation) {
		return $('formationDetails_'+formation.id);
	},

	findUnitProfileByName:function(displayName) {
		if (!window.ArmyforgeUnitProfiles) {
			return null;
		}
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		var profileFindersByListId = {
			'CHAOS_damned_NETEA': ArmyforgeUnitProfiles.findChaosCultistSlavesToDarknessProfileByName,
			'CHAOS_latd_redux_NetEA': ArmyforgeUnitProfiles.findChaosCultistStigmatusCovenantProfileByName,
			'CHAOS_legion_NETEA': ArmyforgeUnitProfiles.findChaosSpaceMarineBlackLegionProfileByName,
			'CHAOS_ec_NETEA': ArmyforgeUnitProfiles.findChaosSpaceMarineEmperorsChildrenProfileByName,
			'CHAOS_ironwarriors_NETEA': ArmyforgeUnitProfiles.findChaosSpaceMarineIronWarriorsProfileByName,
			'CHAOS_corsairs_playtestNETEA': ArmyforgeUnitProfiles.findChaosSpaceMarineRedCorsairsProfileByName,
			'AMTL_knight_world_NETEA': ArmyforgeUnitProfiles.findKnightWorldProfileByName,
			'AMTL_skitarii_NETEA': ArmyforgeUnitProfiles.findAdeptusMechanicusSkitariiLegionProfileByName,
			'AMTL_gryphons_NETEA': ArmyforgeUnitProfiles.findAdeptusMechanicusTitanLegionProfileByName,
			'XENOS_necron_NETEA': ArmyforgeUnitProfiles.findNecronProfileByName,
			'XENOS_sautekh_necron_NETEA': ArmyforgeUnitProfiles.findSautekhNecronProfileByName,
			'XENOS_tau_NETEA': ArmyforgeUnitProfiles.findTauProfileByName,
			'XENOS_tau_developmental_NETEA': ArmyforgeUnitProfiles.findTauProfileByName,
			'XENOS_tau_Viorla_NETEA': ArmyforgeUnitProfiles.findViorlaTauProfileByName,
			'EL_dark_NETEA': ArmyforgeUnitProfiles.findDarkEldarProfileByName,
			'XENOS_nids_NETEA': ArmyforgeUnitProfiles.findTyranidProfileByName,
			'EL_bieltan_NETEA': ArmyforgeUnitProfiles.findEldarCraftworldProfileByName,
			'EL_saimhann_NETEA': ArmyforgeUnitProfiles.findEldarCraftworldProfileByName,
			'EL_iyanden_NETEA': ArmyforgeUnitProfiles.findEldarCraftworldProfileByName,
			'EL_alaitoc_NETEA': ArmyforgeUnitProfiles.findEldarCraftworldProfileByName,
			'IG_steelLegion_NETEA': ArmyforgeUnitProfiles.findIgSteelLegionProfileByName,
			'IG_siege_NETEA': ArmyforgeUnitProfiles.findIgBaranSiegeMastersProfileByName,
			'IG_krieg_NETEA': ArmyforgeUnitProfiles.findIgDeathKorpsOfKriegProfileByName,
			'IG_minervan_NETEA': ArmyforgeUnitProfiles.findIgMinervanTankLegionProfileByName,
			'IG_MobileCatachans_NETEA': ArmyforgeUnitProfiles.findMobileCatachansProfileByName,
			'IG_Tallarn_NETEA': ArmyforgeUnitProfiles.findTallarnDesertRaidersProfileByName,
			'XENOS_squats_NETEA': ArmyforgeUnitProfiles.findSquatProfileByName,
			'INQ_ordo_xenos_NETEA': ArmyforgeUnitProfiles.findInquisitionOrdoXenosProfileByName,
			'INQ_gk2018_NETEA': ArmyforgeUnitProfiles.findGreyKnightsProfileByName,
			'INQ_sisters2018_NETEA': ArmyforgeUnitProfiles.findSistersOfBattleProfileByName,
			'ORK_ghazgkhull_NETEA': ArmyforgeUnitProfiles.findOrkWarHordeProfileByName,
			'ORK_feral_NETEA': ArmyforgeUnitProfiles.findOrkFeralOrksProfileByName,
			'ORK_gargant_NETEA': ArmyforgeUnitProfiles.findOrkGargantMobProfileByName,
			'ORK_kult_NETEA': ArmyforgeUnitProfiles.findOrkSpeedFreeksProfileByName,
			'SM_codex_NETEA': ArmyforgeUnitProfiles.findSmCodexAstartesProfileByName,
			'SM_bloodAngels_NETEA': ArmyforgeUnitProfiles.findBloodAngelsProfileByName,
			'SM_DarkAngels_NETEA': ArmyforgeUnitProfiles.findDarkAngelsProfileByName,
			'SM_impfists_NETEA': ArmyforgeUnitProfiles.findSmImperialFistsProfileByName,
			'SM_Raven_Guard_NETEA': ArmyforgeUnitProfiles.findSmRavenGuardProfileByName,
			'SM_salamanders_NETEA': ArmyforgeUnitProfiles.findSmSalamandersProfileByName,
			'SM_scions_NETEA': ArmyforgeUnitProfiles.findSmScionsOfIronProfileByName,
			'SM_spacewolves_NETEA': ArmyforgeUnitProfiles.findSmSpaceWolvesProfileByName,
			'SM_scars_NETEA': ArmyforgeUnitProfiles.findSmWhiteScarsProfileByName
		};
		var profileFinder = profileFindersByListId[listId];
		if (profileFinder) {
			return profileFinder(displayName, listId);
		}
		return null;
	},

	findKnightWorldProfileMatch:function(formation, displayName) {
		if (displayName) {
			var directProfile = ArmyforgeUI.findUnitProfileByName(displayName);
			if (directProfile) {
				return directProfile;
			}
		}

		if (!formation) {
			return null;
		}

		var candidates = [];
		if (displayName) {
			candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(displayName));
		}
		candidates.push(formation.type.name);
		candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(formation.type.units));
		formation.upgrades.uniq().each(function(u) {
			candidates.push(u.name);
			candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(u.name));
		});

		var match = null;
		candidates.find(function(name) {
			match = ArmyforgeUI.findUnitProfileByName(name);
			return !!match;
		});
		return match;
	},

	findKnightWorldProfileMatch:function(formation, displayName) {
		if (displayName) {
			var directProfile = ArmyforgeUI.findUnitProfileByName(displayName);
			if (directProfile) {
				return directProfile;
			}
		}

		if (!formation) {
			return null;
		}

		var candidates = [];
		if (displayName) {
			candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(displayName));
		}
		candidates.push(formation.type.name);
		candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(formation.type.units));
		formation.upgrades.uniq().each(function(u) {
			candidates.push(u.name);
			candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(u.name));
		});

		var match = null;
		candidates.find(function(name) {
			match = ArmyforgeUI.findUnitProfileByName(name);
			return !!match;
		});
		return match;
	},

	normalizeTextForFormatting:function(text) {
		if (Object.prototype.toString.call(text) == '[object Array]') {
			return text.join('\n');
		}
		if (text == null) {
			return '';
		}
		return String(text);
	},

	normalizeUnitToken:function(text) {
		text = ArmyforgeUI.normalizeTextForFormatting(text);
		if (!text) {
			return '';
		}
		return text.replace(/\([^)]*\)/g, ' ')
				   .replace(/^\s*one of the following\s+/i, '')
				   .replace(/^\s*\d+\s*[–-]\s*\d+\s*/g, '')
				   .replace(/^\s*\d+\s*[xX]?\s*/g, '')
				   .replace(/^\s*(?:one|two|three|four|five|six|seven|eight|nine|ten)\s+/i, '')
				   .replace(/\s+/g, ' ')
				   .strip();
	},

	unitTokensFromText:function(text) {
		text = ArmyforgeUI.normalizeTextForFormatting(text);
		if (!text) {
			return [];
		}
		var normalized = text.replace(/\r?\n+/g, ',').replace(/\b(?:and|or)\b/gi, ',');
		var parts = normalized.split(',');
		var tokens = [];
		parts.each(function(part) {
			var cleaned = ArmyforgeUI.normalizeUnitToken(part);
			if (cleaned) {
				tokens.push(cleaned);
				if (/s$/.test(cleaned)) {
					tokens.push(cleaned.slice(0, -1));
				}
			}
		});
		if (/tank\s+squadron/i.test(text)) {
			tokens.push('Leman Russ');
			tokens.push('Leman Russ Demolisher');
		}
		if (/sappers?\s+unit/i.test(text)) {
			tokens.push('Sappers');
		}
		if (/griffon\s+battery/i.test(text)) {
			tokens.push('Griffon');
		}
		if (/rapier\s+platoon/i.test(text)) {
			tokens.push('Rapier Laser Destroyer');
		}
		if (/sniper\s+unit/i.test(text)) {
			tokens.push('Snipers');
		}
		if (/thudd\s+gun\s+platoon/i.test(text)) {
			tokens.push('Thudd Gun');
		}
		if (/hellhound\s+squadron/i.test(text)) {
			tokens.push('Hellhound');
		}
		if (/fire\s+support\s+battery/i.test(text)) {
			tokens.push('Fire Support');
		}
		if (/macharius\s+command\s+tank/i.test(text)) {
			tokens.push('Macharius Command');
		}
		if (/plague\s+zombie/i.test(text)) {
			tokens.push('Plague Zombies');
		}
		if (/gorgons?\s+with\s+mortar\s+characters/i.test(text)) {
			tokens.push('Gorgon Mortars');
		}
		if (/greater\s+daemon/i.test(text)) {
			tokens.push('Bloodthirster');
			tokens.push('Great Unclean One');
			tokens.push('Keeper of Secrets');
			tokens.push('Lord of Change');
		}
		if (/lesser\s+daemon/i.test(text)) {
			tokens.push('Bloodletters');
			tokens.push('Daemonettes');
			tokens.push('Plaguebearers');
			tokens.push('Daemonic Beasts');
			tokens.push('Flamers');
		}
		return tokens;
	},

	specialTitanProfileNameForFormation:function(formation) {
		if (!formation || !formation.type || !formation.type.name) {
			return null;
		}
		if (ArmyforgeUI.normalizeUnitToken(formation.type.name) != 'Emperor Titan') {
			return null;
		}
		var selectedProfile = null;
		formation.upgrades.uniq().each(function(u) {
			var normalizedUpgrade = ArmyforgeUI.normalizeUnitToken(u.name);
			if (!selectedProfile && normalizedUpgrade == 'Warmonger Configuration') {
				selectedProfile = 'Warmonger Class Titan';
			}
			else if (!selectedProfile && normalizedUpgrade == 'Imperator Configuration') {
				selectedProfile = 'Imperator Class Titan';
			}
		});
		return selectedProfile;
	},

	cloneProfileForDisplay:function(profile) {
		return {
			name:profile.name,
			type:profile.type,
			speed:profile.speed,
			armour:profile.armour,
			cc:profile.cc,
			ff:profile.ff,
			weapons:(profile.weapons || []).collect(function(weapon) {
				return {
					name:weapon.name,
					range:weapon.range,
					firepower:weapon.firepower,
					notes:(weapon.notes || []).slice()
				};
			}),
			abilities:(profile.abilities || []).slice()
		};
	},

	profileSignature:function(profile) {
		return [
			profile.name,
			profile.type,
			profile.speed,
			profile.armour,
			profile.cc,
			profile.ff,
			(profile.weapons || []).collect(function(weapon) {
				return [
					weapon.name,
					weapon.range,
					weapon.firepower,
					(weapon.notes || []).join(',')
				].join('~');
			}).join('|'),
			(profile.abilities || []).join('|')
		].join('||');
	},

	gargantWeaponUpgradeConstraintsForFormation:function(formation) {
		if (!formation || !formation.type || !formation.type.upgradeConstraints) {
			return [];
		}
		return formation.type.upgradeConstraints.findAll(function(constraint) {
			return /weapon/i.test(constraint.name || '');
		});
	},

	gargantWeaponMergeForFormation:function(formation) {
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'ORK_gargant_NETEA' || !formation) {
			return null;
		}

		var constraints = ArmyforgeUI.gargantWeaponUpgradeConstraintsForFormation(formation);
		if (!constraints.length) {
			return null;
		}

		var baseProfile = ArmyforgeUI.findUnitProfileByName(formation.type.name);
		if (!baseProfile || baseProfile.type != 'WE') {
			return null;
		}

		var allowedUpgradeIds = {};
		var optionProfiles = [];
		var selectedProfiles = [];
		var mergedUpgradeNames = {};
		var missingProfileNames = [];

		constraints.each(function(constraint) {
			constraint.from.each(function(upgradeType) {
				allowedUpgradeIds[upgradeType.id] = true;
				var optionProfile = ArmyforgeUI.findUnitProfileByName(upgradeType.name);
				if (optionProfile) {
					optionProfiles.push(optionProfile);
				}
				else if (!missingProfileNames.include(upgradeType.name)) {
					missingProfileNames.push(upgradeType.name);
				}
			});
		});

		formation.upgrades.each(function(upgradeType) {
			if (!allowedUpgradeIds[upgradeType.id]) {
				return;
			}
			mergedUpgradeNames[upgradeType.name] = true;
			var selectedProfile = ArmyforgeUI.findUnitProfileByName(upgradeType.name);
			if (selectedProfile) {
				selectedProfiles.push(selectedProfile);
			}
			else if (!missingProfileNames.include(upgradeType.name)) {
				missingProfileNames.push(upgradeType.name);
			}
		});

		if (!selectedProfiles.length) {
			return null;
		}

		if (missingProfileNames.length) {
			console.log('Missing Gargant weapon profiles for ' + formation.type.name + ': ' + missingProfileNames.join(', '));
		}

		var replaceableWeaponNames = {};
		optionProfiles.each(function(profile) {
			(profile.weapons || []).each(function(weapon) {
				replaceableWeaponNames[weapon.name] = true;
			});
		});

		var mergedProfile = ArmyforgeUI.cloneProfileForDisplay(baseProfile);
		mergedProfile.weapons = (mergedProfile.weapons || []).findAll(function(weapon) {
			return !replaceableWeaponNames[weapon.name];
		});

		selectedProfiles.each(function(profile) {
			(profile.weapons || []).each(function(weapon) {
				mergedProfile.weapons.push({
					name:weapon.name,
					range:weapon.range,
					firepower:weapon.firepower,
					notes:(weapon.notes || []).slice()
				});
			});
			(profile.abilities || []).each(function(ability) {
				if (!mergedProfile.abilities.include(ability)) {
					mergedProfile.abilities.push(ability);
				}
			});
		});

		return {
			profile:mergedProfile,
			mergedUpgradeNames:mergedUpgradeNames
		};
	},

	bloodAngelsFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	bloodAngelsAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'SM_bloodAngels_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		var hasJumpPacks = ArmyforgeUI.bloodAngelsFormationHasUpgrade(formation, /jump packs/i);
		var hasDropPods = ArmyforgeUI.bloodAngelsFormationHasUpgrade(formation, /drop pods?/i);
		var hasAlternateTransport = ArmyforgeUI.bloodAngelsFormationHasUpgrade(formation, /(razorback|land raider|stormraven|storm raven|landing craft)/i);
		var needsDefaultRhino = /^(Death Company|Tactical Detachment|Devastator Detachment|Scout Detachment)$/i.test(formationName);

		if (/^Death Company$/i.test(formationName)) {
			extras.push('Chaplain');
		}

		if (hasDropPods) {
			extras.push('Drop Pod');
		}
		else if (needsDefaultRhino && !hasJumpPacks && !hasAlternateTransport) {
			extras.push('Rhino');
		}

		return extras;
	},

	sistersOfBattleFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	sistersOfBattleAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'INQ_sisters2018_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		if (/^Mission$/i.test(formationName)) {
			extras.push('Battle Sister');
		}
		else if (/^Exorcism$/i.test(formationName)) {
			extras.push('Exorcist');
		}
		else if (/^Choir$/i.test(formationName)) {
			extras.push('Seraphim Sister');
		}
		else if (/^Retribution$/i.test(formationName)) {
			extras.push('Retributor Sister');
		}
		else if (/^Coven$/i.test(formationName)) {
			extras.push('Dominion Sister');
			extras.push('Rhino');
		}
		else if (/^Repentance$/i.test(formationName)) {
			extras.push('Repentia Sister');
			extras.push('Mistress');
		}
		else if (/^Purgeance$/i.test(formationName)) {
			if (!ArmyforgeUI.sistersOfBattleFormationHasUpgrade(formation, /(immolator|repressor)/i)) {
				extras.push('Immolator');
			}
		}
		else if (/^Pentinence$/i.test(formationName)) {
			extras.push('Pentinent Engine');
		}
		else if (/^Crusaders$/i.test(formationName)) {
			extras.push('Redemptionists');
			extras.push('Priest');
		}
		else if (/^Conclave$/i.test(formationName)) {
			extras.push('Arco-Flagellants');
		}
		else if (/^(0-1 Inquisitorial Strike Force|Inquisitor Hereticus Retinue)$/i.test(formationName)) {
			extras.push('Inq Storm Troopers');
			extras.push('Inquisitor');
		}
		else if (/^Cathedral of Purification$/i.test(formationName)) {
			extras.push('Cathedral of Purification');
		}
		else if (/^Orbital Support$/i.test(formationName)) {
			extras.push('Lunar Class Spaceship');
		}

		formation.upgrades.each(function(u) {
			var upgradeName = u && u.name ? u.name : '';
			if (/celestian/i.test(upgradeName)) {
				extras.push('Celestian Sister');
			}
			if (/dominion/i.test(upgradeName)) {
				extras.push('Dominion Sister');
			}
			if (/retribution|retributor/i.test(upgradeName)) {
				extras.push('Retributor Sister');
			}
			if (/battle sister/i.test(upgradeName)) {
				extras.push('Battle Sister');
			}
		});

		return extras.uniq();
	},

	viorlaTauFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	viorlaTauAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'XENOS_tau_Viorla_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		if (/^Fire Warrior Breacher Cadre$/i.test(formationName)) {
			extras.push('Fire Warrior Breachers');
			if (ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /pathfinder/i)) {
				extras.push('Pathfinders');
			}
			if (ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /devilfish/i)) {
				extras.push('Devilfish');
			}
		}
		else if (/^(Pathfinders|Pathfinder Group)$/i.test(formationName)) {
			extras.push('Pathfinders');
			if (!ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /\b6 pathfinder units\b/i) ||
				ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /devilfish/i)) {
				extras.push('Devilfish');
			}
		}
		else if (/^(Vior.?la XV8 Crisis Suit Formation|Vior.?la XV8 Crisis Suit Cadre|Crisis Suit Formation)$/i.test(formationName)) {
			extras.push('Vior’la XV8 Crisis Battlesuit');
			extras.push('Shas’el Commander');
		}
		else if (/^(Heavy Battlesuit formation|Heavy Battlesuit Cadre)$/i.test(formationName)) {
			extras.push('Shas’el Commander');
			if (ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /riptide/i)) {
				extras.push('XV104 Riptide Battlesuit');
			}
			if (ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /r.?varna/i)) {
				extras.push('XV107 R’Varna Battlesuit');
			}
			if (ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /y.?vahra/i)) {
				extras.push('XV109 Y’vahra Battlesuit');
			}
			if (!ArmyforgeUI.viorlaTauFormationHasUpgrade(formation, /(riptide|r.?varna|y.?vahra)/i)) {
				extras.push('XV104 Riptide Battlesuit');
				extras.push('XV107 R’Varna Battlesuit');
				extras.push('XV109 Y’vahra Battlesuit');
			}
		}
		else if (/^(KV128 Stormsurge formation|KV128 Stormsurge Formation)$/i.test(formationName)) {
			extras.push('KX128 Stormsurge Battlesuit');
		}
		else if (/^(KV139 Supremacy formation|KX139 Ta.?unar Supremacy)$/i.test(formationName)) {
			extras.push('KX139 Supremacy Suit');
		}
		else if (/^(XV88 Broadside|Broadside Group)$/i.test(formationName)) {
			extras.push('XV88 Broadside Battlesuit');
		}
		else if (/^Stealth Group$/i.test(formationName)) {
			extras.push('XV15 Stealth Battlesuit');
		}
		else if (/^Razorshark Squadron$/i.test(formationName)) {
			extras.push('Razorshark Fighter');
		}
		else if (/^(Sunshark Squadron|Sun Shark Squadron)$/i.test(formationName)) {
			extras.push('Sunshark Bomber');
		}
		else if (/^(Vior.?la Assault Orca|Orca Dropship)$/i.test(formationName)) {
			extras.push('Vior’la Orca Dropship');
		}
		else if (/^Spacecraft$/i.test(formationName)) {
			extras.push('Protector II Class Cruiser');
		}
		else if (/^Manta Dropship$/i.test(formationName)) {
			extras.push('Manta');
		}

		formation.upgrades.each(function(u) {
			var upgradeName = u && u.name ? u.name : '';
			if (/bonded team/i.test(upgradeName)) {
				extras.push('Bonded Team');
			}
			if (/shas.?o|shaso/i.test(upgradeName)) {
				extras.push('Shas’O Supreme Commander');
			}
			if (/shas.?el|shasel/i.test(upgradeName)) {
				extras.push('Shas’el Commander');
			}
			if (/fireblade/i.test(upgradeName)) {
				extras.push('Fireblade');
			}
			if (/ethereal/i.test(upgradeName)) {
				extras.push('Ethereal');
			}
			if (/gun drones?|2 gun drones?/i.test(upgradeName)) {
				extras.push('Gun Drones');
			}
			if (/skyray/i.test(upgradeName)) {
				extras.push('Skyray Missile Defence Gunship');
			}
			if (/broadside/i.test(upgradeName)) {
				extras.push('XV88 Broadside Battlesuit');
			}
			if (/crisis battlesuit|crisis suit/i.test(upgradeName)) {
				extras.push('Vior’la XV8 Crisis Battlesuit');
			}
			if (/fire warrior breacher|fire warriors?/i.test(upgradeName)) {
				extras.push('Fire Warrior Breachers');
			}
			if (/pathfinder/i.test(upgradeName)) {
				extras.push('Pathfinders');
			}
			if (/devilfish/i.test(upgradeName)) {
				extras.push('Devilfish');
			}
			if (/ghostkeel/i.test(upgradeName)) {
				extras.push('XV95 Ghostkeel Battlesuit');
			}
			if (/riptide/i.test(upgradeName)) {
				extras.push('XV104 Riptide Battlesuit');
			}
			if (/r.?varna/i.test(upgradeName)) {
				extras.push('XV107 R’Varna Battlesuit');
			}
			if (/y.?vahra/i.test(upgradeName)) {
				extras.push('XV109 Y’vahra Battlesuit');
			}
		});

		return extras.uniq();
	},

	darkAngelsFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	darkAngelsAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'SM_DarkAngels_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		if (/^Tacticals$/i.test(formationName)) {
			extras.push('Tactical Marines');
			if (!ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /drop pods?/i)) {
				extras.push('Rhino');
			}
		}
		else if (/^Land Raiders$/i.test(formationName)) {
			extras.push('Land Raider');
		}
		else if (/^(Scouts|Scout Infiltrators)$/i.test(formationName)) {
			extras.push('Sniper Scouts');
			extras.push('Rhino');
		}
		else if (/^Assaults$/i.test(formationName)) {
			extras.push('Dark Angels Assault Marines');
			extras.push('Dark Angels Captain');
		}
		else if (/^Devastators$/i.test(formationName)) {
			extras.push('Dark Angels Devastators');
			if (!ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /drop pods?/i)) {
				extras.push('Rhino');
			}
		}
		else if (/^Predators$/i.test(formationName)) {
			extras.push('Predator Destructor');
		}
		else if (/^Siege Breachers$/i.test(formationName)) {
			extras.push('Land Raider Ares');
		}
		else if (/^Whirlwinds$/i.test(formationName)) {
			extras.push('Whirlwind');
		}
		else if (/^Deathwing Terminators$/i.test(formationName)) {
			extras.push('Deathwing Terminators');
		}
		else if (/^Ravenwing Attack$/i.test(formationName)) {
			extras.push('Ravenwing Black Knights');
			extras.push('Ravenwing Land Speeder');
			if (ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /attack bike/i)) {
				extras.push('Ravenwing Attack Bike');
			}
			else {
				extras.push('Ravenwing Assault Bikes');
			}
		}
		else if (/^Deathwing Overwatch$/i.test(formationName)) {
			extras.push('Deathwing Cyclone Terminators');
		}
		else if (/^Deathwing Knights$/i.test(formationName)) {
			extras.push('Deathwing Knights');
			extras.push('Deathwing Terminators');
			extras.push('Interrogator Chaplain');
			extras.push('Librarian');
		}
		else if (/^Deathwing Dreadnoughts$/i.test(formationName)) {
			extras.push('Deathwing Dreadnought');
			if (!ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /drop pods?/i)) {
				extras.push('Rhino');
			}
		}
		else if (/^Deathwing Land Raiders$/i.test(formationName)) {
			extras.push('Deathwing Land Raider');
		}
		else if (/^Ravenwing Support$/i.test(formationName)) {
			if (ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /venegance|vengeance/i)) {
				extras.push('Ravenwing Land Speeder Venegance');
			}
			else {
				extras.push('Ravenwing Land Speeder Tornado');
			}
		}
		else if (/^Relic Deimos$/i.test(formationName)) {
			extras.push('Deimos Predator Executioner');
			extras.push('Deimos Vindicator Laser Destroyer');
		}
		else if (/^Relic Glaive$/i.test(formationName)) {
			extras.push('Glaive');
		}
		else if (/^Ravenwing Nephilim$/i.test(formationName)) {
			extras.push('Ravenwing Nephilim Interceptor');
		}
		else if (/^Ravenwing Dark Talon$/i.test(formationName)) {
			extras.push('Ravenwing Dark Talon');
		}
		else if (/^Thunderhawk Transporter$/i.test(formationName)) {
			extras.push('Dark Angels Thunderhawk Transporter');
		}
		else if (/^(Strike Cruiser|0-1 Swordwing|Swordwing)$/i.test(formationName)) {
			if (ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /battle barge/i)) {
				extras.push('Battle Barge');
			}
			else if (ArmyforgeUI.darkAngelsFormationHasUpgrade(formation, /strike cruiser/i)) {
				extras.push('Strike Cruiser');
			}
			else {
				extras.push('Hunter Class Destroyer');
			}
		}

		formation.upgrades.each(function(u) {
			var upgradeName = u && u.name ? u.name : '';
			if (/dark angels captain|(^|\b)captain(\b|$)/i.test(upgradeName)) {
				extras.push('Dark Angels Captain');
			}
			if (/librarian/i.test(upgradeName)) {
				extras.push('Librarian');
			}
			if (/interrogator chaplain|(^|\b)interrogator(\b|$)/i.test(upgradeName)) {
				extras.push('Interrogator Chaplain');
			}
			if (/grand master/i.test(upgradeName)) {
				extras.push('Grand Master');
			}
			if (/razorback/i.test(upgradeName)) {
				extras.push('Dark Angels Razorback');
			}
			if (/mortis/i.test(upgradeName)) {
				extras.push('Mortis Dreadnought');
			}
			if (/vindicator/i.test(upgradeName)) {
				extras.push('Vindicator');
			}
			if (/stalker/i.test(upgradeName)) {
				extras.push('Dark Angels Stalker');
			}
			if (/hunters?/i.test(upgradeName)) {
				extras.push('Hunter');
			}
			if (/6 tacticals?/i.test(upgradeName)) {
				extras.push('Tactical Marines');
			}
			if (/deathwing land raider|deathwing transport/i.test(upgradeName)) {
				extras.push('Deathwing Land Raider');
			}
			if (/ravenwing attack bike|attack bikes?/i.test(upgradeName)) {
				extras.push('Ravenwing Attack Bike');
			}
			if (/venegance|vengeance/i.test(upgradeName)) {
				extras.push('Ravenwing Land Speeder Venegance');
			}
			if (/glaive/i.test(upgradeName)) {
				extras.push('Glaive');
			}
			if (/thunderhawk transporter|(^|\b)transporter(\b|$)/i.test(upgradeName)) {
				extras.push('Dark Angels Thunderhawk Transporter');
			}
			if (/strike cruiser/i.test(upgradeName)) {
				extras.push('Strike Cruiser');
			}
			if (/battle barge/i.test(upgradeName)) {
				extras.push('Battle Barge');
			}
			if (/drop pods?/i.test(upgradeName)) {
				extras.push('Drop Pods');
			}
		});

		return extras.uniq();
	},

	greyKnightsFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	greyKnightsAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'INQ_gk2018_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		var hasGrandMasterWithEscort = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /grand master with paladin escort/i);
		var hasGrandMaster = hasGrandMasterWithEscort || ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /grand master/i);
		var hasLibrarian = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /librarian|command/i);
		var hasBrotherCaptain = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /brother captain/i);
		var hasDeathCult = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /death cult assassins?/i);
		var hasRhinos = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /(^|\b)rhinos?(\b|$)|4 rhinos/i);
		var hasDropPods = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /drop pods?/i);
		var hasStormraven = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /stormraven|storm raven/i);
		var hasRazorback = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /razorback/i);
		var hasLandRaider = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /land raider/i);
		var hasValkyrie = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /valkyries?|4 valkyries/i);
		var hasDreadnought = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /grey knights dreadnought/i);
		var hasNemesisDreadknight = ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /nemesis dreadknight/i);

		var addCommandProfile = function() {
			if (hasGrandMaster) {
				extras.push('Grand Master');
			}
			else if (hasLibrarian) {
				extras.push('Grey Knight Librarian');
			}
			else if (hasBrotherCaptain || /^(Grey Knights Strike Team|Grey Knights Terminators|Grey Knights Interceptor Squad|Grey Knights Purgation Squad|Grey Knight Purifiers|Grey Knights Land Raider)$/i.test(formationName)) {
				extras.push('Brother Captain');
			}
			if (hasGrandMasterWithEscort || ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /paladin escort/i)) {
				extras.push('Paladin Escort');
			}
		};

		if (/^(Grey Knights Strike Team|Strike Squad)$/i.test(formationName)) {
			extras.push('Strike Squad');
			addCommandProfile();
		}
		else if (/^Inquisitorial Warband$/i.test(formationName)) {
			extras.push('Inquisitorial Warrior Acolytes');
			extras.push('Inquisitor');
			extras.push('Chimera');
		}
		else if (/^(Grey Knights Terminators|Terminators)$/i.test(formationName)) {
			extras.push('Grey Knight Terminators');
			addCommandProfile();
		}
		else if (/^(Grey Knight Purifiers|0-1 Purifier Squad|Purifier Squad)$/i.test(formationName)) {
			extras.push('Purifier Squad');
			addCommandProfile();
		}
		else if (/^(Eternal Warrior Formation|Eternal Warrior Formation - Grey Knight Dreadnoughts)$/i.test(formationName)) {
			extras.push('Grey Knight Dreadnought');
			if (/^Eternal Warrior Formation$/i.test(formationName)) {
				extras.push('Eternal Warrior Formation');
				extras.push('Nemesis Dreadknight');
			}
		}
		else if (/^Eternal Warrior Formation - Nemesis Dreadknights$/i.test(formationName)) {
			extras.push('Nemesis Dreadknight');
		}
		else if (/^(Grey Knights Interceptor Squad|Interceptor Squad)$/i.test(formationName)) {
			extras.push('Interceptors');
			addCommandProfile();
		}
		else if (/^(Grey Knights Purgation Squad|Purgation Squad)$/i.test(formationName)) {
			extras.push('Purgation Squad');
			addCommandProfile();
		}
		else if (/^(Grey Knights Land Raider|Land Raiders)$/i.test(formationName)) {
			addCommandProfile();
			if (ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /land raider crusader/i)) {
				extras.push('Land Raider Crusader');
			}
			if (ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /land raider redeemer/i)) {
				extras.push('Land Raider Redeemer');
			}
			if (ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /(^|\b)land raider(\b|$)/i)) {
				extras.push('Land Raider');
			}
			if (!ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /land raider|crusader|redeemer/i)) {
				extras.push('Land Raider');
				extras.push('Land Raider Crusader');
				extras.push('Land Raider Redeemer');
			}
		}
		else if (/^(Grey Knights Space Craft|0-1 Strike Cruisers|Strike Cruiser|Strike Cruisers)$/i.test(formationName)) {
			if (ArmyforgeUI.greyKnightsFormationHasUpgrade(formation, /battle ?barge/i)) {
				extras.push('Battle Barge');
			}
			else {
				extras.push('Strike Cruiser');
			}
		}
		else if (/^(Stormraven Flight|Storm Raven Flight)$/i.test(formationName)) {
			extras.push('Stormraven Gunship');
		}
		else if (/^(Inquisitorial Stormtroopers|Inquisitorial Storm Troopers)$/i.test(formationName)) {
			extras.push('Inquisitorial Storm Troopers');
			extras.push('Inquisitor');
			if (hasValkyrie) {
				extras.push('Valkyrie');
			}
			else {
				extras.push('Rhino');
			}
		}
		else if (/^Inquisitorial Hellhound Platoon$/i.test(formationName)) {
			extras.push('Inquisitorial Hellhound');
		}
		else if (/^Inquisitorial Tank Company$/i.test(formationName)) {
			extras.push('Inquisitorial Leman Russ Tank');
		}
		else if (/^Thunderhawk Gunship$/i.test(formationName)) {
			extras.push('Thunderhawk Gunship');
		}
		else if (/^(Thunderhawk Transporters|Thunderhawk Transporter)$/i.test(formationName)) {
			extras.push('Thunderhawk Transporter');
		}
		else if (/^Landing Craft$/i.test(formationName)) {
			extras.push('Landing Craft');
		}
		else if (/^(Stormtalons|Stormtalon Gunship)$/i.test(formationName)) {
			extras.push('Stormtalon Fighter-Bomber');
		}

		formation.upgrades.each(function(u) {
			var upgradeName = u && u.name ? u.name : '';
			if (/grand master with paladin escort/i.test(upgradeName)) {
				extras.push('Grand Master');
				extras.push('Paladin Escort');
			}
			else if (/grand master/i.test(upgradeName)) {
				extras.push('Grand Master');
			}
			if (/librarian|command/i.test(upgradeName)) {
				extras.push('Grey Knight Librarian');
			}
			if (/brother captain/i.test(upgradeName)) {
				extras.push('Brother Captain');
			}
			if (/death cult assassins?/i.test(upgradeName)) {
				extras.push('Death Cult Assassin');
			}
			if (/grey knights dreadnought/i.test(upgradeName)) {
				extras.push('Grey Knight Dreadnought');
			}
			if (/nemesis dreadknight/i.test(upgradeName)) {
				extras.push('Nemesis Dreadknight');
			}
			if (/paladin escort/i.test(upgradeName)) {
				extras.push('Paladin Escort');
			}
			if (/hunter/i.test(upgradeName)) {
				extras.push('Hunter');
			}
			if (/land raider crusader/i.test(upgradeName)) {
				extras.push('Land Raider Crusader');
			}
			if (/land raider redeemer/i.test(upgradeName)) {
				extras.push('Land Raider Redeemer');
			}
			if (/(^|\b)land raider(\b|$)/i.test(upgradeName)) {
				extras.push('Land Raider');
			}
			if (/razorback/i.test(upgradeName)) {
				extras.push('Grey Knight Razorback');
			}
			if (/(^|\b)rhinos?(\b|$)|4 rhinos/i.test(upgradeName)) {
				extras.push('Rhino');
			}
			if (/stormraven|storm raven/i.test(upgradeName)) {
				extras.push('Stormraven Gunship');
			}
			if (/valkyries?|4 valkyries/i.test(upgradeName)) {
				extras.push('Valkyrie');
			}
			if (/battle ?barge/i.test(upgradeName)) {
				extras.push('Battle Barge');
			}
			if (/strike cruiser/i.test(upgradeName)) {
				extras.push('Strike Cruiser');
			}
			if (/drop pods?/i.test(upgradeName)) {
				extras.push('Grey Knights Drop Pod');
			}
			if (/3 chimeras/i.test(upgradeName)) {
				extras.push('Chimera');
			}
		});

		if (hasDeathCult) {
			extras.push('Death Cult Assassin');
		}
		if (hasDreadnought) {
			extras.push('Grey Knight Dreadnought');
		}
		if (hasNemesisDreadknight) {
			extras.push('Nemesis Dreadknight');
		}
		if (hasDropPods) {
			extras.push('Grey Knights Drop Pod');
		}
		if (hasStormraven) {
			extras.push('Stormraven Gunship');
		}
		if (hasRazorback) {
			extras.push('Grey Knight Razorback');
		}
		if (hasRhinos && !hasValkyrie && !hasDropPods && !hasStormraven && !hasLandRaider) {
			extras.push('Rhino');
		}

		return extras.uniq();
	},

	tallarnDesertRaidersFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	tallarnDesertRaidersAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'IG_Tallarn_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		if (/^Infantry Company$/i.test(formationName)) {
			extras.push(ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^supreme commander$/i) ? 'Imperial Guard Supreme Commander' : 'Imperial Guard Commander');
			extras.push('Imperial Guard Infantry');
			extras.push('Sniper');
		}
		else if (/^Mechanized Infantry Company$/i.test(formationName)) {
			extras.push(ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^supreme commander$/i) ? 'Imperial Guard Supreme Commander' : 'Imperial Guard Commander');
			extras.push('Imperial Guard Infantry');
			extras.push('Sniper');
			extras.push('Chimera');
		}
		else if (/^Mukaali Assault Company$/i.test(formationName)) {
			extras.push(ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^cavalry supreme commander$/i) ? 'Cavalry Supreme Commander' : 'Cavalry Commander');
			if (ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^mukaali cavalry support$/i)) {
				extras.push('Mukaali Support Cavalry');
			}
			if (ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^mukaali cavalry\s*$/i)) {
				extras.push('Mukaali Cavalry');
			}
			if (!ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /^mukaali cavalry(\s+support)?\s*$/i)) {
				extras.push('Mukaali Cavalry');
				extras.push('Mukaali Support Cavalry');
			}
		}
		else if (/^Sentinel Platoon$/i.test(formationName)) {
			extras.push('Tallarn Sentinel');
		}
		else if (/^Fire Support Platoon$/i.test(formationName)) {
			extras.push('Fire Support');
			if (ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /2 chimeras/i)) {
				extras.push('Chimera');
			}
		}
		else if (/^Light Artillery Platoon$/i.test(formationName)) {
			extras.push('Chimera');
			extras.push('Thudd Gun');
		}
		else if (/^Desert Raiders Platoon$/i.test(formationName)) {
			extras.push('Stormtrooper');
			extras.push('Sniper');
			if (ArmyforgeUI.tallarnDesertRaidersFormationHasUpgrade(formation, /4 chimeras/i)) {
				extras.push('Chimera');
			}
		}
		else if (/^Hellhound Squadron$/i.test(formationName)) {
			extras.push('Hellhound');
		}
		else if (/^Griffon Squadron$/i.test(formationName)) {
			extras.push('Griffon');
		}
		else if (/^Anti-Aircraft Platoon$/i.test(formationName)) {
			extras.push('Sabre Platform');
			extras.push('Chimera');
		}
		else if (/^Rough Rider Platoon$/i.test(formationName)) {
			extras.push('Cavalry Commander');
			extras.push('Rough Rider');
		}
		else if (/^Tauros Platoon$/i.test(formationName)) {
			extras.push('Tauros');
			extras.push('Tauros Venator');
		}
		else if (/^Conqueror Platoon$/i.test(formationName)) {
			extras.push('Leman Russ Conqueror');
		}
		else if (/^Thunderbolt Squadron$/i.test(formationName)) {
			extras.push('Thunderbolt Fighter-Bomber');
		}
		else if (/^Destroyer Squadron$/i.test(formationName)) {
			extras.push('Marauder Destroyer');
		}
		else if (/^(Knight House Banner|Questoris Knights)$/i.test(formationName)) {
			extras.push('Questoris Knight');
		}
		return extras.uniq();
	},

	mobileCatachansFormationHasUpgrade:function(formation, pattern) {
		if (!formation || !formation.upgrades || !pattern) {
			return false;
		}
		return formation.upgrades.any(function(u) {
			return u && u.name && pattern.test(u.name);
		});
	},

	mobileCatachansAdditionalProfilesForFormation:function(formation) {
		var extras = [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		if (listId != 'IG_MobileCatachans_NETEA' || !formation || !formation.type) {
			return extras;
		}

		var formationName = formation.type.name || '';
		if (/^Airborne Regimental HQ$/i.test(formationName)) {
			extras.push('Imperial Guard Infantry');
			extras.push('Imperial Guard Supreme Commander');
			extras.push('Valkyrie');
		}
		else if (/^Airborne Infantry Company$/i.test(formationName)) {
			extras.push('Imperial Guard Infantry');
			extras.push('Imperial Guard Commander');
			extras.push('Valkyrie');
		}
		else if (/^Airborne Ogryn Company$/i.test(formationName)) {
			extras.push('Ogryns');
			extras.push('Imperial Guard Commander');
			extras.push('Valkyrie');
		}
		else if (/^(Sentinels|Sentinel Patrol)$/i.test(formationName)) {
			var hasCatachan = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /catachan sentinel/i);
			var hasDrop = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /drop sentinel/i);
			var hasSupport = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /support sentinel/i);
			if (hasCatachan || hasDrop || hasSupport) {
				if (hasCatachan) {
					extras.push('Catachan Sentinel');
				}
				if (hasDrop) {
					extras.push('Drop Sentinel');
				}
				if (hasSupport) {
					extras.push('Support Sentinel');
				}
			}
			else {
				extras.push('Catachan Sentinel');
				extras.push('Drop Sentinel');
				extras.push('Support Sentinel');
			}
		}
		else if (/^Airborne Support Platoons?$/i.test(formationName)) {
			var hasFireSupport = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /fire support units?/i);
			var hasMortars = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /mortar units?/i);
			if (hasFireSupport) {
				extras.push('Fire Support Squad');
			}
			if (hasMortars) {
				extras.push('Mortar Team');
			}
			if (!hasFireSupport && !hasMortars) {
				extras.push('Fire Support Squad');
				extras.push('Mortar Team');
			}
			extras.push('Imperial Guard Infantry');
			extras.push('Imperial Guard Commander');
			extras.push('Valkyrie');
		}
		else if (/^0-1 Veterans$/i.test(formationName)) {
			extras.push('Veterans');
		}
		else if (/^(Airborne Stormtroopers|Airborne Storm Trooper Platoon)$/i.test(formationName)) {
			extras.push('Stormtroopers');
			extras.push('Valkyrie');
		}
		else if (/^Vulture Punishers$/i.test(formationName)) {
			extras.push('Vulture Punisher');
		}
		else if (/^Vultures$/i.test(formationName)) {
			var hasVulture = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /^vulture$/i);
			var hasTornado = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /^vulture tornado$/i);
			if (hasVulture || hasTornado) {
				if (hasVulture) {
					extras.push('Vulture');
				}
				if (hasTornado) {
					extras.push('Vulture Tornado');
				}
			}
			else {
				extras.push('Vulture');
			}
		}
		else if (/^Lightning Squadron$/i.test(formationName)) {
			extras.push('Lightning Strike Fighter');
		}
		else if (/^(Marauder Squadron|Marauder Bombers)$/i.test(formationName)) {
			extras.push('Marauder Bomber');
		}
		else if (/^Thunderbolt Squadron$/i.test(formationName)) {
			extras.push('Thunderbolt Fighter');
		}
		else if (/^(Spacecraft|0-1 Orbital Support)/i.test(formationName)) {
			var hasLunar = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /lunar class cruiser/i);
			var hasEmperor = ArmyforgeUI.mobileCatachansFormationHasUpgrade(formation, /emperor class battleship/i);
			if (hasLunar || hasEmperor) {
				if (hasLunar) {
					extras.push('Lunar Class Cruiser');
				}
				if (hasEmperor) {
					extras.push('Emperor Class Battleship');
				}
			}
			else {
				extras.push('Lunar Class Cruiser');
				extras.push('Emperor Class Battleship');
			}
		}

		formation.upgrades.uniq().each(function(upgrade) {
			var upgradeName = upgrade && upgrade.name ? upgrade.name : '';
			if (/fire support squad/i.test(upgradeName) || /^fire support$/i.test(upgradeName)) {
				extras.push('Fire Support Squad');
				extras.push('Valkyrie');
			}
			if (/mortar/i.test(upgradeName) || /^mortar support$/i.test(upgradeName)) {
				extras.push('Mortar Team');
				extras.push('Valkyrie');
			}
			if (/six imperial guard infantry units and 3 valkyries/i.test(upgradeName) || /^infantry platoon$/i.test(upgradeName)) {
				extras.push('Imperial Guard Infantry');
				extras.push('Valkyrie');
			}
			if (/ogryn/i.test(upgradeName)) {
				extras.push('Ogryns');
				if (/valkyrie/i.test(upgradeName)) {
					extras.push('Valkyrie');
				}
			}
			if (/sniper/i.test(upgradeName)) {
				extras.push('Sniper');
				if (/valkyrie/i.test(upgradeName)) {
					extras.push('Valkyrie');
				}
			}
			if (/sky talon/i.test(upgradeName)) {
				extras.push('Valkyrie Sky Talon');
			}
			if (/vendetta/i.test(upgradeName)) {
				extras.push('Vendetta');
			}
			if (/add 2 vulture punishers/i.test(upgradeName)) {
				extras.push('Vulture Punisher');
			}
			if (/add 2 vultures/i.test(upgradeName)) {
				extras.push('Vulture');
			}
			if (/add 1 vulture,\s*1 vulture tornado/i.test(upgradeName)) {
				extras.push('Vulture');
				extras.push('Vulture Tornado');
			}
			else if (/vulture tornado/i.test(upgradeName)) {
				extras.push('Vulture Tornado');
			}
			if (/^commissar$/i.test(upgradeName)) {
				extras.push('Commissar');
			}
		});

		return extras.uniq();
	},

	uniqueProfilesForFormation:function(formation) {
		var candidates = [];
		var seen = {};
		var profiles = [];
		var gargantWeaponMerge = ArmyforgeUI.gargantWeaponMergeForFormation(formation);

		if (gargantWeaponMerge) {
			seen[gargantWeaponMerge.profile.name] = true;
			profiles.push(gargantWeaponMerge.profile);
		}

		var specialTitanProfileName = ArmyforgeUI.specialTitanProfileNameForFormation(formation);
		if (specialTitanProfileName) {
			candidates.push(specialTitanProfileName);
		}
		else {
			candidates.push(formation.type.name);
		}
		candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(formation.type.units));
		formation.upgrades.uniq().each(function(u) {
			if (gargantWeaponMerge && gargantWeaponMerge.mergedUpgradeNames[u.name]) {
				return;
			}
			candidates.push(u.name);
			candidates = candidates.concat(ArmyforgeUI.unitTokensFromText(u.name));
		});

		candidates.each(function(name) {
			var profile = ArmyforgeUI.findUnitProfileByName(name);
			if (profile && !seen[profile.name]) {
				seen[profile.name] = true;
				profiles.push(profile);
			}
		});

		if ((ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null) == 'XENOS_sautekh_necron_NETEA' &&
			formation && formation.type && formation.type.name == 'Pylon') {
			var pylonUpgradeCount = formation.upgrades.findAll(function(u) {
				return u && u.name == 'Pylon';
			}).length;
			if (pylonUpgradeCount > 1) {
				var sentryPylonsProfile = ArmyforgeUI.findUnitProfileByName('Sentry Pylons');
				if (sentryPylonsProfile && !seen[sentryPylonsProfile.name]) {
					seen[sentryPylonsProfile.name] = true;
					profiles.push(sentryPylonsProfile);
				}
			}
		}

		ArmyforgeUI.bloodAngelsAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.sistersOfBattleAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.viorlaTauAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.darkAngelsAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.greyKnightsAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.tallarnDesertRaidersAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		ArmyforgeUI.mobileCatachansAdditionalProfilesForFormation(formation).each(function(name) {
			var extraProfile = ArmyforgeUI.findUnitProfileByName(name);
			if (extraProfile && !seen[extraProfile.name]) {
				seen[extraProfile.name] = true;
				profiles.push(extraProfile);
			}
		});

		return profiles;
	},

	createProfileCard:function(profile) {
		var cardClassName = 'profileCard' + (profile.type == 'Formation' ? ' profileCardReference' : '');
		var card = new Element('div', {'class':cardClassName});
		card.insert(new Element('div', {'class':'profileName'}).update(profile.name));
		card.insert(new Element('div', {'class':'profileStats'}).update(
			'Type: ' + profile.type + ' | Speed: ' + profile.speed + ' | Armour: ' + profile.armour + ' | CC: ' + profile.cc + ' | FF: ' + profile.ff
		));

		var weapons = new Element('ul', {'class':'profileWeapons'});
		profile.weapons.each(function(w) {
			var notes = (w.notes && w.notes.length) ? (' [' + w.notes.join(', ') + ']') : '';
			weapons.insert(new Element('li').update(w.name + ' — ' + w.range + ' — ' + w.firepower + notes));
		});
		card.insert(new Element('div', {'class':'profileSubheading'}).update('Weapons'));
		card.insert(weapons);

		var abilities = new Element('ul', {'class':'profileAbilities'});
		profile.abilities.each(function(a) {
			abilities.insert(new Element('li').update(a));
		});
		card.insert(new Element('div', {'class':'profileSubheading'}).update('Abilities / Notes'));
		card.insert(abilities);

		return card;
	},

	createPrintV2ProfileCard:function(profile) {
		var cardClassName = 'profileCard profileCardPrint' + (profile.type == 'Formation' ? ' profileCardReference' : '');
		var card = new Element('div', {'class':cardClassName});
		card.insert(new Element('div', {'class':'profileCardHeader'}).update(profile.name));

		var stats = new Element('div', {'class':'profileStatsGrid'});
		[
			['Type', profile.type],
			['Speed', profile.speed],
			['Armour', profile.armour],
			['CC', profile.cc],
			['FF', profile.ff]
		].each(function(stat) {
			var item = new Element('div', {'class':'profileStatItem'});
			item.insert(new Element('div', {'class':'profileStatLabel'}).update(stat[0]));
			item.insert(new Element('div', {'class':'profileStatValue'}).update(stat[1]));
			stats.insert(item);
		});
		card.insert(stats);

		var weaponsSection = new Element('div', {'class':'profileSection'});
		weaponsSection.insert(new Element('div', {'class':'profileSectionTitle'}).update('Weapons'));
		if (profile.weapons && profile.weapons.length) {
			var weaponsTable = new Element('table', {'class':'profileWeaponsTable'});
			weaponsTable.insert(
				new Element('thead').insert(
					new Element('tr')
						.insert(new Element('th').update('Weapon'))
						.insert(new Element('th').update('Range'))
						.insert(new Element('th').update('Firepower'))
				)
			);
			var weaponsBody = new Element('tbody');
			profile.weapons.each(function(w) {
				var row = new Element('tr');
				var weaponCell = new Element('td', {'class':'profileWeaponName'}).update(w.name);
				if (w.notes && w.notes.length) {
					weaponCell.insert(new Element('div', {'class':'profileWeaponNotes'}).update(w.notes.join('; ')));
				}
				row.insert(weaponCell);
				row.insert(new Element('td', {'class':'profileWeaponRange'}).update(w.range || '-'));
				row.insert(new Element('td', {'class':'profileWeaponFirepower'}).update(w.firepower || '-'));
				weaponsBody.insert(row);
			});
			weaponsTable.insert(weaponsBody);
			weaponsSection.insert(weaponsTable);
		}
		else {
			weaponsSection.insert(new Element('div', {'class':'profileCompactText profileCompactEmpty'}).update('None'));
		}
		card.insert(weaponsSection);

		var abilitiesSection = new Element('div', {'class':'profileSection'});
		abilitiesSection.insert(new Element('div', {'class':'profileSectionTitle'}).update('Abilities / Notes'));
		if (profile.abilities && profile.abilities.length) {
			var abilityBody = new Element('div', {'class':'profileCompactText'});
			profile.abilities.each(function(a) {
				abilityBody.insert(new Element('p').update(a));
			});
			abilitiesSection.insert(abilityBody);
		}
		else {
			abilitiesSection.insert(new Element('div', {'class':'profileCompactText profileCompactEmpty'}).update('None'));
		}
		card.insert(abilitiesSection);

		return card;
	},

	createFormationDetailsContent:function(formation) {
		var content = new Element('div', {'class':'formationDetailsContent'});
		var compositionUnits = formation.upgrades.uniq().map(function(upgrade) {
			return (formation.count(upgrade) > 1 ? formation.count(upgrade) + 'x ' : '') + upgrade.name;
		});
		if (formation.type.units) {
			compositionUnits = [formation.type.units].concat(compositionUnits);
		}
		if (compositionUnits.empty()) {
			compositionUnits = [formation.type.name];
		}


		var profiles = ArmyforgeUI.uniqueProfilesForFormation(formation);

		if (profiles.length < 1) {
			content.insert(new Element('div', {'class':'noProfileData'}).update('No profile data yet'));
			return content;
		}

		profiles.each(function(profile) {
			content.insert(ArmyforgeUI.createProfileCard(profile));
		});
		return content;
	},

	refreshFormationDetailsContent:function(formation) {
		var detailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
		if (!detailsRow || !detailsRow.down('td')) {
			return;
		}
		var expanded = detailsRow.getStyle('display') != 'none';
		detailsRow.down('td').update(ArmyforgeUI.createFormationDetailsContent(formation));
		detailsRow.setStyle({display: expanded ? 'table-row' : 'none'});
	},

	initPage:function() {
		// event listeners...
		$('viewText').on('click', ArmyforgeUI.viewPlainText);
		$('viewTable').on('click', ArmyforgeUI.viewTable);
		$('viewImport').on('click', ArmyforgeUI.viewLink);
		$('viewPrintV2').on('click', ArmyforgeUI.printV2);
		$('orbatTitle').on('click', ArmyforgeUI.toggleNameEditor);
		$('viewJSON').on('click', ArmyforgeUI.viewJSON);
		$('expandAllProfiles').on('click', ArmyforgeUI.expandAllFormationDetails);
		$('collapseAllProfiles').on('click', ArmyforgeUI.collapseAllFormationDetails);

		// parse url parameters...
		ArmyforgeUI.urlData.baseURL = new String(window.location).split('?')[0];
		var paramString = new String(window.location).split('?')[1];
		paramString.split('&').each(function(param) {
			ArmyforgeUI.urlData[param.split('=')[0]] = param.split('=')[1];
		});
		var listFile = './lists/' + ArmyforgeUI.urlData.list + '.json';	
	
		// load the army list...
		new Ajax.Request(listFile, {
			method:'get',
			onSuccess: function(response) {
				var list = JSON.parse( response.responseText );
				ArmyList.init(list);
				ArmyforgeUI.initUI();
			},
			onException: function(req, exc) {				
				alert(exc.fileName +"...\n\n"+ exc.lineNumber +": "+ exc); // FF only
			}
		});	
	},

	initUI:function() {		

		// render name and options
		$('orbatListName').update( ArmyList.data.id + ' (' + ArmyList.data.version + ')' );
		ArmyList.data.sections.each( ArmyforgeUI.createSectionMenu );

		// render force and mandatory units
		if (ArmyforgeUI.urlData.force) {
			Force.unpickle(ArmyforgeUI.urlData.force);
			ArmyforgeUI.renderForce();
			ArmyforgeUI.checkUpgradeMenuItems();
			ArmyforgeUI.checkFormationMenuItems();
                        ArmyforgeUI.checkWarnings();
		}
                else {
                    ArmyList.mandatoryFormations().each(function(x) {
                        ArmyforgeUI.addFormation(x);
                    });
		}
		// render notes
		if (ArmyList.data.notes) {
			var idx = 1;
			ArmyList.data.notes.each(function(note) {			
				$('notes').insert(new Element('sup').update(idx++));
				$('notes').insert(note);
				$('notes').insert(new Element('br'));
			});
		}

		// show table
		ArmyforgeUI.viewTable();		
	},	

	removeFormation:function(formation, actionSource) {
            if (Force.canRemove(formation)) {
		var eventParams = actionSource ? armyBuilderEventParams(actionSource) : null;
		if (eventParams) {
			eventParams.formation_name = formation && formation.type && formation.type.name ? formation.type.name : '';
			eventParams.formation_points = formation.calcPoints();
		}
		Force.formations.remove( formation );
		ArmyforgeUI.upgradeRowsFor(formation).each( Element.remove );
		var detailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
		if (detailsRow) {
			detailsRow.remove();
		}
		ArmyforgeUI.formationRowFor(formation).remove();
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.checkUpgradeMenuItems();
		ArmyforgeUI.checkFormationMenuItems();
		ArmyforgeUI.checkWarnings();
		if (eventParams) {
			trackArmyBuilderEvent('remove_formation', eventParams);
		}
            }
	},

	removeUpgrade:function(upgradeType, formation, actionSource) {
		if (formation.canRemove(upgradeType)) {
			var eventParams = actionSource ? armyBuilderEventParams(actionSource) : null;
			if (eventParams) {
				eventParams.formation_name = formation && formation.type && formation.type.name ? formation.type.name : '';
				eventParams.upgrade_name = upgradeType && upgradeType.name ? upgradeType.name : '';
				if (typeof upgradeType.pts === 'number') {
					eventParams.upgrade_points = upgradeType.pts;
				}
			}
			formation.upgrades.remove( upgradeType );
			ArmyforgeUI.updateUpgrade(formation, upgradeType);
			ArmyforgeUI.checkUpgradeMenuItems();
			ArmyforgeUI.checkWarnings();
			if (eventParams) {
				trackArmyBuilderEvent('remove_upgrade', eventParams);
			}
		}
	},

	renderForce:function() {		
		$('orbatName').update( Force.name );
		Force.formations.each( ArmyforgeUI.renderFormation );
		ArmyforgeUI.updatePoints();
	},

	renderFormation:function(formation) {

		//alert('renderFormation');
		// avoid duplicate rows when rendering an already-present formation
		ArmyforgeUI.upgradeRowsFor(formation).each( Element.remove );
		var existingDetailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
		if (existingDetailsRow) {
			existingDetailsRow.remove();
		}
		var existingFormationRow = ArmyforgeUI.formationRowFor(formation);
		if (existingFormationRow) {
			existingFormationRow.remove();
		}

		var dropDown = ArmyforgeUI.createUpgradesPopup( formation );
		var labelCell = new Element('td').update(formation.type.name).insert( dropDown );
		var detailsRowId = 'formationDetails_' + formation.id;
		var newRowId = 'formation_' + formation.id;
		var detailsToggle = new Element('a', {
			'href':'javascript:void(0)',
			'class':'detailsToggle',
			'data-details-row-id':detailsRowId,
			'aria-expanded':'false',
			'title':'Expand'
		}).update('Expand');
		detailsToggle.observe('click', function(event) {
			Event.stop(event);
			ArmyforgeUI.toggleFormationDetails(formation);
		});
		labelCell.insert({top:detailsToggle});
		if (formation.type.units) {
			labelCell.insert(
				new Element('div', {'class':'units'}).update(formation.type.units));
		}
		var newRow = new Element('tr', {'id':newRowId, 'class':'orbatFormation interactive', 'data-details-row-id':detailsRowId}).update(
						labelCell
					 ).insert(
						new Element('td', {'id':'formationPoints_'+formation.id, 'class':'points'}).update(formation.calcPoints()) );

		if (formation.type.hasPercentConstraint) {
			$('orbatBody').insert( newRow );
		}
		else {
			$('formationDivider').insert({before:newRow});
		}

		var detailsContent = ArmyforgeUI.createFormationDetailsContent(formation);
		detailsContent.select('.formationComposition').each(function(x) { x.remove(); });
		var detailsRow = new Element('tr', {'id':'formationDetails_'+formation.id, 'class':'orbatDetails'}).update(
			new Element('td', {'colspan':'2'}).update(detailsContent)
		);
		newRow.insert({after:detailsRow});
	
		dropDown.hide();
		detailsRow.hide();
		newRow.observe('mouseover', function() { dropDown.show(); });
		newRow.observe('mouseout', function() { dropDown.hide(); });
		// preserve existing row-click behavior (remove formation) and also toggle details row
		newRow.observe('click', function() {
			if (Force.canRemove(formation)) {
				ArmyforgeUI.removeFormation(formation, 'army_list');
			}
			else {
				ArmyforgeUI.toggleFormationDetails(formation);
			}
		});

			formation.upgrades.uniq().each( function(x) {
				ArmyforgeUI.renderUpgrade( formation,x );
			});
			ArmyforgeUI.refreshFormationDetailsContent(formation);
			ArmyforgeUI.syncDuplicateCompositionRows(formation, detailsRow);

		},

	renderUpgrade:function(formation, upgradeType) {

		var id = '_' + formation.id + '_' + upgradeType.id;
		var count = formation.count( upgradeType );
		var newCell = new Element('td').update(upgradeType.name);
		var clazz = 'upgrade_' + formation.id + ' interactive orbatUpgrade ' + (formation.type.mandatoryConstraint(upgradeType) ? ' mandatory':'');
		var newRow = new Element('tr', {'id':'upgrade'+id, 'class':clazz}).update(
						newCell 
					 ).insert(
						new Element('td', {'class':'points'}).update(' '));//upgradeType.pts));

		var upgradeRows = ArmyforgeUI.upgradeRowsFor(formation);

		// insert new row after last upgrade
		if (upgradeRows.length > 0) {

			// place new mandatories after mandatories but before other upgrades
			var firstNonMandatoryRow = upgradeRows.find(function(x) {
						return !x.hasClassName('mandatory');
					});
			if (firstNonMandatoryRow && formation.type.mandatoryConstraint(upgradeType)) {
				firstNonMandatoryRow.insert({before:newRow});
			}
			else {
				upgradeRows.last().insert({after:newRow});
			}
		}
		else {
			var detailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
			if (detailsRow) {
				detailsRow.insert({after:newRow});
			}
			else {
				ArmyforgeUI.formationRowFor(formation).insert({after:newRow});
			}
		}
	

		// delete event
		newRow.observe('click', ArmyforgeUI.removeUpgrade.bind(this, upgradeType, formation, 'army_list'));	
		// dropdown
		if (formation.type.replaceable(upgradeType)) {
			var dropDown = ArmyforgeUI.createSwapPopup(formation, formation.type.optionsFor(upgradeType), upgradeType);
			newCell.insert(dropDown);
			dropDown.hide();
			newRow.observe('mouseover', function() { dropDown.show(); });
			newRow.observe('mouseout', function() { dropDown.hide(); });
		}

		// multiplier
		var multiplier = new Element('span', {'id':'upgradeMultiplier' + id, 'class':'upgradeMultiplier'}).update(count + 'x&nbsp;');
		newRow.down().insert(multiplier);
		
		if (count < 2) {
			multiplier.hide();
		}
	},

	resetViews:function() {
		ArmyforgeUI.exitPrintV2Mode();
		$$('.viewDiv').each(function(x) {
			x.hide();
		});
		$$('#controls a.selected').each(function(x) {
			x.removeClassName('selected');
		});
	},

	swapUpgrade:function(formation, upgradeType, upgradeType2) {	
		ArmyforgeUI.addUpgrade(formation, upgradeType, 'upgrade_panel');
		ArmyforgeUI.removeUpgrade(upgradeType2, formation, 'upgrade_panel');
	},

	toggleNameEditor:function() {
		if ($('orbatName').visible()) {
			$('orbatName').hide();
			var input = new Element('input', {id:'orbatNameEditor', type:'text'});
			$('orbatTitle').insert({top:input});
			input.observe('click', Event.stop.bindAsEventListener(this)); // prevent bubbling up
			input.observe('keypress', function(event){
				if(event.keyCode == Event.KEY_RETURN) {
					ArmyforgeUI.toggleNameEditor();
					Event.stop(event);
				}
			});
			input.value = $('orbatName').innerHTML.unescapeHTML();
			input.activate();
		}
		else {
			Force.name = $F('orbatNameEditor').escapeHTML();
			$('orbatName').update(Force.name);
			$('orbatNameEditor').remove();
			$('orbatName').show();
		}	
	},

	updateFormationPoints:function(formation) {
		$('formationPoints_'+formation.id).update( formation.calcPoints() );
	},

	updatePoints:function() {
		$('totalPts').update( Force.calcPoints() );
	},

	updateUpgrade:function(formation,upgradeType) {
		//alert('updateUpgrade');

		var id = '_'+formation.id+ '_' +upgradeType.id;
		var count = formation.count(upgradeType);
		var upgradeRow = $('upgrade' + id);
		var multiplier = $('upgradeMultiplier' + id);

		if (upgradeRow && count==0) {
			upgradeRow.remove();
		}
		else if (upgradeRow && count == 1) {
			multiplier.hide();
		}
		else if (upgradeRow && count > 1) {	
			multiplier.update( count + 'x&nbsp;');
			multiplier.show();
		}
		else if (!upgradeRow && count > 0) {
			ArmyforgeUI.renderUpgrade(formation,upgradeType);
		}

		ArmyforgeUI.updateFormationPoints(formation);
		ArmyforgeUI.updatePoints();
		ArmyforgeUI.refreshFormationDetailsContent(formation);
		var detailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
		if (detailsRow) {
			ArmyforgeUI.syncDuplicateCompositionRows(formation, detailsRow);
		}
	},

	upgradeRowsFor:function(formation) {
		return $$('.upgrade_' + formation.id);
	},

	viewTable:function() {
		ArmyforgeUI.resetViews();
		$('orbatDiv').show();
		$('viewTable').addClassName('selected');
	},

	viewLink:function() {		
		ArmyforgeUI.resetViews();
		$('importDiv').show();
		$('viewImport').addClassName('selected');
		$('importText').update(
				ArmyforgeUI.urlData.baseURL + '?list=' + ArmyforgeUI.urlData.list + '&force=' + encodeURIComponent(Force.pickle())
			);
		$('importText').activate();
	},

	viewImport:function() {
		ArmyforgeUI.resetViews();
		$('importDiv').show();
		$('viewImport').addClassName('selected');
		$('importText').activate();
	},

	viewPlainText:function() {
		ArmyforgeUI.resetViews();
		$('plainTextDiv').update( Force.plainText().replace(/\n/g,'<br/>') );
		$('plainTextDiv').show();
		$('viewText').addClassName('selected');
	},

	exitPrintV2Mode:function() {
		var printV2Div = $('printV2Div');
		if (printV2Div) {
			printV2Div.hide();
			printV2Div.update('');
		}
		$(document.body).removeClassName('printV2Mode');
	},

	enterPrintV2Mode:function() {
		$(document.body).addClassName('printV2Mode');
		$('printV2Div').show();
	},

	restoreAfterPrintV2:function(afterPrintHandler) {
		if (ArmyforgeUI.printV2Restored) {
			return;
		}
		ArmyforgeUI.printV2Restored = true;
		if (afterPrintHandler) {
			if (window.removeEventListener) {
				window.removeEventListener('afterprint', afterPrintHandler, false);
			}
			else if (window.detachEvent) {
				window.detachEvent('onafterprint', afterPrintHandler);
			}
			else if (window.onafterprint == afterPrintHandler) {
				window.onafterprint = null;
			}
		}
		ArmyforgeUI.viewTable();
	},

	printV2FormationCompositionText:function(formation) {
		var parts = [];
		if (formation.type.units) {
			parts.push(formation.type.units);
		}
		formation.upgrades.uniq().each(function(upgrade) {
			parts.push((formation.count(upgrade) > 1 ? formation.count(upgrade) + 'x ' : '') + upgrade.name);
		});
		return parts.length ? parts.join(', ') : formation.type.name;
	},

	printV2FormationUpgradesText:function(formation) {
		var upgrades = formation.upgrades.uniq().map(function(upgrade) {
			return (formation.count(upgrade) > 1 ? formation.count(upgrade) + 'x ' : '') + upgrade.name;
		});
		return upgrades.length ? upgrades.join(', ') : '-';
	},

	printV2SummaryRow:function(formation) {
		var row = new Element('tr');
		row.insert(new Element('td', {'class':'printV2Formation'}).update(formation.type.name));
		row.insert(new Element('td', {'class':'printV2Points'}).update(formation.calcPoints()));
		row.insert(new Element('td', {'class':'printV2Composition'}).update(ArmyforgeUI.printV2FormationCompositionText(formation)));
		return row;
	},

	printV2SummaryTable:function() {
		var table = new Element('table', {'class':'printV2Summary'});
		table.insert(new Element('thead').update(
			new Element('tr').insert(new Element('th').update('Formation'))
				.insert(new Element('th', {'class':'printV2Points'}).update('Pts'))
				.insert(new Element('th').update('Contents'))
		));
		var body = new Element('tbody');
		Force.formations.each(function(formation) {
			body.insert(ArmyforgeUI.printV2SummaryRow(formation));
		});
		body.insert(
			new Element('tr', {'class':'printV2SummaryTotal'})
				.insert(new Element('td').update('Total'))
				.insert(new Element('td', {'class':'printV2Points'}).update(Force.calcPoints()))
				.insert(new Element('td').update(''))
		);
		table.insert(body);
		return table;
	},

	printV2Profiles:function() {
		var profiles = [];
		var seen = {};
		Force.formations.each(function(formation) {
			ArmyforgeUI.uniqueProfilesForFormation(formation).each(function(profile) {
				var signature = profile ? ArmyforgeUI.profileSignature(profile) : null;
				if (profile && !seen[signature]) {
					seen[signature] = true;
					profiles.push(profile);
				}
			});
		});
		return profiles;
	},

	printV2NormalizeText:function(text) {
		if (!text) {
			return '';
		}
		return String(text).toLowerCase()
			.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
			.replace(/[’']/g, '')
			.replace(/[^a-z0-9]+/g, ' ')
			.replace(/\s+/g, ' ')
			.strip();
	},

	printV2LoadJson:function(url) {
		var responseText = null;
		new Ajax.Request(url, {
			method:'get',
			asynchronous:false,
			onSuccess:function(response) {
				responseText = response.responseText;
			}
		});
		return responseText ? JSON.parse(responseText) : null;
	},

	printV2LoadData:function() {
		if (ArmyforgeUI.printV2Data.loaded) {
			return;
		}
		ArmyforgeUI.printV2Data.globalRules = ArmyforgeUI.printV2LoadJson('./source-json/tournament-pack-global-rules.json');
		ArmyforgeUI.printV2Data.armyRules = ArmyforgeUI.printV2LoadJson('./source-json/tournament-pack-army-rules.json');
		ArmyforgeUI.printV2Data.armySources = [];
		ArmyforgeUI.printV2ArmySourceFiles().each(function(fileName) {
			var data = ArmyforgeUI.printV2LoadJson('./source-json/' + fileName);
			if (data) {
				ArmyforgeUI.printV2Data.armySources.push({
					fileName:fileName,
					data:data
				});
			}
		});
		ArmyforgeUI.printV2Data.loaded = true;
	},

	printV2ArmySourceFiles:function() {
		return [
			'adeptus-mechanicus-knight-world.json',
			'adeptus-mechanicus-skitarii-legion.json',
			'adeptus-mechanicus-titan-legion.json',
			'blood-angels-v3.1-normalized-codex-style.json',
			'blood-angels.json',
			'chaos-cultist-slaves-to-darkness.json',
			'chaos-cultist-stigmatus-covenant.json',
			'chaos-space-marine-black-legion.json',
			'chaos-space-marine-emperors-children.json',
			'chaos-space-marine-iron-warriors.json',
			'chaos-space-marine-red-corsairs.json',
			'dark-angels.json',
			'dark-eldar.json',
			'eldar-alaitoc.json',
			'eldar-biel-tan.json',
			'eldar-iyanden.json',
			'eldar-saim-hann.json',
			'imperial-guard-baran-siegemasters.json',
			'imperial-guard-death-korps-of-krieg.json',
			'imperial-guard-minervan-tank-legion.json',
			'imperial-guard-steel-legion.json',
			'mobile-catachans.json',
			'tallarn-desert-raiders.json',
			'grey-knights.json',
			'inquisition-ordo-xenos.json',
			'sisters-of-battle.json',
			'necron.json',
			'sautekh-necron.json',
			'ork-feral-orks.json',
			'ork-gargant-mob.json',
			'ork-speed-freeks.json',
			'ork-war-horde.json',
			'space-marine-codex-astartes.json',
			'space-marine-imperial-fists.json',
			'space-marine-raven-guard.json',
			'space-marine-salamanders.json',
			'space-marine-scions-of-iron.json',
			'space-marine-space-wolves.json',
			'space-marine-white-scars.json',
			'squat.json',
			'tau.json',
			'tau-viorla.json',
			'tyranid.json'
		];
	},

	printV2ArmySourceFileByListId:function(listId) {
		var sourceFilesByListId = {
			'XENOS_necron_NETEA': 'necron.json',
			'XENOS_sautekh_necron_NETEA': 'sautekh-necron.json',
			'XENOS_tau_Viorla_NETEA': 'tau-viorla.json',
			'SM_DarkAngels_NETEA': 'dark-angels.json',
			'SM_bloodAngels_NETEA': 'blood-angels.json',
			'INQ_gk2018_NETEA': 'grey-knights.json',
			'INQ_sisters2018_NETEA': 'sisters-of-battle.json',
			'IG_MobileCatachans_NETEA': 'mobile-catachans.json',
			'IG_Tallarn_NETEA': 'tallarn-desert-raiders.json'
		};
		return sourceFilesByListId[listId] || null;
	},

	printV2ArmySourceDataByFileName:function(fileName) {
		var sources = (ArmyforgeUI.printV2Data && ArmyforgeUI.printV2Data.armySources) ? ArmyforgeUI.printV2Data.armySources : [];
		var matchedSource = null;
		sources.find(function(source) {
			if (source.fileName == fileName) {
				matchedSource = source.data;
				return true;
			}
			return false;
		});
		return matchedSource;
	},

	printV2ArmySourceLookupTokens:function(text) {
		var stopWords = {
			'nettea':true,
			'epicuk':true,
			'ferc':true,
			'epicau':true,
			'epicau':true,
			'epic':true,
			'approved':true,
			'playtest':true,
			'draft':true,
			'test':true,
			'developmental':true,
			'json':true,
			'list':true,
			'amtl':true,
			'chaos':true,
			'inq':true,
			'ork':true,
			'xenos':true
		};
		var tokens = [];
		ArmyforgeUI.printV2NormalizeText(text).split(' ').each(function(token) {
			if (!token || token.length <= 2 || stopWords[token]) {
				return;
			}
			tokens.push(token);
			if (token.length > 3 && /s$/.test(token)) {
				tokens.push(token.replace(/s$/, ''));
			}
		});
		return tokens.uniq();
	},

	printV2CurrentArmySourceData:function() {
		var sources = (ArmyforgeUI.printV2Data && ArmyforgeUI.printV2Data.armySources) ? ArmyforgeUI.printV2Data.armySources : [];
		if (!sources.length) {
			return null;
		}
		var title = ArmyList && ArmyList.data ? ArmyList.data.id : '';
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : '';
		var explicitSourceFile = ArmyforgeUI.printV2ArmySourceFileByListId(listId);
		if (explicitSourceFile) {
			var explicitSourceData = ArmyforgeUI.printV2ArmySourceDataByFileName(explicitSourceFile);
			if (explicitSourceData) {
				return explicitSourceData;
			}
		}
		var titleNeedle = ArmyforgeUI.printV2NormalizeText(title);
		var listTokens = ArmyforgeUI.printV2ArmySourceLookupTokens(listId);
		var titleTokens = ArmyforgeUI.printV2ArmySourceLookupTokens(title);
		var best = null;
		var bestScore = -1;

		sources.each(function(source) {
			var metadata = source.data && source.data.metadata ? source.data.metadata : {};
			var haystack = ArmyforgeUI.printV2NormalizeText([
				metadata.army_name,
				metadata.page_title,
				metadata.source_url,
				source.fileName
			].join(' '));
			var score = 0;

			if (titleNeedle) {
				if (haystack == titleNeedle) {
					score += 300;
				}
				else if (haystack.indexOf(titleNeedle) !== -1 || titleNeedle.indexOf(haystack) !== -1) {
					score += 120;
				}
			}

			titleTokens.each(function(token) {
				if (haystack.indexOf(token) !== -1) {
					score += 18;
				}
			});
			listTokens.each(function(token) {
				if (haystack.indexOf(token) !== -1) {
					score += 10;
				}
			});

			if (score > bestScore) {
				bestScore = score;
				best = source.data;
			}
		});

		return bestScore > 0 ? best : null;
	},

	printV2InitiativeScopeText:function(scope) {
		var value = String(scope || '').strip();
		if (!value) {
			return 'These formations';
		}
		if (/\bformations?\b/i.test(value)) {
			return value;
		}
		return value + ' formations';
	},

	printV2ArmySummaryText:function() {
		var armyData = ArmyforgeUI.printV2CurrentArmySourceData();
		var metadata = armyData && armyData.metadata ? armyData.metadata : null;
		var stats = armyData && armyData.army_stats ? armyData.army_stats : null;
		var initiative = stats && stats.initiative_rating ? stats.initiative_rating : null;
		var entries = initiative && initiative.entries ? initiative.entries : null;

		if (!metadata || !metadata.army_name || !stats || !stats.strategy_rating || !entries || !entries.length) {
			return 'Army-level strategy and initiative data is not available for this list.';
		}

		var sentences = [metadata.army_name + ' armies have a strategy rating of ' + stats.strategy_rating + '.'];
		entries.each(function(entry) {
			sentences.push(ArmyforgeUI.printV2InitiativeScopeText(entry.scope) + ' have an initiative rating of ' + entry.value + '.');
		});
		return sentences.join(' ');
	},

	renderPrintV2ArmySummary:function() {
		var box = new Element('div', {'class':'printV2ArmySummary'});
		box.insert(new Element('p').update(ArmyforgeUI.printV2ArmySummaryText()));
		return box;
	},

	printV2FamilyRuleKeysForListId:function(listId) {
		var keys = [];
		if (!listId) {
			return keys;
		}
		if (/^EL_dark_/i.test(listId)) {
			keys.push('dark_eldar_forces');
		}
		else if (/^EL_/.test(listId)) {
			keys.push('eldar_forces');
		}
		else if (/^XENOS_tau_/i.test(listId)) {
			keys.push('tau_forces');
		}
		else if (/^XENOS_nids_/i.test(listId) || /^XENOS_Nidtitan_/i.test(listId) || /^XENOS_hivefleetbehemoth_/i.test(listId)) {
			keys.push('tyranid_forces');
		}
		else if (/^XENOS_necron_/i.test(listId) || /^XENOS_sautekh_/i.test(listId)) {
			keys.push('necron_forces');
		}
		else if (/^XENOS_squats_/i.test(listId) || /^SQ_/i.test(listId)) {
			keys.push('squat_forces');
		}
		else if (/^SM_/i.test(listId)) {
			keys.push('space_marine_forces');
		}
		else if (/^ORK_/i.test(listId)) {
			keys.push('ork_forces');
		}
		else if (/^CHAOS_legion_/i.test(listId)) {
			keys.push('black_legion_forces');
		}
		return keys;
	},

	printV2ArmyRulesForCurrentList:function() {
		var allRules = (ArmyforgeUI.printV2Data && ArmyforgeUI.printV2Data.armyRules && ArmyforgeUI.printV2Data.armyRules.army_rules) ? ArmyforgeUI.printV2Data.armyRules.army_rules : [];
		var listId = ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
		var title = ArmyList && ArmyList.data ? ArmyList.data.id : '';
		var normalizedTitle = ArmyforgeUI.printV2NormalizeText(title);
		var wantedKeys = {};
		ArmyforgeUI.printV2FamilyRuleKeysForListId(listId).each(function(key) {
			wantedKeys[key] = true;
		});
		allRules.each(function(rule) {
			var normalizedKey = ArmyforgeUI.printV2NormalizeText(rule.army_key);
			var normalizedName = ArmyforgeUI.printV2NormalizeText(rule.army_name);
			if (normalizedTitle && (normalizedKey.indexOf(normalizedTitle) !== -1 || normalizedName.indexOf(normalizedTitle) !== -1 || normalizedTitle.indexOf(normalizedKey) !== -1 || normalizedTitle.indexOf(normalizedName) !== -1)) {
				wantedKeys[rule.army_key] = true;
			}
		});
		var seen = {};
		var selected = [];
		allRules.each(function(rule) {
			if (wantedKeys[rule.army_key] && !seen[rule.army_key + '|' + rule.rule_name + '|' + rule.source_section]) {
				seen[rule.army_key + '|' + rule.rule_name + '|' + rule.source_section] = true;
				selected.push(rule);
			}
		});
		return selected;
	},

	printV2RuleTextBlocksFromText:function(text) {
		return String(text || '').split(/\n\s*\n/).collect(function(block) {
			return ArmyforgeUI.printV2NormalizeText(block) ? block.strip() : '';
		}).findAll(function(block) {
			return !!block;
		});
	},

	printV2RuleBodyBlocks:function(rule) {
		if (!rule) {
			return [];
		}
		if (rule.summary) {
			return ArmyforgeUI.printV2RuleTextBlocksFromText(rule.summary);
		}
		if (rule.text_blocks && rule.text_blocks.length) {
			return rule.text_blocks;
		}
		if (rule.text) {
			return ArmyforgeUI.printV2RuleTextBlocksFromText(rule.text);
		}
		if (rule.body) {
			return ArmyforgeUI.printV2RuleTextBlocksFromText(rule.body);
		}
		if (rule.body_blocks && rule.body_blocks.length) {
			return rule.body_blocks;
		}
		return [];
	},

	printV2RuleMatchesProfileText:function(rule, text) {
		var haystack = ' ' + ArmyforgeUI.printV2NormalizeText(text) + ' ';
		if (!haystack.strip()) {
			return false;
		}
		var candidates = [];
		if (rule.name) {
			candidates.push(rule.name);
		}
		if (rule.aliases) {
			candidates = candidates.concat(rule.aliases);
		}
		var extraAliases = {
			'characters': ['Character'],
			'commanders': ['Commander'],
			'fearless': ['Fearless'],
			'infiltrators': ['Infiltrator'],
			'inspiring': ['Inspiring'],
			'invulnerable_saves': ['Invulnerable Save'],
			'jump_packs': ['Jump Packs'],
			'leaders': ['Leader'],
			'light_vehicles': ['Light Vehicle'],
			'mounted': ['Mounted'],
			'reinforced_armour': ['Reinforced Armour'],
			'scouts': ['Scout'],
			'skimmers': ['Skimmer'],
			'sniper': ['Sniper'],
			'supreme_commanders': ['Supreme Commander'],
			'thick_rear_armour': ['Thick Rear Armour'],
			'teleport': ['Teleport'],
			'walkers': ['Walker'],
			'slow_and_steady': ['Slow and Steady'],
			'support_craft': ['Support Craft'],
			'self_planetfall': ['Planetfall', 'Self Planetfall'],
			'expendable': ['Expendable'],
			'tunneler': ['Tunneler'],
			'self_reliant': ['Self-Reliant', 'Self Reliant'],
			'anti_aircraft_weapons': ['AA', 'Anti-aircraft Weapons'],
			'disrupt': ['Disrupt'],
			'extra_attacks': ['EA', 'Extra Attacks'],
			'first_strike': ['FS', 'First Strike'],
			'ignore_cover': ['IC', 'Ignore Cover'],
			'macro_weapons': ['MW', 'Macro-Weapons'],
			'single_shot': ['Single Shot'],
			'slow_firing': ['Slw', 'Slow Firing'],
			'titan_killers': ['TK', 'Titan Killers'],
			'indirect_fire': ['Ind', 'Indirect Fire'],
			'imperial_void_shields': ['Void Shield', 'Void Shields']
		};
		if (rule.id && extraAliases[rule.id]) {
			candidates = candidates.concat(extraAliases[rule.id]);
		}
		var tokenSet = {};
		haystack.strip().split(' ').each(function(token) {
			if (token) {
				tokenSet[token] = true;
			}
		});
		var matched = false;
		candidates.each(function(candidate) {
			if (matched || !candidate) {
				return;
			}
			var needle = ArmyforgeUI.printV2NormalizeText(candidate);
			if (!needle) {
				return;
			}
			if (needle.length <= 3) {
				if (tokenSet[needle]) {
					matched = true;
				}
			}
			else if (haystack.indexOf(' ' + needle + ' ') !== -1 || haystack.indexOf(needle) !== -1) {
				matched = true;
			}
		});
		return matched;
	},

	printV2UsedGlobalRules:function(profiles) {
		var rules = (ArmyforgeUI.printV2Data && ArmyforgeUI.printV2Data.globalRules && ArmyforgeUI.printV2Data.globalRules.rules) ? ArmyforgeUI.printV2Data.globalRules.rules : [];
		var matched = [];
		var seen = {};
		profiles.each(function(profile) {
			var textBits = [];
			if (profile.abilities) {
				textBits = textBits.concat(profile.abilities);
			}
			if (profile.weapons) {
				profile.weapons.each(function(weapon) {
					textBits.push(weapon.name);
					textBits.push(weapon.range);
					textBits.push(weapon.firepower);
					if (weapon.notes) {
						textBits = textBits.concat(weapon.notes);
					}
				});
			}
			var text = textBits.join(' | ');
			rules.each(function(rule) {
				if (!seen[rule.id] && ArmyforgeUI.printV2RuleMatchesProfileText(rule, text)) {
					seen[rule.id] = true;
					matched.push(rule);
				}
			});
		});
		return matched;
	},

	printV2RenderRuleBlocks:function(blocks) {
		var wrap = new Element('div', {'class':'printV2RuleBody'});
		blocks.each(function(block) {
			wrap.insert(new Element('p').update(block));
		});
		return wrap;
	},

	printV2RenderRuleCard:function(rule, bodyBlocks) {
		var card = new Element('div', {'class':'printV2RuleCard'});
		var head = new Element('div', {'class':'printV2RuleHead'});
		head.insert(new Element('div', {'class':'printV2RuleName'}).update(rule.name));
		if (rule.source_section) {
			head.insert(new Element('div', {'class':'printV2RuleSource'}).update(rule.source_section));
		}
		card.insert(head);
		card.insert(ArmyforgeUI.printV2RenderRuleBlocks(bodyBlocks));
		return card;
	},

	printV2RenderRulesSection:function(title, rules, bodyBlocksGetter) {
		var section = new Element('div', {'class':'printV2RulesSection'});
		section.insert(new Element('div', {'class':'printV2RulesSectionTitle'}).update(title));
		if (!rules || rules.length < 1) {
			section.insert(new Element('div', {'class':'printV2RulesEmpty'}).update('None'));
			return section;
		}
		rules.each(function(rule) {
			section.insert(ArmyforgeUI.printV2RenderRuleCard(rule, bodyBlocksGetter(rule)));
		});
		return section;
	},

	renderPrintV2RulesAppendix:function(profiles) {
		var appendix = new Element('div', {'class':'printV2RulesAppendix'});
		appendix.insert(new Element('div', {'class':'printV2AppendixTitle'}).update('Rules appendix'));
		appendix.insert(new Element('div', {'class':'printV2RulesNote'}).update('Rules are condensed for play reference. Check the official rules text for edge cases.'));
		var armyRules = ArmyforgeUI.printV2ArmyRulesForCurrentList();
		var uniqueArmyRules = [];
		var seenArmyRules = {};
		armyRules.each(function(rule) {
			var identity = [
				ArmyforgeUI.printV2NormalizeText(rule.army_key || rule.name || rule.rule_name || ''),
				ArmyforgeUI.printV2NormalizeText(rule.source_section || ''),
				ArmyforgeUI.printV2NormalizeText(rule.summary || rule.text || (rule.text_blocks || []).join(' '))
			].join('|');
			if (!seenArmyRules[identity]) {
				seenArmyRules[identity] = true;
				uniqueArmyRules.push(rule);
			}
		});
		var usedGlobalRules = ArmyforgeUI.printV2UsedGlobalRules(profiles);
		appendix.insert(ArmyforgeUI.printV2RenderRulesSection('Army-specific rules', uniqueArmyRules, function(rule) {
			return ArmyforgeUI.printV2RuleBodyBlocks(rule);
		}));
		appendix.insert(ArmyforgeUI.printV2RenderRulesSection('Used unit/global rules', usedGlobalRules, function(rule) {
			return ArmyforgeUI.printV2RuleBodyBlocks(rule);
		}));
		return appendix;
	},

	printV2TitleText:function() {
		var armyName = $('orbatName') ? $('orbatName').innerHTML.strip() : '';
		var listName = $('orbatListName') ? $('orbatListName').innerHTML.strip() : '';
		if (armyName && armyName != '...click to edit name...') {
			return armyName.unescapeHTML();
		}
		if (listName) {
			return listName.unescapeHTML();
		}
		return Force.name;
	},

	renderPrintV2:function() {
		var container = new Element('div', {'class':'printV2Sheet'});
		var header = new Element('div', {'class':'printV2Header'});
		header.insert(new Element('div', {'class':'printV2Title'}).update(ArmyforgeUI.printV2TitleText()));
		header.insert(new Element('div', {'class':'printV2Meta'}).update(Force.calcPoints() + ' points'));
		container.insert(header);
		container.insert(ArmyforgeUI.printV2SummaryTable());
		container.insert(ArmyforgeUI.renderPrintV2ArmySummary());
		container.insert(new Element('div', {'class':'printV2PageBreak'}));

		var profiles = ArmyforgeUI.printV2Profiles();
		var profilesWrap = new Element('div', {'class':'printV2Profiles'});
		if (profiles.length < 1) {
			profilesWrap.insert(new Element('div', {'class':'noProfileData'}).update('No profile data yet'));
		}
		else {
			profiles.each(function(profile) {
				profilesWrap.insert(ArmyforgeUI.createPrintV2ProfileCard(profile));
			});
		}
		container.insert(profilesWrap);
		container.insert(new Element('div', {'class':'printV2PageBreak'}));
		container.insert(ArmyforgeUI.renderPrintV2RulesAppendix(profiles));
		return container;
	},

	printV2:function(event) {
		if (event) {
			Event.stop(event);
		}
		ArmyforgeUI.resetViews();
		ArmyforgeUI.printV2LoadData();
		$('printV2Div').update(ArmyforgeUI.renderPrintV2());
		ArmyforgeUI.printV2Restored = false;
		var afterPrintHandler = function() {
			ArmyforgeUI.restoreAfterPrintV2(afterPrintHandler);
		};
		if (window.addEventListener) {
			window.addEventListener('afterprint', afterPrintHandler, false);
		}
		else if (window.attachEvent) {
			window.attachEvent('onafterprint', afterPrintHandler);
		}
		else {
			window.onafterprint = afterPrintHandler;
		}
		ArmyforgeUI.enterPrintV2Mode();
		window.print();
		setTimeout(afterPrintHandler, 0);
	},

	toggleFormationDetails:function(formation, forceToggle) {
		var detailsRow = ArmyforgeUI.formationDetailsRowFor(formation);
		if (!detailsRow) {
			return;
		}
		var toggleControl = ArmyforgeUI.formationRowFor(formation) ? ArmyforgeUI.formationRowFor(formation).down('.detailsToggle') : null;
		ArmyforgeUI.toggleDetailsRow(detailsRow.id, toggleControl, forceToggle);
		ArmyforgeUI.syncDuplicateCompositionRows(formation, detailsRow);
	},

	expandAllFormationDetails:function(event) {
		if (event) {
			Event.stop(event);
		}
		Force.formations.each(function(formation) {
			ArmyforgeUI.toggleFormationDetails(formation, true);
		});
	},

	collapseAllFormationDetails:function(event) {
		if (event) {
			Event.stop(event);
		}
		Force.formations.each(function(formation) {
			ArmyforgeUI.toggleFormationDetails(formation, false);
		});
	},

	wrapActivatableHandler:function(element, handler) {
		return handler.wrap(function(proceed, event, arg1, arg2, arg3, arg4) {
			if (!element.hasClassName('inactive')) {
				proceed(arg1, arg2, arg3, arg4);
			}
		});
	}
};

window.checkSourceProfilesForList = window.checkSourceProfilesForList || function(listId) {
	var activeListId = ArmyforgeUI && ArmyforgeUI.urlData ? ArmyforgeUI.urlData.list : null;
	if (listId && activeListId && listId != activeListId) {
		return {
			ok:false,
			message:'Load chooser.html?list=' + listId + ' before running this helper.'
		};
	}
	if (!window.Force || !Force.formations) {
		return {
			ok:false,
			message:'No active force loaded.'
		};
	}
	var report = Force.formations.collect(function(formation) {
		var profiles = ArmyforgeUI.uniqueProfilesForFormation(formation).collect(function(profile) {
			return profile.name;
		});
		return {
			formation:formation.type ? formation.type.name : 'Unknown formation',
			profiles:profiles,
			hasProfiles:profiles.length > 0
		};
	});
	if (window.console && console.table) {
		console.table(report);
	}
	return report;
};

// runtime safety: ensure dedicated details toggling is always available on ArmyforgeUI
if (!ArmyforgeUI.toggleDetailsRow) {
	ArmyforgeUI.toggleDetailsRow = function(detailsRowId, toggleControl, forceToggle) {
		var detailsRow = $(detailsRowId);
		if (!detailsRow) {
			return;
		}
		var willExpand = (typeof forceToggle === 'boolean') ? forceToggle : (detailsRow.getStyle('display') == 'none');
		detailsRow.setStyle({display: willExpand ? 'table-row' : 'none'});
		if (toggleControl) {
			toggleControl.update(willExpand ? 'Collapse' : 'Expand');
			toggleControl.writeAttribute('aria-expanded', willExpand ? 'true' : 'false');
			toggleControl.writeAttribute('title', willExpand ? 'Collapse' : 'Expand');
		}
	};
}

// runtime safety: ensure duplicate-composition helpers are available before any call sites run
if (!ArmyforgeUI.compositionTextAboveDetailsFor) {
	ArmyforgeUI.compositionTextAboveDetailsFor = function(formation) {
		var formationRow = ArmyforgeUI.formationRowFor(formation);
		if (!formationRow) {
			return '';
		}
		var unitsBlock = formationRow.down('.units');
		return unitsBlock ? unitsBlock.innerText.toLowerCase() : '';
	};
}

if (!ArmyforgeUI.compositionTextForUpgradeRow) {
	ArmyforgeUI.compositionTextForUpgradeRow = function(upgradeRow) {
		var labelCell = upgradeRow.down('td');
		if (!labelCell) {
			return '';
		}
		var multiplier = labelCell.down('.upgradeMultiplier');
		var multiplierText = multiplier ? multiplier.innerText.replace(/\s+/g, '') : '';
		var labelText = labelCell.innerText.replace(/\s+/g, ' ').strip();
		labelText = labelText.replace(/^\d+x\s*/i, '').replace(/^\d+\s*/i, '').strip();
		return ((multiplierText ? multiplierText + ' ' : '') + labelText).toLowerCase().strip();
	};
}

if (!ArmyforgeUI.syncDuplicateCompositionRows) {
	ArmyforgeUI.syncDuplicateCompositionRows = function(formation, detailsRow) {
		var isExpanded = detailsRow && detailsRow.getStyle('display') != 'none';
		var upperCompositionText = ArmyforgeUI.compositionTextAboveDetailsFor(formation);

		ArmyforgeUI.upgradeRowsFor(formation).each(function(upgradeRow) {
			if (!isExpanded) {
				if (upgradeRow.readAttribute('data-hidden-duplicate') == 'true') {
					upgradeRow.show();
					upgradeRow.writeAttribute('data-hidden-duplicate', 'false');
				}
				return;
			}

			var rowCompositionText = ArmyforgeUI.compositionTextForUpgradeRow(upgradeRow);
			var rowWithoutCount = rowCompositionText.replace(/^\d+x\s*/i, '').strip();
			var isDuplicate = !!upperCompositionText &&
				(upperCompositionText.include(rowCompositionText) || upperCompositionText.include(rowWithoutCount));
			if (isDuplicate) {
				upgradeRow.hide();
				upgradeRow.writeAttribute('data-hidden-duplicate', 'true');
			}
		});
	};
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.on('dom:loaded', ArmyforgeUI.initPage );

