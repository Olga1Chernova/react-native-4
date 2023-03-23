import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";

import RegistrationScreen from './Screens/auth/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen';
import Home from './Screens/mainScreen/Home';

const { Navigator, Screen } = createStackNavigator();


const AuthStack = () => (
  <Navigator headerShown={false} >
    <Screen name="Registration" component={RegistrationScreen} options={{
      headerShown: false,
    }} />
    <Screen name="Login" component={LoginScreen} options={{
      headerShown: false,
    }} />
    <Screen name='Home' component={Home} options={{
      headerShown: false,
    }}/>
  </Navigator>
);

export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <View style={{flex:1}} onLayout={onLayoutRootView}>
        <AuthStack />
      </View>
    </NavigationContainer>
  );
}


