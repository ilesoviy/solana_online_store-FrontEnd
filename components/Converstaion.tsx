import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLOURS } from '../database/Database';

const labelStyles = {
};

const Conversation = ({ data, onPress }: { data: any; onPress: (id: string) => void }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(data.id)}
      style={{
        margin: 14,
      }}

    >
      <View
        style={{
          flexDirection: 'row',
        }}>

        <Image source={data.avatar || ''}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            resizeMode: 'contain',
            marginRight:10,
          }} />
        <View style={{ flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text numberOfLines={1} style={{fontSize: 16, flex:1}}>{data.fullname || 'John'}</Text>
            <Text numberOfLines={1} style={{fontSize: 16}}>{data.time || 'now'}</Text>
          </View>
          <Text numberOfLines={1} style={{fontSize: 16}} ellipsizeMode='tail'>{data.message || 'This is a test message'}</Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default Conversation;
