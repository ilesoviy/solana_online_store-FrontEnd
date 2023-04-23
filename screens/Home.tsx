import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS, Items } from '../database/Database';
import { SearchBar } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScrollCard from '../components/ScrollCard';
import { HomeTabsScreenProps } from '../router/routes';
import ScrollBrand from '../components/BrandCard';
import { Item } from '../models/Item';
import { Brands } from '../models/Brands';
import axios from 'axios';
import { Row } from 'native-base';
import useHttpApi from '../hooks/useHttpApi';

interface BrandsState {
  data: Brands[] | undefined;
  loading: boolean;
  error: boolean;
}

const Home = ({ navigation }: HomeTabsScreenProps<'Home'>) => {
  const [products, setProducts] = useState<Item[]>([]);
  const [accessory, setAccessory] = useState([]);
  const httpApi = useHttpApi();
  const [brands, setBrands] = useState<BrandsState>({
    data: undefined,
    loading: true,
    error: false,
  });

  // get called on screen loads
  // useEffect(() => {
  //   const fetchData = async () =>{

  //   }
  //   navigation.addListener('focus', fetchData);
  //   return navigation.removeListener('focus', fetchData);
  // }, [navigation]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setBrands({ data: undefined, loading: true, error: false });
        const response = await httpApi.apiGet<Brands[]>('/items/brands');
        setBrands({ data: response, loading: false, error: false });
      } catch (error) {
        console.log(error);
        setBrands({ data: undefined, loading: false, error: true });
      }
    };
    fetchBrands();
    getDataFromDB();
  }, []);

  // get data from DB
  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
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
            Home
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
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

        {/* SearchBar */}
        <View
          style={{
            paddingHorizontal: '5%',
          }}
        >
          {/* @ts-ignore */}
          {/* <SearchBar
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
          /> */}
        </View>

        {/* Products */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: '5%',
            paddingTop: '5%',
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: COLOURS.black,
              fontWeight: '800',
            }}
          >
            Products
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              paddingLeft: 25,
              paddingBottom: 25,
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
                justifyContent: 'space-around',
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

        {/* Shop by brand */}
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
            Shop by brand
          </Text>
        </View>
        {brands.loading && (
          <View>
            <Text>Caricamento...</Text>
          </View>
        )}
        {!brands.loading && brands.error && (
          <View>
            <Text>Errore</Text>
          </View>
        )}
        {!brands.loading && !brands.error && brands.data && (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                paddingLeft: 25,
                paddingBottom: 25,
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
                  justifyContent: 'space-around',
                }}
              >
                {brands.data.map((data) => {
                  return <ScrollBrand data={data} key={data.id} />;
                })}
              </View>
            </View>
          </ScrollView>
        )}

        {/* Recommended */}
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
            Recommended{' '}
          </Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              paddingLeft: 25,
              paddingBottom: 25,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            ></View>
            <Row justifyContent="space-around" flexWrap="wrap">
              {products.map((data) => {
                return (
                  <ScrollCard
                    data={data}
                    key={data.id}
                    onPress={(id) => navigation.navigate('Product', { product: data })}
                  />
                );
              })}
            </Row>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;
