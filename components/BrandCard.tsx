import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLOURS } from '../database/Database';

const ScrollBrand = ({ data }: { data: any }) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical: 14,
        marginRight: 10,
        backgroundColor: COLOURS.white,
        padding: 10,
        borderRadius: 50,

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
      <View>
        <Text>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScrollBrand;
