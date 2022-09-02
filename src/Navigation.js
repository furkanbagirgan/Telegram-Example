import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useUser} from './contexts/UserContext';
import Contacts from './screens/Contacts';
import Messages from './screens/Messages';
import Login from './screens/Login';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import Theme from './screens/Theme';

//
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  //The current user information is accessed with the useUser hook.
  const {currentUser} = useUser();

  //Here, the tabs required for the bottom navigation are created and the necessary settings are made.
  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          //Here the tabBar icon is set according to the page name.
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconSize;
            if (route.name === 'Contacts') {
              iconName = 'account-circle';
              iconSize = 30;
            } else if (route.name === 'Messages') {
              iconName = 'wechat';
              iconSize = 35;
            } else if (route.name === 'Settings') {
              iconName = 'cog';
              iconSize = 30;
            }

            return <Icon name={iconName} size={iconSize} color={color} />;
          },
          headerStyle: {backgroundColor: '#0088CC'},
          headerTintColor: 'white',
          tabBarActiveTintColor: '#333',
          tabBarInactiveTintColor: 'white',
          tabBarActiveBackgroundColor: '#0088CC',
          tabBarInactiveBackgroundColor: '#0088CC',
          tabBarShowLabel: false,
        })}>
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  //It is the navigation structure that will be shown in case there is no entry yet.
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  //It is the navigation structure that will be displayed when the login is still made.
  const ContentStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={({route}) => ({
            headerStyle: {backgroundColor: '#0088CC'},
            headerTintColor: 'white',
            headerTitle: route.params.chatName,
            headerShadowVisible: false,
            headerBackVisible: true,
            headerLeft: () => (
              <Image
                source={{uri: route.params.receiver.image}}
                style={styles.image}
              />
            ),
            headerRight: () => (
              <Icon name="dots-vertical" size={25} color="white" />
            ),
          })}
        />
        <Stack.Screen
          name="Theme"
          component={Theme}
          options={({route}) => ({
            headerStyle: {backgroundColor: '#0088CC'},
            headerTintColor: 'white',
            headerTitle: 'Select Theme',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({route}) => ({
            headerStyle: {backgroundColor: '#0088CC'},
            headerTintColor: 'white',
            headerTitle: 'Edit Profile',
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    );
  };

  //Here, the appropriate navigation structure is displayed on the screen according to the user input status.
  return (
    <NavigationContainer>
      {currentUser.userName ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

//Here is the required style for the image to be displayed in the header of the chat screen.
const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: -20,
    marginRight: 10,
  },
});

export default Navigation;
