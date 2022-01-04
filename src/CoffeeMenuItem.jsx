import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CoffeeMenuItem = ({ title, number, source, size }) => (
  <View style={styles.menuItem}>
    <Image style={size} source={source} />
    <View style={styles.texts}>
      <Text style={{ fontWeight: 'bold' }}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 160,
    flex: 1,
    justifyContent: 'space-between',
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 4,
    flex: 1,
    alignItems: 'flex-end',
  },
  number: {
    fontSize: 24,
  },
});

export default CoffeeMenuItem;
