import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from "../../src/Screens/auth/RegistrationScreen";
import LoginScreen from "../../src/Screens/auth/LoginScreen";
import Home from "../../src/Screens/mainScreen/Home";

const { Navigator, Screen } = createStackNavigator();

const AuthStack = () => (
  <Navigator headerShown={false}>
    <Screen
      name="Registration"
      component={RegistrationScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Login"
      component={LoginScreen}
      options={{
        headerShown: false,
      }}
    />
    <Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </Navigator>
);
export default AuthStack;
