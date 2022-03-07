import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import CoffeeMap from './CoffeeMap';
import CoffeeDetails from './CoffeeDetails';
import NiModal from './Modal';
import { coffeeList } from './datas';

const GEOLOCATION_OPTIONS = { accuracy: 3, distanceInterval: 10 };

const HomeScreen = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [locationPermited, setLocationPermited] = useState(true);
  const [userLocation, setUserLocation] = useState(null);

  const initialRegion = {
    latitude: userLocation?.latitude || 48.823617869429725,
    longitude: userLocation?.longitude || 2.3026291945458346,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(initialRegion);

  const locationChanged = (location) => {
    setUserLocation(location.coords);
    setRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  useEffect(() => {
    async function getUserLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationPermited(false);
        return;
      }

      Location.watchPositionAsync(GEOLOCATION_OPTIONS, locationChanged);
      setLocationPermited(true);
    }

    if (!userLocation) getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <CoffeeMap selectedCoffee={selectedCoffee} setSelectedCoffee={setSelectedCoffee} coffeeList={coffeeList}
        userLocation={userLocation} region={region} onRegionChange={(reg) => setRegion(reg)}
        resetToUserPosition={() => { setRegion(initialRegion); }} />
      {selectedCoffee && <CoffeeDetails selectedCoffee={selectedCoffee} />}

      <NiModal visible={!locationPermited}>
        <>
          <Text style={styles.title}>Veuillez activer la géo-localisation</Text>
          <Text>
            {'Pour ça, rendez vous dans vos réglages et accordez nous l\'accès à votre localisation.'
            + '\n\nPromis, on ne fera rien d\'autre que vous localiser pour vous proposer les cafés autour de vous.'}
          </Text>
        </>
      </NiModal>
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
