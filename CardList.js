'use strict';

var React = require('react-native');
var {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity
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
    var active = this.state.normal + this.state.gold >= card.maxCount;
    var gold = this.state.gold >= card.maxCount;
    return (
      <View style={styles.Card[gold ? 'Container--gold' : active ? 'Container' : 'Container--deactive']}>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={styles.Card['ManaCost--' + card.rarity]}>
            <Text style={styles.Card.ManaCost__Cost}>{card.cost}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handlePress}>
          <View style={styles.Card.Name}>
            <Text style={styles.Card.Name__Name}>{card.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleNormalPress}>
          <View style={styles.Card.NormalCount}>
            <Text style={styles.Card.NormalCount__Count}>{this.state.normal}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleGoldPress}>
          <View style={styles.Card.GoldCount}>
            <Text style={styles.Card.GoldCount__Count}>{this.state.gold}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

});

// TODO: Search

var CardList = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin("CardStore")],

  getStateFromFlux() {
    var flux = this.getFlux();
    var cards = flux.store('CardStore').state;
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (h1, h2) => h1 !== h2
    });
    return ds.cloneWithRowsAndSections(cards);
  },

  handlePress(card, gold) {
    var flux = this.getFlux();
    var currentCount = flux.store('CollectionStore').getCount(card, gold);

    if (currentCount < card.maxCount) {
      flux.actions.addCardToCollection(card.id, gold);
    } else {
      flux.actions.removeCardFromCollection(card.id, gold);
    }
  },

  renderCard(card) {
    return <Card card={card} onPress={this.handlePress} gold={false} />
  },

  renderSectionHeader(sectionData, sectionID) {
    return (
      <View style={styles.CardList.SectionHeader}>
        <Text style={styles.CardList.SectionHeader__Text}>{sectionID}</Text>
      </View>
    );
  },
  
  render() {
    return (
      <View style={styles.CardList.Container}>
        <ListView 
          dataSource={this.state}
          renderRow={this.renderCard}
          renderSectionHeader={this.renderSectionHeader} 
          scrollRenderAheadDistance={1500}
          removeClippedSubviews={true} />
      </View>
    );
  }

});

module.exports = CardList;