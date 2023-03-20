import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

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

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}


