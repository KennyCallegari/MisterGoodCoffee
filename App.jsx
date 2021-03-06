import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/HomeScreen';
import Profile from './src/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  const [appReady, setAppReady] = useState(false);

  const fetchAssets = async () => {
    const cachedImages = [
      require('./assets/espresso.png'),
      require('./assets/logo_tripadvisor.png'),
      require('./assets/logo_google.png'),
      require('./assets/carte_cappuccino.png'),
      require('./assets/carte_chocolat.png'),
      require('./assets/carte_creme.png'),
      require('./assets/carte_double.png'),
      require('./assets/carte_espresso.png'),
      require('./assets/carte_noisette.png'),
      require('./assets/carte_ristretto.png'),
      require('./assets/carte_the.png'),
      require('./assets/vegan.png'),
      require('./assets/routard.png'),
      require('./assets/coup_de_coeur.png'),
      require('./assets/kofi_button.png'),
      require('./assets/buy_me_a_coffee_button.png'),
    ];
    const imageAssets = cachedImages.map((img) => Asset.fromModule(img).downloadAsync());

    await Promise.all([...imageAssets]);
  };

  if (!appReady) {
    return <AppLoading startAsync={fetchAssets} onFinish={() => setAppReady(true)} onError={console.error} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
};

export default App;
