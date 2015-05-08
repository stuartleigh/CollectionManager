var basic = [];

var classic = [];

var reward = [
	{
		id: "neutralXX",         // update
		name: "Captain's Parrot",
		class: "Neutral",
		type: "minion",
		cost: 2,
		set: "Classic",
		tribe: "beast",
		rarity: "epic",
		maxCount: 2,
	},
	{
		id: "neutralXX",         // update
		name: "Old Murk-Eye",
		class: "Neutral",
		type: "minion",
		cost: 4,
		set: "Classic",
		tribe: "murloc",
		rarity: "legendary",
		maxCount: 1,
	},
];

var promotion = [
	{
		id: "neutralXX",         // update
		name: "Elite Tauren Chieftain",
		class: "Neutral",
		type: "minion",
		cost: 5,
		set: "Classic",
		tribe: null,
		rarity: "legendary",
		maxCount: 1,
	},
	{
		id: "neutralXX",         // update
		name: "Gelbin Mekkatorque",
		class: "Neutral",
		type: "minion",
		cost: 6,
		set: "Classic",
		tribe: null,
		rarity: "legendary",
		maxCount: 1,
	},
];

var naxxramas = [];

var gvg = [];

var brm = [];

module.exports = [].concat(basic, classic, reward, promotion, naxxramas, gvg, brm).sort(function(a, b) {
	if (a.cost < b.cost) {
		return -1;
	} else if (a.cost > b.cost) {
		return 1;
	}
	return a.name < b.name ? -1 : 1;
});