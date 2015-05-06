var React = require('react-native');
var {
  StyleSheet
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
    borderBottomColor: '#c5c5c5',
    borderBottomWidth: 1,
  },
  ManaCost: {
    padding: 10,
    width: 40,
  },
  ManaCost__Cost: {
    textAlign: 'center',
  },
  Name: {
    flex: 1,
    padding: 10,
  },
  Name__Name: {
  },
  NormalCount: {
    padding: 10,
    width: 40,
  },
  NormalCount__Count: {
    textAlign: 'center',
  },
  GoldCount: {
    padding: 10,
    width: 40,
  },
  GoldCount__Count: {
    textAlign: 'center',
  },
})

module.exports = {
  Card: Card,
  Container: Container,
  CardList: CardList
};