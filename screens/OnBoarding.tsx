import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { COLOURS, _Items } from '../database/Database';
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
import { MainStackScreenProps } from '../router/routes';
import ImageCard from '../components/ImageCard';

interface BrandsState {
    data: Brands[] | undefined;
    loading: boolean;
    error: boolean;
}

const OnBoarding = ({ navigation }: MainStackScreenProps<'OnBoarding'>) => {
    const [products, setProducts] = useState<Item[]>([]);
    const [accessory, setAccessory] = useState([]);
    const httpApi = useHttpApi();
    const [brands, setBrands] = useState<BrandsState>({
        data: undefined,
        loading: true,
        error: false,
    });

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
        for (let index = 0; index < _Items.length; index++) {
            if (_Items[index].category == 'product') {
                productList.push(_Items[index]);
            } else if (_Items[index].category == 'accessory') {
                accessoryList.push(_Items[index]);
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
                        marginTop: '20%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >

                </View>

                <ScrollView style={{ height: '9rem' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                        style={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            marginLeft: '-5rem',
                            // height: '100%',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                height: '100%',
                            }}
                        >
                            {products.map((data) => {
                                return (
                                    <ImageCard
                                        data={data}
                                        key={data.id}
                                        onPress={() => null}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
                <ScrollView style={{ height: '9rem' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                        style={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                height: '100%',
                            }}
                        >
                            {products.map((data) => {
                                return (
                                    <ImageCard
                                        data={data}
                                        key={data.id}
                                        onPress={() => null}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
                <ScrollView style={{ height: '9rem' }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View
                        style={{
                            paddingLeft: '0.5rem',
                            paddingRight: '0.5rem',
                            marginLeft: '-5rem',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-around',
                                height: '100%',
                            }}
                        >
                            {products.map((data) => {
                                return (
                                    <ImageCard
                                        data={data}
                                        key={data.id}
                                        onPress={() => null}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '3%',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: COLOURS.black,
                            fontWeight: '600',
                        }}
                    >
                        Sell pre-loved clothes
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 30,
                            color: COLOURS.purple,
                            fontWeight: '600',
                        }}
                    >
                        completely free!
                    </Text>
                </View>
                {/* Next Button */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '10%',

                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LogIn')}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLOURS.purple,
                            borderRadius: 30,
                            marginHorizontal: '10%',
                            width: '80%',
                            height: '3rem'
                        }}
                        activeOpacity={0.5}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: COLOURS.white,
                                fontWeight: '500',
                                textAlign: 'center'
                            }}
                        >
                            Next
                        </Text>
                        <Ionicons
                            name="arrow-forward-outline"
                            size={20}
                            style={{
                                color: COLOURS.white,
                                marginLeft: '0.5rem',
                            }}
                        />
                    </TouchableOpacity>
                </View>
                {/* Ignore Text */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingTop: '3%'
                    }}
                >
                    <Text
                        onPress={() => navigation.navigate('HomeTabs')}
                        style={{
                            fontSize: 16,
                            color: COLOURS.black,
                            fontWeight: '500',
                        }}
                    >
                        Ignore
                    </Text>
                </View>
                {brands.loading && (
                    <View>
                        <Text>Caricamento...</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default OnBoarding;
