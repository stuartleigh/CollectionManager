'use strict';

var React = require('react-native');
var Fluxxor = require('fluxxor');

var CardList = require('./CardList');
var styles = require('./styles');
var actions = require('./actions')

var CollectionStore = require('./stores/collectionStore');

var stores = {
  CollectionStore: new CollectionStore()
}

console.log("HELLO ACTIONS", typeof actions.addCardToCollection);
var flux = new Fluxxor.Flux(stores, actions);
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var CollectionManager = React.createClass({
  mixins: [FluxMixin],

  render() {
    return (
      <React.NavigatorIOS
        flux={flux}
        style={styles.Container}
        initialRoute={{
          title: "Collection Manager",
          component: CardList
        }} />
    );
  }

});

var App = React.createClass({
  render() {
    return <CollectionManager flux={flux} />
  }
});

React.AppRegistry.registerComponent('CollectionManager', () => App);
