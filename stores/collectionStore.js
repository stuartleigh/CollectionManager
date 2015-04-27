var Fluxxor = require("fluxxor");
var constants = require("../constants");

var CollectionStore = Fluxxor.createStore({
	
	initialize() {
		this.cards = {};

		this.bindActions(
			constants.ADD_CARD_TO_COLLECTION, this.onAddCard,
			constants.REMOVE_CARD_FROM_COLLECTION, this.onRemoveCard
		);
	},

	onAddCard(payload) {
		var cardStats = this.getCard(payload.cardID);
		payload.gold ? ++cardStats.gold : ++cardStats.normal;
		this.cards[payload.cardID] = cardStats;
		this.emit("change");
	},

	onRemoveCard(payload) {
		this.cards[payload.cardID] = {
			gold: 0,
			normal: 0
		};
		this.emit("change");
	},

	getCard(cardID) {
		return this.cards[cardID] || {
			gold: 0,
			normal: 0
		};
	}
});

module.exports = CollectionStore;