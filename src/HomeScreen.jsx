import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Location from 'expo-location';
import CoffeeMap from './CoffeeMap';
import CoffeeDetails from './CoffeeDetails';
import { coffeeList } from './datas';

const GEOLOCATION_OPTIONS = { accuracy: 3, distanceInterval: 10 };

const HomeScreen = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const initialRegion = {
    latitude: userLocation?.latitude || 48.85925169999999,
    longitude: userLocation?.longitude || 2.3469933,
    latitudeDelta: userLocation?.latitude ? 0.01 : 0.1,
    longitudeDelta: userLocation?.longitude ? 0.01 : 0.1,
  };

  useEffect(() => {
    async function getUserLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const location = await Location.getCurrentPositionAsync(GEOLOCATION_OPTIONS);
      setUserLocation(location.coords);
    }

    if (!userLocation) getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <CoffeeMap selectedCoffee={selectedCoffee} setSelectedCoffee={setSelectedCoffee} coffeeList={coffeeList}
        userLocation={userLocation} initialRegion={initialRegion} />
      {selectedCoffee && <CoffeeDetails selectedCoffee={selectedCoffee} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default HomeScreen;
