import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CoffeeMap from './CoffeeMap';
import CoffeeDetails from './CoffeeDetails';

const coffeeList = [
  {
    id: '1',
    name: 'Le Petit Larousse',
    location: {
      latitude: 48.8236,
      longitude: 2.3026,
      address: '18 Av. Pierre Larousse, 92240 Malakoff',
    },
    prices: {
      espresso: 1.50,
      cappucino: 3.50,
    },
    reward: {
      name: 'Tripadvisor',
      score: 4.5,
    },
  },
  {
    id: '2',
    name: 'Le French Café',
    location: {
      latitude: 48.8209,
      longitude: 2.3004,
      address: '1 Av. Jules Ferry, 92240 Malakoff',
    },
    prices: {
      espresso: 2.30,
      cappucino: 4.50,
    },
    reward: {
      name: 'Tripadvisor',
      score: 4.5,
    },
  },
];

const HomeScreen = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);

  return (
    <View style={styles.container}>
      <CoffeeMap selectedCoffee={selectedCoffee} setSelectedCoffee={setSelectedCoffee} coffeeList={coffeeList} />
      {selectedCoffee && <CoffeeDetails selectedCoffee={selectedCoffee} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
