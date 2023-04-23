import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import { COLOURS } from '../database/Database';
import { MainStackScreenProps } from '../router/routes';
import Message from '../components/Message';

const Chat = ({ route, navigation }: MainStackScreenProps<'Chat'>) => {
  const [messages, setMessages] = useState<any>([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = () => {
    setMessages([{isMe: Math.random() * 10 > 5,  message:newMessage }, ]);
    setNewMessage('');
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

      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
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
        <Text
          style={{
            fontSize: 48,
            color: COLOURS.black,
            fontWeight: '900',
          }}
        >
          Messages
        </Text>
      </View>



      <FlatList
      inverted
        style={{
          flex: 1,
          padding: 10,

        }}
        data={messages}
        renderItem={data => <Message data={data.item} />}
      />

      <View style={styles.form}>
        <TextInput style={styles.input} value={newMessage} onChangeText={setNewMessage} />
        <Button title="Send" onPress={handleSubmit} />
      </View>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  message: {
    fontSize: 20,
    marginBottom: 10,
  },
  form: {
    flexDirection: 'row',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default Chat;
