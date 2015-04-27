var constants = require('./constants');

var foo = {

	addCardToCollection: function(cardID, gold) {
		this.dispatch(constants.ADD_CARD_TO_COLLECTION, {cardID, gold});
	},

	removeCardFromCollection: function(cardID, gold) {
		this.dispatch(constants.REMOVE_CARD_FROM_COLLECTION, {cardID, gold});
	},

};

console.log("EXPORTING ACTIONS", typeof foo.addCardToCollection);
module.exports = foo;