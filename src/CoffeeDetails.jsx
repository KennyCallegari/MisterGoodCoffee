import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import tripAdvisorSource from '../assets/logo_tripadvisor.png';
import espressoLogoSource from '../assets/espresso.png';
import Badge from './Badge';

const windowWidth = Dimensions.get('window').width;

const CoffeeDetails = ({ selectedCoffee }) => {
  const navigation = useNavigation();

  const getOpeningHours = () => {
    const today = new Date().getDay();
    const dayHours = selectedCoffee.hours.slice(today - 1)[0];
    if (dayHours.start === 'closed') return 'C\'est fermé aujourd\'hui !';

    return `${dayHours.start} - ${dayHours.end}`;
  };

  const goToProfile = () => {
    navigation.navigate('Profile', { selectedCoffee });
  };

  return (
    <View style={styles.profile}>
      <View style={styles.title}>
        <Text style={styles.name}>{selectedCoffee.name}</Text>
        <Text style={styles.address}>{selectedCoffee.location.address}</Text>
        <Text style={styles.hours}>{getOpeningHours()}</Text>
      </View>
      <View style={styles.badgesContainer}>
        <Badge title="Espresso" number={`${selectedCoffee.prices.espresso} €`} source={espressoLogoSource} />
        <Badge title={selectedCoffee.reward.name} number={selectedCoffee.reward.score} source={tripAdvisorSource} />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Feather name="chevron-down" size={32} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 200,
    width: '90%',
    paddingTop: 12,
    paddingHorizontal: 12,
    marginLeft: windowWidth / 20,
    marginBottom: 32,
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: '#FFF5E9',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  title: {
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  address: {
    fontStyle: 'italic',
  },
  hours: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  badgesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    color: 'black',
    alignItems: 'center',
  },
});

export default CoffeeDetails;
