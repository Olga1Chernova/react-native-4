// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import RegistrationScreen from './Screens/auth/RegistrationScreen';
// import LoginScreen from './Screens/auth/LoginScreen';
// import Home from './Screens/mainScreen/Home';
import PostsScreen from './Screens/mainScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreen/ProfileScreen';

// const { Navigator, Screen } = createStackNavigator();

const Tab = createBottomTabNavigator();

// const AuthStack = () => (
//   <Navigator headerShown={false}>
//     <Screen name="Registration" component={RegistrationScreen} options={{
//       headerShown: false,
//     }} />
//     <Screen name="Login" component={LoginScreen} options={{
//       headerShown: false,
//     }} />
//     <Screen name='Home' component={Home} options={{
//       headerShown: false,
//     }}/>
//   </Navigator>
// );

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='posts' component={PostsScreen}/>
        <Tab.Screen name='create' component={CreatePostsScreen} />
        <Tab.Screen name='profile' component={ProfileScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

{/* <AuthStack /> */}

