import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NiMapView from './src/NiMapView';
import CoffeeProfile from './src/CoffeeProfile';

const App = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <View style={styles.container}>
      <NiMapView setProfileVisible={setProfileVisible} profileVisible={profileVisible} />
      {profileVisible && <CoffeeProfile />}
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
});

export default App;
