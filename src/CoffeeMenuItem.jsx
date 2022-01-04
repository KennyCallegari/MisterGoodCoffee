import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CoffeeMenuItem = ({ title, number, source, size }) => (
  <View style={styles.menuItem}>
    <Image style={{ ...size, ...styles.image }} source={source} />
    <View style={styles.texts}>
      <Text style={{ fontWeight: 'bold' }}>{title.charAt(0).toUpperCase() + title.slice(1)}</Text>
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
  image: {
    marginLeft: 8,
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 8,
  },
  number: {
    fontSize: 24,
  },
});

export default CoffeeMenuItem;
