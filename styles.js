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
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    backgroundColor: '#262626',
  },
  'Container--deactive': {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    backgroundColor: '#262626',
    opacity: 0.7,
  },
  'ManaCost--free': {
    padding: 10,
    width: 40,
    backgroundColor: '#FEFFF8',
  },
  'ManaCost--common': {
    padding: 10,
    width: 40,
    backgroundColor: '#B7C2BA',
  },
  'ManaCost--rare': {
    padding: 10,
    width: 40,
    backgroundColor: '#4A87D8',
  },
  'ManaCost--epic': {
    padding: 10,
    width: 40,
    backgroundColor: '#AF4AC0',
  },
  'ManaCost--legendary': {
    padding: 10,
    width: 40,
    backgroundColor: '#CF8522',
  },
  ManaCost__Cost: {
    textAlign: 'center',
  },
  Name: {
    flex: 1,
    padding: 10,
    borderRightColor: '#000000',
    borderRightWidth: 1
  },
  Name__Name: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  NormalCount: {
    padding: 10,
    width: 40,
  },
  NormalCount__Count: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  GoldCount: {
    padding: 10,
    width: 40,
    backgroundColor: '#FFC921',
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