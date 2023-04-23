import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { COLOURS } from '../database/Database';

const ImageCard = ({ data, onPress }: { data: any; onPress: (id: string) => void }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(data.id)}
      style={{
        width: '8rem',
        height: '8rem',
        margin: '0.5rem',
        // backgroundColor: COLOURS.white,
        // borderRadius: 30,
        // borderColor: '#000',
        // shadowColor: '#000',
        // shadowOffset: {
        //   width: 0,
        //   height: 5,
        // },
        // shadowOpacity: 0.6,
        // shadowRadius: 16.0,
        elevation: 15,
      }}
    >
      <View
        style={{
          width: '100%',
          height: '100%',
        //   borderRadius: 20,
        //   backgroundColor: COLOURS.white,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={data.productImage}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 30,
            // backgroundColor: COLOURS.white,
            resizeMode: 'contain',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default ImageCard;
