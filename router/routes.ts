import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { Item } from '../models/Item';

export type MainStackParamList = {
  OnBoarding: undefined;
  LogIn: undefined;
  Settings: undefined;
  HomeTabs: undefined;
  Product: { product: Item };
  AddItems: undefined;
  Chat: undefined;
};

export type HomeTabsParamList = {
  Home: undefined;
  Search: undefined;
  AddItems: undefined;
  Inbox: undefined;
  Profile: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> = NativeStackScreenProps<
  MainStackParamList,
  T
>;

export type HomeTabsScreenProps<T extends keyof HomeTabsParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabsParamList, T>,
  MainStackScreenProps<keyof MainStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
