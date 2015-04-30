var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var Container = StyleSheet.create({
  Container: {
    flex: 1
  },
});

var CardList = StyleSheet.create({
  Container: {
    flex: 1
  }
});

var Card = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  ManaCost: {},
  Name: {},
  NormalCount: {},
  GoldCount: {}
})

module.exports = {
  Card: Card,
  Container: Container,
  CardList: CardList
};