import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabsParamList } from './routes';
import { COLOURS, UsersInfo } from '../database/Database';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import AddItems from '../screens/AddItems';
import Inbox from '../screens/Inbox';
import Profile from '../screens/Profile';

const HomeTabs = createBottomTabNavigator<HomeTabsParamList>();

export default function HomeTabsNavigator() {
  return (
    <HomeTabs.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLOURS.white,
          height: 60,
        },
        tabBarActiveTintColor: COLOURS.lighterPurple,
        tabBarInactiveTintColor: COLOURS.lightGray,
      })}
    >
      <HomeTabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="AddItems"
        component={AddItems}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={56} color={color} />,
        }}
      />
      <HomeTabs.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'mail' : 'mail-outline'} size={size} color={color} />
          ),
        }}
      />
      <HomeTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.selected : styles.notSelected}>
              <Avatar
                size={30}
                title={UsersInfo.name.substring(0, 1) + UsersInfo.surname.substring(0, 1)}
                rounded
                source={UsersInfo.source}
              />
            </View>
          ),
        }}
      />
    </HomeTabs.Navigator>
  ); 
}

const styles = StyleSheet.create({
  selected: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLOURS.lighterPurple,
  },
  notSelected: {
    borderWidth: 0,
  },
});