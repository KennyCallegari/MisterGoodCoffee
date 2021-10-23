import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoffeeDetails = ({ selectedCoffee }) => {
  const navigation = useNavigation();

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.profile}>
      <Text>{selectedCoffee.name}</Text>
      <Text>{selectedCoffee.location.address}</Text>
      <Text>{`espresso: ${selectedCoffee.prices.espresso} €`}</Text>
      <Text>{`cappucino: ${selectedCoffee.prices.cappucino} €`}</Text>
      <Button title="Voir les détails" onPress={goToProfile} />
    </View>
  );
};

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
