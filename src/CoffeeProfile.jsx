import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const App = () => (
  <View style={styles.profile}>
    <Text>SKUUUU</Text>
  </View>
);

const styles = StyleSheet.create({
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
