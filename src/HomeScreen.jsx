import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CoffeeMap from './CoffeeMap';
import CoffeeDetails from './CoffeeDetails';
import { coffeeList } from './datas';

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
