'use strict';

var React = require('react-native');
var {
  Text,
  View,
  ListView,
  TouchableHighlight
} = React;


var styles = require('./styles');

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var constants = require('./constants');

var Card = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("CollectionStore")],

  getStateFromFlux() {
    var flux = this.getFlux();
    var store = flux.store('CollectionStore')
    return {
      gold: store.getCount(this.props.card, true),
      normal: store.getCount(this.props.card, false)
    }
  },

  handleGoldPress() {
    typeof this.props.onPress === 'function' ? this.props.onPress(this.props.card, true) : null;
  },

  handleNormalPress() {
    this.handlePress();
  },

  handlePress() {
    typeof this.props.onPress === 'function' ? this.props.onPress(this.props.card, false) : null;
  },

  render() {
    var card = this.props.card;
    return (<View style={styles.Card.Container}>
        <TouchableHighlight onPress={this.handlePress}>
          <View>
            <View style={styles.Card.ManaCost}>
              <Text>{card.cost}</Text>
            </View>
            <View>
              <Text style={styles.Card.Name}>{card.name}</Text>
            </View>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleNormalPress}>
          <View style={styles.Card.NormalCount}>
            <Text>{this.state.normal}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handleGoldPress}>
          <View style={styles.Card.GoldCount}>
            <Text>({this.state.gold})</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

});

var CardList = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("CardStore")],

  getStateFromFlux() {
    var flux = this.getFlux();
    var cards = flux.store('CardStore').state;
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(cards);
  },

  handlePress(card, gold) {
    var flux = this.getFlux();
    var currentCount = flux.store('CollectionStore').getCount(card, gold);

    if ((card.rarity === 'legendary' && currentCount < 1) || (card.rarity !== 'legendary' && currentCount < 2)) {
      flux.actions.addCardToCollection(card.id, gold);
    } else {
      flux.actions.removeCardFromCollection(card.id, gold);
    }
  },

  renderCard(card) {
    return <Card card={card} onPress={this.handlePress} gold={false} />
  },
  
  render() {
    return (
      <View style={styles.CardList.Container}>
        <ListView 
          dataSource={this.state}
          renderRow={this.renderCard} />
      </View>
    );
  }

});

module.exports = CardList;