import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from './routes';
import Settings from '../screens/Settings';
import AddItems from '../screens/AddItems';
import ProductInfo from '../screens/ProductInfo';
import Chat from '../screens/Chat';
import HomeTabsNavigator from './TabNavigator';
import OnBoarding from '../screens/OnBoarding';
import LogIn from '../screens/LogIn';

const MainStack = createNativeStackNavigator<MainStackParamList>();
export default function MainNavigator() {
  return (
    <MainStack.Navigator initialRouteName="OnBoarding" screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="OnBoarding" component={OnBoarding}/>
      <MainStack.Screen name="LogIn" component={LogIn}/>
      <MainStack.Screen name="HomeTabs" component={HomeTabsNavigator} />
      <MainStack.Screen name="Product" component={ProductInfo} />
      <MainStack.Screen name="Settings" component={Settings} />
      <MainStack.Screen name="AddItems" component={AddItems} />
      <MainStack.Screen name="Chat" component={Chat} />
    </MainStack.Navigator>
  );
}
