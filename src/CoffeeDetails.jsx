import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CoffeeDetails = ({ selectedCoffee }) => (
  <View style={styles.profile}>
    <Text>{selectedCoffee.name}</Text>
    <Text>{selectedCoffee.location.address}</Text>
    <Text>{`espresso: ${selectedCoffee.prices.espresso} €`}</Text>
    <Text>{`cappucino: ${selectedCoffee.prices.cappucino} €`}</Text>
  </View>
);

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default CoffeeDetails;
