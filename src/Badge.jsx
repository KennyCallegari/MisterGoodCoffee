import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Badge = ({ title, number, source }) => (
  <View style={styles.badge}>
    <Image style={{ width: 64, height: 64 }} source={source} />
    <View style={styles.texts}>
      <Text>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 4,
  },
  number: {
    fontSize: 24,
  },
});

export default Badge;
