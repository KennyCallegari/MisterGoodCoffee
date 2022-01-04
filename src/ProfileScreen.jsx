import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import CoffeeMenuItem from './CoffeeMenuItem';
import espressoSource from '../assets/carte_espresso.png';
import cappuccinoSource from '../assets/carte_cappuccino.png';
import noisetteSource from '../assets/carte_noisette.png';
import chocolatSource from '../assets/carte_chocolat.png';
import cremeSource from '../assets/carte_creme.png';
import doubleSource from '../assets/carte_double.png';
import ristrettoSource from '../assets/carte_ristretto.png';
import theSource from '../assets/carte_the.png';

const ProfileScreen = ({ route, navigation }) => {
  const { selectedCoffee } = route.params;

  console.log('selectedCoffee', selectedCoffee);

  const selectSource = (drink) => {
    switch (drink) {
      case 'espresso':
        return espressoSource;
      case 'cappuccino':
        return cappuccinoSource;
      case 'noisette':
        return noisetteSource;
      case 'chocolat':
        return chocolatSource;
      case 'creme':
        return cremeSource;
      case 'double':
        return doubleSource;
      case 'ristretto':
        return ristrettoSource;
      case 'the':
        return theSource;
      default:
        return espressoSource;
    }
  };

  const renderBadge = (item) => {
    const [drink, price] = item;
    return (
      <View style={styles.menuItem}>
        <CoffeeMenuItem number={`${price} €`} source={selectSource(drink)} size={{ width: 40, aspectRatio: 1.4 }}
          title={drink} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{selectedCoffee.name}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}} style={{ margin: 12 }}>
          <FontAwesome name="internet-explorer" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomWidth: 2, borderColor: 'black' }} />
      <View style={{ marginTop: 12 }}>
        <FlatList data={Object.entries(selectedCoffee.prices)} numColumns={2} keyExtractor={(item, index) => index}
          contentContainerStyle={{ borderWidth: 2, borderColor: 'black', paddingRight: 12, paddingBottom: 20 }}
          renderItem={({ item }) => renderBadge(item)} />
      </View>
      <View style={{ borderBottomWidth: 2, borderColor: 'black', marginTop: 12 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5E9',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    flex: 1 / 2,
    marginTop: 24,
    alignItems: 'flex-end',
    marginHorizontal: 8,
  },
});

export default ProfileScreen;
