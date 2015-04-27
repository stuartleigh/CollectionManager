'use strict';

var React = require('react-native');
var {
  Text,
  View,
  ListView,
  TouchableHighlight
} = React;

var Cards = require("./data/cards");
var styles = require('./styles');

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var constants = require('./constants');

var Card = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("CollectionStore")],

  getStateFromFlux() {
    var flux = this.getFlux();
    return flux.store('CollectionStore').getCard(this.props.card.id);
  },

  handlePress() {
    typeof this.props.onPress === 'function' ? this.props.onPress(this.props.card) : null;
  },

  render() {
    return (
      <TouchableHighlight style={styles.Card} onPress={this.handlePress}>
        <Text>{this.props.card.name} ({this.props.gold ? this.state.gold : this.state.normal})</Text>
      </TouchableHighlight>
    )
  }

});

var CardList = React.createClass({

  mixins: [FluxMixin],
  
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(Cards),
      gold: false
    }
  },

  handlePress(card) {
    var flux = this.getFlux();
    var currentCard = flux.store('CollectionStore').getCard(card.id);
    var currentCount = this.state.gold ? currentCard.gold : currentCard.normal;

    if ((card.rarity === 'legendary' && currentCount < 1) || (card.rarity !== 'legendary' && currentCount < 2)) {
      flux.actions.addCardToCollection(card.id, this.state.gold);
    } else {
      flux.actions.removeCardFromCollection(card.id, this.state.gold);
    }
  },

  renderCard(card) {
    return <Card card={card} onPress={this.handlePress} gold={this.state.gold} />
  },
  
  render() {
    return (
      <View style={styles.CardList}>
        <ListView 
          dataSource={this.state.dataSource}
          renderRow={this.renderCard} />
      </View>
    );
  }

});

module.exports = CardList;