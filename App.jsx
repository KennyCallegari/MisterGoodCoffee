import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import AppLoading from 'expo-app-loading';
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
    </NavigationContainer>
  );
};

export default App;
