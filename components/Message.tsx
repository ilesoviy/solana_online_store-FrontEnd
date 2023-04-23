import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLOURS } from '../database/Database';

const labelStyles = {
};

const Message = ({ data }: { data: any; }) => {
  return (
    <View
      style={{
        marginHorizontal: 14,
        marginBottom: 10,
      }}
    >

      <View style={{
        flexDirection: 'row',
        justifyContent: data.isMe ? 'flex-end' : 'flex-start'
      }}>

        <View style={data.isMe ? {
            marginLeft: 30,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: '#FFFFFF',
            padding: 10,
            maxWidth: '100%'

          } :
          {
            marginRight: 30,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            padding: 10,
            backgroundColor: '#933FE7',
            maxWidth: '100%'
            
          }}>
          <Text style={{ fontSize: 16, color: data.isMe ? 'black' : 'white' }}>{data.message}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
