import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CoffeeMap from './src/CoffeeMap';
import CoffeeDetails from './src/CoffeeDetails';

const App = () => {
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <View style={styles.container}>
      <CoffeeMap setProfileVisible={setProfileVisible} profileVisible={profileVisible} />
      {profileVisible && <CoffeeDetails />}
      <StatusBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
