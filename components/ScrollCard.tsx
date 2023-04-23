import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLOURS } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScrollCard = ({ data, onPress }: { data: any; onPress: (id: string) => void }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(data.id)}
      style={{
        width: 140,
        marginVertical: 14,
        marginRight: 10,
        backgroundColor: COLOURS.white,
        padding: 10,
        borderRadius: 30,

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
          width: '100%',
          height: 100,
          borderRadius: 20,
          backgroundColor: COLOURS.paleGrey,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={data.productImage}
          style={{
            width: '80%',
            height: '80%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          marginLeft: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text>&#36; {data.productPrice}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text>{data.likes}</Text>
          <Ionicons name={'heart-outline'} size={18} />
        </View>
      </View>
      <View
        style={{
          marginLeft: 5,
          marginTop: 5,
          marginBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            color: COLOURS.lightGray,
          }}
        >
          Size: {data.detail}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ScrollCard;
