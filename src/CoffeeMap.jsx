import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const CoffeeMap = ({
  selectedCoffee,
  setSelectedCoffee,
  coffeeList,
  initialRegion,
}) => {
  const onPressMarker = (event) => {
    event.stopPropagation();

    if (selectedCoffee && event.nativeEvent.id === selectedCoffee.id) return;

    setSelectedCoffee(coffeeList.find((coffee) => coffee.id === event.nativeEvent.id));
  };

  const onPressMap = (event) => {
    event.stopPropagation();
    if (selectedCoffee) setSelectedCoffee(null);
  };

  const renderMarkers = () => coffeeList.map((coffee) => (
    <Marker coordinate={coffee.location} onPress={onPressMarker} identifier={coffee.id} key={coffee.id} />
  ));

  return (
    <MapView style={styles.container} onPress={onPressMap} provider={PROVIDER_GOOGLE} showsUserLocation
      followsUserLocation initialRegion={initialRegion} showsMyLocationButton showsCompass>
      {renderMarkers()}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});

export default CoffeeMap;
