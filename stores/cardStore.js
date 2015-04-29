var Fluxxor = require("fluxxor");
var constants = require("../constants");

var Cards = require("../data/cards");

var CollectionStore = Fluxxor.createStore({
	
	initialize() {
		this.state = Cards;
	}

});

module.exports = CollectionStore;