import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { COLOURS, Items, UsersInfo } from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';
import { MainStackScreenProps } from '../router/routes';
import { Item } from '../models/Item';

const ProductInfo = ({ route, navigation }: MainStackScreenProps<'Product'>) => {
  const { product } = route.params;

  //const [product, setProduct] = useState<Item | undefined>(undefined);

  const width = Dimensions.get('window').width;

  const height = Dimensions.get('window').height;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const [currentImage, setCurrentImage] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offset / width);
    setCurrentImage(currentIndex);
  };

  // useEffect(() => {
  //   const getData = () => {
  //     getDataFromDB();
  //   };
  //   navigation.addListener('focus', getData);

  //   return navigation.removeListener('focus', getData);
  // }, [navigation]);

  //get product data by productId

  // const getDataFromDB = async () => {
  //   for (let index = 0; index < Items.length; index++) {
  //     if (Items[index].id === productId) {
  //       await setProduct(Items[index]);
  //       return;
  //     }
  //   }
  // };

  //product horizontal scroll product card
  const renderProduct = ({ item }: { item: string }) => {
    return (
      <View
        style={{
          width: width,
          height: 220,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={item as any}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  function makeAnOffert(id: string): void {
    console.log('make an offert');
  }

  function buyNow(id: string): void {
    console.log('buy now');
  }

  return (
    <View
      style={{
        width: '100%',
        height: height,
        backgroundColor: COLOURS.paleGrey,
        position: 'relative',
      }}
    >
      <StatusBar backgroundColor={COLOURS.paleGrey} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLOURS.paleGrey,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              padding: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 16,
                  color: COLOURS.darkGrey,
                  padding: 10,
                  backgroundColor: COLOURS.white,
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>

            {/* <Entypo
              name=''
              style={{
                fontSize: 16,
                color: COLOURS.darkGrey,
                backgroundColor: COLOURS.white,
                borderRadius: 50,
                padding: 10,
              }}
            >
              <Text>
                {currentImage + 1}/{Object(product.productImageList).length}
              </Text>
            </Entypo> */}
          </View>
          <FlatList
            data={product?.productImageList}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onMomentumScrollEnd={handleScroll}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
              useNativeDriver: false,
            })}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              marginTop: 32,
            }}
          >
            {/* {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: "clamp",
                  });
                  return (
                    <Animated.View
                      key={index}
                      style={{
                        width: "16%",
                        height: 2.4,
                        backgroundColor: COLOURS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}
                    ></Animated.View>
                  );
                })
              : null} */}
          </View>
        </View>
        {/* SECONDA META */}
        <View
          style={{
            paddingHorizontal: '5%',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
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
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: '5%',
              marginVertical: '5%',
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
              }}
            >
              Sold by:
            </Text>
          </View>
          {/* INFO USER SECOND HALF */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomColor: COLOURS.lightGray,
              borderBottomWidth: 1,
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                width: '60%',
                justifyContent: 'space-between',
              }}
            >
              <Avatar
                size="large"
                title={UsersInfo.name.substring(0, 1) + UsersInfo.surname.substring(0, 1)}
                rounded
                overlayContainerStyle={{ backgroundColor: COLOURS.silver }}
                source={UsersInfo.source}
              />

              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'baseline',
                }}
              >
                <Text style={{ fontSize: 16, fontWeight: '600' }}>{UsersInfo.name}</Text>

                {/* <StarRating
                  rating={UsersInfo.starRating}
                  maxStars={5}
                  starSize={30}
                  fullStarColor={COLOURS.golden}
                /> */}
              </View>
            </View>

            <Ionicons
              name="mail-outline"
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
          </View>
          {/* END INFO USER */}
          {/* 222222222222222222222222222222222222222222222222222222222 */}

          <View style={{ marginVertical: '5%' }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: '500',
                color: COLOURS.black,
              }}
            >
              {product.productName}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLOURS.black,
                  fontWeight: '400',
                  opacity: 0.5,
                  lineHeight: 20,
                  maxWidth: '70%',
                }}
              >
                {product.description}
              </Text>
              <Text
                style={{
                  fontSize: 32,
                  fontWeight: '500',
                  maxWidth: '30%',
                  color: COLOURS.black,
                  marginBottom: 4,
                }}
              >
                &#36; {product.productPrice}
              </Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: COLOURS.lightGray,
              borderBottomWidth: 1,
              paddingBottom: 10,
              paddingHorizontal: 16,
            }}
          />

          {/* 33333333333333333333333333333333333333333333 */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              paddingVertical: '5%',
              borderBottomColor: COLOURS.lightGray,
              borderBottomWidth: 1,
            }}
          >
            <TouchableOpacity
              onPress={() => makeAnOffert(product.id)}
              style={{
                backgroundColor: COLOURS.white,
                borderWidth: 1,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                padding: '3%',
                width: '45%',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                }}
              >
                Make an offert
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => buyNow(product.id)}
              style={{
                backgroundColor: COLOURS.lighterPurple,
                borderRadius: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '3%',
                width: '45%',
              }}
            >
              <Ionicons
                name={'cart-outline'}
                size={25}
                style={{
                  color: COLOURS.white,
                }}
              />

              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: COLOURS.black,
                  textTransform: 'uppercase',
                }}
              >
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginVertical: '5%',
              paddingBottom: '5%',
            }}
          >
            <View style={{ marginBottom: '2%' }}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLOURS.lightGray,
                }}
              >
                Description:
              </Text>
            </View>

            <Text
              style={{
                fontSize: 12,
                color: COLOURS.black,
                lineHeight: 20,
              }}
            >
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductInfo;
