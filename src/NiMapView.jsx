import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';

const NiMapView = ({ setProfileVisible }) => {
  const [region, setRegion] = useState({
    latitude: 48.823617869429725,
    longitude: 2.3026291945458346,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const onPressMarker = (props) => {
    console.log('ici', props.nativeEvent);
    setProfileVisible(true);
  };

  return (
    <MapView style={{ flex: 1 }} region={region} onRegionChangeComplete={(reg) => setRegion(reg)}>
      <Marker coordinate={{ latitude: 48.823617869429725, longitude: 2.3026291945458346 }} onPress={onPressMarker}
        identifier="skusku" />
    </MapView>
  );
};

export default NiMapView;
