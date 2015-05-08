var basic = [];

var classic = [];

var reward = [];

var promotion = [];

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