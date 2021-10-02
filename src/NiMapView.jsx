import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

const NiMapView = ({ profileVisible, setProfileVisible }) => {
  const [region, setRegion] = useState({
    latitude: 48.823617869429725,
    longitude: 2.3026291945458346,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const onPressMarker = (props) => {
    console.log('marker', props.nativeEvent);
    setProfileVisible(true);
  };

  const onPressMap = (props) => {
    console.log('map', props.nativeEvent);
    if(profileVisible) setProfileVisible(false);
  };

  return (
    <MapView style={{ flex: 1 }} region={region} onRegionChangeComplete={(reg) => setRegion(reg)} onPress={onPressMap}>
      <Marker coordinate={{ latitude: 48.823617869429725, longitude: 2.3026291945458346 }} onPress={onPressMarker}
        identifier="skusku" />
    </MapView>
  );
};

export default NiMapView;
