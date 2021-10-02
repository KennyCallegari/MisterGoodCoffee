import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

const CoffeeMap = ({ selectedCoffee, setSelectedCoffee, coffeeList }) => {
  const [region, setRegion] = useState({
    latitude: 48.823617869429725,
    longitude: 2.3026291945458346,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const onPressMarker = (props) => {
    console.log('marker', props.nativeEvent);
    setSelectedCoffee(coffeeList.find((coffee) => coffee.id === props.nativeEvent.id));
  };

  const onPressMap = (props) => {
    console.log('map', props.nativeEvent);
    if (selectedCoffee) setSelectedCoffee(null);
  };

  const renderMarkers = () => coffeeList.map((coffee) => (
    <Marker coordinate={coffee.location} onPress={onPressMarker} identifier={coffee.id} key={coffee.id} />
  ));

  return (
    <MapView style={{ flex: 1 }} region={region} onRegionChangeComplete={(reg) => setRegion(reg)} onPress={onPressMap}>
      {renderMarkers()}
    </MapView>
  );
};

export default CoffeeMap;
