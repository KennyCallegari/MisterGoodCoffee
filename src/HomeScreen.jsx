import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import CoffeeMap from './CoffeeMap';
import CoffeeDetails from './CoffeeDetails';
import NiModal from './Modal';
import { coffeeList } from './datas';

const HomeScreen = () => {
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [locationPermited, setLocationPermited] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getUserLocation() {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationPermited(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      setLocationPermited(true);
      setLoading(false);
    }

    getUserLocation();
  }, []);

  return (
    <View style={styles.container}>
      <CoffeeMap selectedCoffee={selectedCoffee} setSelectedCoffee={setSelectedCoffee} coffeeList={coffeeList}
        userLocation={userLocation} />
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

      <NiModal visible={loading}>
        <>
          <Text style={styles.title}>Veuillez patienter</Text>
          <Text>On cherche votre position. Veuillez patienter un peu, ça sera bientôt prêt</Text>
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
