import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, Linking } from 'react-native';
import bmacButton from '../assets/buy_me_a_coffee_button.png';
import kofiButton from '../assets/kofi_button.png';
import NiModal from './Modal';

const BuyMeACoffeeButton = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <TouchableOpacity style={styles.widget} onPress={() => setClicked(true)}>
        <Image style={{ width: 170, height: 48 }} source={bmacButton} />
      </TouchableOpacity>

      {clicked && (
        <NiModal>
          <View style={styles.header}>
            <Text style={{ fontWeight: 'bold' }}>Si vous voulez me payer un café !</Text>
            <TouchableOpacity>
              <Feather name="x-circle" onPress={() => setClicked(false)} size={24} />
            </TouchableOpacity>
          </View>
          <Text style={{ lineHeight: 20, marginBottom: 24 }}>
            Si vous aimez mon application et que vous voulez me remercier,
            vous pouvez me payer un café via les boutons ci-dessous ♥️
          </Text>
          <Text style={styles.text}>Si vous voulez juste me payer un café</Text>
          <TouchableOpacity style={{ marginBottom: 38 }}
            onPress={() => { Linking.openURL('https://ko-fi.com/kennycallegari'); }}>
            <Image style={styles.button} source={kofiButton} />
          </TouchableOpacity>
          <Text style={styles.text}>Si vous voulez me payer un café tous les mois</Text>
          <TouchableOpacity onPress={() => { Linking.openURL('https://www.buymeacoffee.com/KennyCallegari'); }}>
            <Image style={styles.button} source={bmacButton} />
          </TouchableOpacity>
        </NiModal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  widget: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    left: 12,
    zIndex: 0,
    borderWidth: 1,
    borderRadius: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    width: 170,
    height: 48,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default BuyMeACoffeeButton;
