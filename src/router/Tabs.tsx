import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TabListScreen } from './TabList';
import { TabSearchScreen } from './TabSearch';


const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          height: (Platform.OS === 'android') ? 60 : 80,
          borderWidth: 0,
          elevation: 0
        },
        tabBarLabelStyle: {
          marginBottom: (Platform.OS === 'android') ? 10 : 0
        },
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
    >
      <Tab.Screen
        name="TabListScreen"
        component={ TabListScreen }
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="list-outline"
              size={25}
              color={color} />
          )
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={ TabSearchScreen }
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="search-outline"
              size={25}
              color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}