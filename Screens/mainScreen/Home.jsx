import PostsScreen from "./PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import postsIcon from '../../assets/icons/posts.png';

const Tab = createBottomTabNavigator();
const Home = ({navigation}) => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreatePostsScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    );
}

export default Home;

