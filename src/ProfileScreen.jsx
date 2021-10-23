import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Button title="Revenir en arrière" onPress={() => navigation.goBack()} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
