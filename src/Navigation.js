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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {currentUser} = useUser();

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let iconSize;
            if (route.name === 'Contacts') {
              iconName = 'account-circle';
              iconSize = 30;
            } else if (route.name === 'Messages') {
              iconName = 'wechat';
              iconSize = 35;
            } else if (route.name === 'SettingsStack') {
              iconName = 'cog';
              iconSize = 30;
            }

            // You can return any component that you like here!
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
        <Tab.Screen name='Contacts' component={Contacts} />
        <Tab.Screen name='Messages' component={Messages} />
        <Tab.Screen
          name='SettingsStack'
          component={SettingsStack}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  };

  const SettingsStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Theme'
          component={Theme}
          options={({route}) => ({
            headerStyle: {backgroundColor: '#0088CC'},
            headerTintColor: 'white',
            headerTitle: 'Select Theme',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name='Profile'
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

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  const ContentStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name='Tabs'
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Chat'
          component={Chat}
          options={({route}) => ({
            headerStyle: {backgroundColor: '#0088CC'},
            headerTintColor: 'white',
            headerTitle: route.params.chatName,
            headerShadowVisible: false,
            headerTitleStyle: {fontSize: 16},
            headerBackVisible: true,
            headerLeft: () => (
              <Image
                source={{uri: route.params.chat.image}}
                style={styles.image}
              />
            ),
            headerRight: () => (
              <Icon name='dots-vertical' size={25} color='white' />
            ),
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {currentUser.userName ? <ContentStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: -20,
    marginRight: 5,
  },
});

export default Navigation;
