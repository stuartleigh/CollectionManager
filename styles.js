var React = require('react-native');
var {
  StyleSheet,
  PixelRatio
} = React;

var Container = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF3D3',
  },
});

var CardList = StyleSheet.create({
  Container: {
    flex: 1,
    overflow: 'hidden',
  },
  SectionHeader: {
    flex: 1,
    padding: 10,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    backgroundColor: '#403D35',
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
    borderBottomColor: '#403D35',
    borderBottomWidth: 1 / PixelRatio.get(),
  },
  'Container--deactive': {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#403D35',
    borderBottomWidth: 1 / PixelRatio.get(),
    backgroundColor: '#C9C4BD',
  },
  'Container--gold': {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#403D35',
    borderBottomWidth: 1 / PixelRatio.get(),
    backgroundColor: '#FFDDB3',
  },
  'ManaCost--free': {
    padding: 12,
    width: 48,
    borderLeftWidth: 12 / PixelRatio.get(),
    borderLeftColor: 'transparent',
  },
  'ManaCost--common': {
    padding: 12,
    width: 48,
    borderLeftWidth: 12 / PixelRatio.get(),
    borderLeftColor: '#A6A19B',
  },
  'ManaCost--rare': {
    padding: 12,
    width: 48,
    borderLeftWidth: 12 / PixelRatio.get(),
    borderLeftColor: '#3D74FF',
  },
  'ManaCost--epic': {
    padding: 12,
    width: 48,
    borderLeftWidth: 12 / PixelRatio.get(),
    borderLeftColor: '#8746FF',
  },
  'ManaCost--legendary': {
    padding: 12,
    width: 48,
    borderLeftWidth: 12 / PixelRatio.get(),
    borderLeftColor: '#FF872F',
  },
  ManaCost__Cost: {
    textAlign: 'center',
  },
  Name: {
    flex: 1,
    padding: 12,
  },
  Name__Name: {
  },
  NormalCount: {
    padding: 12,
    width: 44,
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