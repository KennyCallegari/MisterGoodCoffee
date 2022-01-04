import React from 'react';
import { StyleSheet, Platform, Linking, View, Text, TouchableOpacity, FlatList, Share } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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

  const getMapLink = () => {
    const query = `${selectedCoffee.location.latitude},${selectedCoffee.location.longitude}`;
    return Platform.OS === 'ios' ? `https://maps.apple.com/maps?q=${query}` : `https://maps.google.com/?q=${query}`;
  };

  const onShare = async () => {
    const message = `${selectedCoffee.name} - ${getMapLink()}`;
    await Share.share({ message });
  };

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
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <Feather name="share" size={32} color="black" style={{ marginRight: 12 }} />
          <Text style={{ fontSize: 16 }}>Partager</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(getMapLink())} style={styles.button}>
          <MaterialCommunityIcons name="google-maps" size={32} color="black" style={{ marginRight: 8 }} />
          <Text style={{ fontSize: 16 }}>Y aller</Text>
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomWidth: 2, borderColor: 'black' }} />
      <View style={{ marginTop: 12 }}>
        <Text style={styles.menuTitle}>MENU</Text>
        <FlatList data={Object.entries(selectedCoffee.prices)} numColumns={2} keyExtractor={(item, index) => index}
          contentContainerStyle={styles.menu} renderItem={({ item }) => renderBadge(item)} />
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
    marginTop: 16,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    margin: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
  },
  menuTitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
    marginTop: 20,
  },
  menu: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    paddingRight: 12,
    paddingBottom: 20,
  },
  menuItem: {
    flex: 1 / 2,
    marginTop: 24,
    alignItems: 'flex-end',
    marginHorizontal: 8,
  },
});

export default ProfileScreen;
