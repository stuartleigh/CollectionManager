var React = require('react-native');
var {
  StyleSheet
} = React;

var Container = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

var CardList = StyleSheet.create({
  Container: {
    flex: 1,
  },
  SectionHeader: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    backgroundColor: '#1F2636',
  },
  SectionHeader__Text: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  }
});

var Card = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  'Container--deactive': {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  'ManaCost--free': {
    padding: 12,
    width: 44,
  },
  'ManaCost--common': {
    padding: 12,
    width: 44,
  },
  'ManaCost--rare': {
    padding: 12,
    width: 44,
  },
  'ManaCost--epic': {
    padding: 12,
    width: 44,
  },
  'ManaCost--legendary': {
    padding: 12,
    width: 44,
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
    padding: 12,
    width: 44,
    borderColor: '#000000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  NormalCount__Count: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  GoldCount: {
    padding: 12,
    width: 44,
  },
  GoldCount__Count: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})

module.exports = {
  Card: Card,
  Container: Container,
  CardList: CardList
};