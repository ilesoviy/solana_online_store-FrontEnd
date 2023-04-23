import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS, UsersInfo, Items } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import ScrollCard from '../components/ScrollCard';
import Settings from './Settings';
import { HomeTabsScreenProps, MainStackScreenProps } from '../router/routes';
import { Item } from '../models/Item';

const Profile = ({ navigation }: HomeTabsScreenProps<'Profile'>) => {
  const [products, setProducts] = useState<Item[]>([]);
  const [size, setSize] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB
  const getDataFromDB = () => {
    let productList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product' && Items[index].userVendor === UsersInfo.email) {
        productList.push(Items[index]);
      }
    }
    setProducts(productList);
  };

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
            marginVertical: '10%',
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
            Profile
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '30%',
            }}
          >
            <TouchableOpacity>
              <Ionicons
                name="create-outline"
                size={24}
                style={{
                  color: COLOURS.black,
                  padding: 12,
                  borderRadius: 50,
                  backgroundColor: COLOURS.white,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 16.0,
                  elevation: 15,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Ionicons
                name="settings-outline"
                size={24}
                style={{
                  color: COLOURS.black,
                  padding: 12,
                  borderRadius: 50,
                  backgroundColor: COLOURS.white,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 5,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 16.0,
                  elevation: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: '5%',
            flexDirection: 'row',
          }}
        >
          <Avatar
            size="xlarge"
            title={UsersInfo.name.substring(0, 1) + UsersInfo.surname.substring(0, 1)}
            rounded
            overlayContainerStyle={{ backgroundColor: COLOURS.silver }}
            source={UsersInfo.source}
          />
          <View style={{ flex: 1, marginLeft: '5%' }}>
            <View>
              <Text style={{ fontSize: 24, fontWeight: '600' }}>{UsersInfo.name}</Text>
            </View>
            <View style={{ flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              <Text>{UsersInfo.bio}</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: COLOURS.white,
            borderRadius: 50,
            marginHorizontal: '5%',
            marginVertical: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '10%',
            paddingVertical: 15,

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.6,
            shadowRadius: 16.0,
            elevation: 10,
          }}
        >
          {/* StarRating */}
          <View
            style={{
              flexDirection: 'row',
              width: '22%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text>{UsersInfo.starRating}/5</Text>
            <Ionicons name="star" size={18} color={COLOURS.golden} />
          </View>

          <Text
            style={{
              color: COLOURS.lightGray,
            }}
          >
            {UsersInfo.numberReviews} Reviews
          </Text>
        </View>

        {/* Items */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 25,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: COLOURS.black,
              fontWeight: '800',
            }}
          >
            Your items
          </Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View
            style={{
              marginHorizontal: '5%',
              marginVertical: '2.5%',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            ></View>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}
            >
              {products.map((data) => {
                return (
                  <ScrollCard
                    data={data}
                    key={data.id}
                    onPress={(id) => navigation.navigate('Product', { product: data })}
                  />
                );
              })}
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Profile;
