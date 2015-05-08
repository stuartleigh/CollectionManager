var React = require('react-native');
var {
  StyleSheet
} = React;

var Container = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1F2636',
  },
});

var CardList = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1F2636',
    borderColor: '#1F2636',
  },
  SectionHeader: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderTopColor: '#3C4866',
    borderTopWidth: 1,
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
    borderTopColor: '#3C4866',
    borderTopWidth: 1,
  },
  'Container--deactive': {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    borderTopColor: '#3C4866',
    borderTopWidth: 1,
    backgroundColor: '#cccccc',
  },
  'ManaCost--free': {
    padding: 12,
    width: 44,
    backgroundColor: '#FEFFF8',
  },
  'ManaCost--common': {
    padding: 12,
    width: 44,
    backgroundColor: '#B7C2BA',
  },
  'ManaCost--rare': {
    padding: 12,
    width: 44,
    backgroundColor: '#3D74FF',
  },
  'ManaCost--epic': {
    padding: 12,
    width: 44,
    backgroundColor: '#8746FF',
  },
  'ManaCost--legendary': {
    padding: 12,
    width: 44,
    backgroundColor: '#FF872F',
  },
  ManaCost__Cost: {
    textAlign: 'center',
  },
  Name: {
    flex: 1,
    padding: 10,
    borderRightColor: '#000000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  Name__Name: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  NormalCount: {
    padding: 12,
    width: 44,
  },
  NormalCount__Count: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  GoldCount: {
    padding: 12,
    width: 44,
    backgroundColor: '#FFD938',
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