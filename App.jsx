import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NiMapView from './src/NiMapView';

const App = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <View style={styles.container}>
      <NiMapView setProfileVisible={setProfileVisible} />
      {profileVisible && (
        <View style={styles.profile}>
          <Text>SKUUUU</Text>
        </View>
      )}
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
