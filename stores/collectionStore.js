var Fluxxor = require("fluxxor");
var constants = require("../constants");

var _ = require('lodash');

var CollectionStore = Fluxxor.createStore({
	
	initialize() {
		this.state = {
			gold: [],
			normal: []
		};

		this.bindActions(
			constants.ADD_CARD_TO_COLLECTION, this.onAddCard,
			constants.REMOVE_CARD_FROM_COLLECTION, this.onRemoveCard
		);
	},

	onAddCard(payload) {
		payload.gold ? this.state.gold.push(payload.cardID) : this.state.normal.push(payload.cardID);
		this.emit("change");
	},

	onRemoveCard(payload) {
		payload.gold ?
			this.state.gold = _.without(this.state.gold, payload.cardID) :
			this.state.normal = _.without(this.state.normal, payload.cardID);
		this.emit("change");
	},

	getCount(card, gold) {
		var cards = gold ? this.state.gold : this.state.normal;
		return cards.filter(c => c === card.id).length
	}
});

module.exports = CollectionStore;