import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS, Items, Brands } from '../database/Database';
import { Button, SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ConverstionElem from '../components/Converstaion';
import Chat from './Chat';
import { HomeTabsScreenProps } from '../router/routes';
import { FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const convs = [
  { avatar: 'https://avatars.githubusercontent.com/u/131432648?s=64&v=4', fullname: 'sddds', time: 'now', message: 'There are no major defects or damages. Only tiny scratches' },
  { avatar: 'https://avatars.githubusercontent.com/u/131432648?s=64&v=4', fullname: 'sdf', time: '3m ago', message: 'There are no major defects or damages. Only tiny scratches' },
  { avatar: 'https://avatars.githubusercontent.com/u/131432648?s=64&v=4', fullname: 'gge', time: '2h ago', message: 'There are no major defects or damages. Only tiny scratches' },
  { avatar: 'https://avatars.githubusercontent.com/u/131432648?s=64&v=4', fullname: 'beffg', time: '9h ago', message: 'There are no major defects or damages. Only tiny scratches' },
  { avatar: 'https://avatars.githubusercontent.com/u/131432648?s=64&v=4', fullname: 'lwkekf', time: 'past', message: 'There are no major defects or damages. Only tiny scratches' },
];

const Inbox = ({ navigation }: HomeTabsScreenProps<'Inbox'>) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.paleGrey,
      }}
    >
      <StatusBar backgroundColor={COLOURS.paleGrey} barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginHorizontal: '5%',
            marginTop: '10%',
            marginBottom: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
         

          <Text
            style={{
              fontSize: 48,
              color: COLOURS.black,
              fontWeight: '900',
            }}
          >
            Messages
          </Text>
        </View>

        {/* SearchBar */}
        <View
          style={{
            paddingHorizontal: '5%',
          }}
        >
          {/*@ts-ignore */}
          <SearchBar
            placeholder="Search for items or members"
            platform="android"
            containerStyle={{
              backgroundColor: COLOURS.paleGrey,
            }}
            inputContainerStyle={{
              backgroundColor: COLOURS.white,
              borderRadius: 50,
              padding: 3,
              paddingHorizontal: 10,

              shadowColor: COLOURS.black,
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 12,
            }}
            inputStyle={{
              fontSize: 16,
            }}
          />
        </View>

        <FlatList
          data={convs}
          renderItem={data => <ConverstionElem
            data={data.item}
            onPress={(id) => navigation.navigate('Chat')}
          />}
        />

      </ScrollView>
    </View>
  );
};

export default Inbox;
