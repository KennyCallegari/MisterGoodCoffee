import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

const CoffeeMap = ({ selectedCoffee, setSelectedCoffee, coffeeList, userLocation }) => {
  const initialRegion = {
    latitude: userLocation?.latitude || 48.823617869429725,
    longitude: userLocation?.longitude || 2.3026291945458346,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [region, setRegion] = useState(initialRegion);

  const onPressMarker = (props) => {
    console.log('marker', props.nativeEvent);
    setSelectedCoffee(coffeeList.find((coffee) => coffee.id === props.nativeEvent.id));
  };

  const onPressMap = (props) => {
    console.log('map', props.nativeEvent);
    if (selectedCoffee) setSelectedCoffee(null);
  };

  const resetToUserPosition = () => { setRegion(initialRegion); };

  const renderMarkers = () => coffeeList.map((coffee) => (
    <Marker coordinate={coffee.location} onPress={onPressMarker} identifier={coffee.id} key={coffee.id} />
  ));

  return (
    <MapView style={{ flex: 1 }} region={region} onRegionChangeComplete={(reg) => setRegion(reg)} onPress={onPressMap}>
      {userLocation?.latitude && (
      <Marker coordinate={{ latitude: userLocation?.latitude, longitude: userLocation?.longitude }}
        identifier="userLocation" key="userLocation" pinColor="blue" title="VOUS ETES ICI" />
      )}
      {renderMarkers()}
      <TouchableOpacity style={styles.findPositionButton} onPress={resetToUserPosition}>
        <FontAwesome name="location-arrow" size={48} color="white" />
      </TouchableOpacity>
    </MapView>
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
  findPositionButton: {
    position: 'absolute',
    bottom: 32,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#00000099',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CoffeeMap;
