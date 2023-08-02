import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import React, {useState} from 'react';
import {
  AllPostsListScreen,
  LogInScreen,
  SplashScreen,
  UserPostsListScreen,
  UserProfileScreen,
} from './screens';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUser, faHouse, faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () => (
          <Image
            source={require('./assets/socializeFullTextLogo.png')}
            style={{
              backgroundColor: '#00002C',
              objectFit: 'contain',
              height: 30,
              marginLeft: -90,
            }}
          />
        ),
      }}>
      <Tab.Screen
        name="AllPostsList"
        component={AllPostsListScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <FontAwesomeIcon icon={faHouse} />,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name="UserPostsList"
        component={UserPostsListScreen}
        options={{
          tabBarLabel: 'Your Post',
          tabBarIcon: () => <FontAwesomeIcon icon={faSquarePlus} />,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
          tabBarLabelStyle: {
            fontSize: 16,
          },
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          intitialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
