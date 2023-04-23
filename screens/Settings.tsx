import React from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLOURS } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackScreenProps } from '../router/routes';

const Settings = ({ navigation }: MainStackScreenProps<'Settings'>) => {
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
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            marginTop: '5%',
          }}
        >
          <View style={{ marginTop: '5%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={32} />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 48,
              color: COLOURS.black,
              fontWeight: '900',
              marginVertical: '5%',
            }}
          >
            Settings
          </Text>
        </View>

        <View
          style={{
            padding: '5%',
            backgroundColor: COLOURS.white,
            borderRadius: 30,
            marginHorizontal: '5%',
            marginVertical: '5%',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.6,
            shadowRadius: 16.0,
            elevation: 15,
          }}
        >
          <View style={styles.settingsItemsViewTop}>
            <Ionicons name="heart-outline" size={22} style={styles.icon} />
            <Text>Favourite items</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="construct-outline" size={22} style={styles.icon} />
            <Text>Personalization</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="moon-outline" size={22} style={styles.icon} />
            <Text>Dark mode</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="cash-outline" size={22} style={styles.icon} />
            <Text>Balance</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="documents-outline" size={22} style={styles.icon} />
            <Text>My orders</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="cube-outline" size={22} style={styles.icon} />
            <Text>Bundle discounts</Text>
          </View>
          <View style={styles.settingsItemsView}>
            <Ionicons name="heart-outline" size={22} style={styles.icon} />
            <Text>Donations</Text>
          </View>
          <View style={styles.settingsItemsViewBottom}>
            <Ionicons name="leaf-outline" size={22} style={styles.icon} />
            <Text>CO2 Saved</Text>
          </View>
        </View>

        <View
          style={{
            padding: '5%',
            backgroundColor: COLOURS.white,
            borderRadius: 30,
            marginHorizontal: '5%',
            marginBottom: '10%',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.6,
            shadowRadius: 16.0,
            elevation: 15,
          }}
        >
          <View style={styles.settingsItemsViewTop}>
            <Ionicons name="people-outline" size={22} style={styles.icon} />
            <Text>Forum</Text>
          </View>
          <View style={styles.settingsItemsViewBottom}>
            <Ionicons name="bulb-outline" size={22} style={styles.icon} />
            <Text>Yout guide to Solvent</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsItemsViewTop: {
    borderWidth: 1,
    borderColor: COLOURS.white,
    borderBottomColor: COLOURS.lightGray,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: '5%',
  },
  settingsItemsView: {
    borderWidth: 1,
    borderColor: COLOURS.white,
    borderBottomColor: COLOURS.lightGray,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: '5%',
  },
  icon: {
    width: '10%',
    color: COLOURS.lighterPurple,
  },
  settingsItemsViewBottom: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: '5%',
  },
});

export default Settings;
