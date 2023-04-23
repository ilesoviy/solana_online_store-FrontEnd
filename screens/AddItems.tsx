import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { COLOURS, Categorys } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeTabsScreenProps } from '../router/routes';

const AddItems = ({ navigation }: HomeTabsScreenProps<'AddItems'>) => {
  const [data, setData] = React.useState({
    title: '',
    description: '',
    category: '',
    brand: '',
  });

  const titleChange = (val: string) => {
    setData({ ...data, title: val });
  };

  const descriptionChange = (val: string) => {
    setData({ ...data, description: val });
  };

  const categoryChange = (val: string) => {
    setData({ ...data, category: val });
  };

  const brandChange = (val: string) => {
    setData({ ...data, brand: val });
  };

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: COLOURS.paleGrey,
        }}
      >
        <StatusBar backgroundColor={COLOURS.paleGrey} barStyle="dark-content" />

        <View
          style={{
            alignItems: 'baseline',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            marginTop: '5%',
          }}
        >
          <View style={{ marginTop: '5%' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={32} />
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 48,
              color: COLOURS.black,
              fontWeight: '900',
              marginVertical: '5%',
            }}
          >
            Sell an item
          </Text>
        </View>

        <View
          style={{
            borderRadius: 30,
            margin: '5%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <TextInput style={styles.input} placeholder="Title" maxLength={64} />
          <TextInput
            style={styles.input}
            placeholder="Description"
            multiline={true}
            numberOfLines={10}
            maxLength={256}
            scrollEnabled={true}
          />
          <TextInput style={styles.input} placeholder="Category" />
          <TextInput style={styles.input} placeholder="Brand" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '10%',
    color: COLOURS.lighterPurple,
  },
  input: {
    backgroundColor: COLOURS.white,
    borderWidth: 1,
    borderColor: COLOURS.lightGray,
    borderRadius: 30,
    width: '100%',
    marginBottom: '5%',
    paddingHorizontal: 15,
    paddingVertical: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 10.0,
    elevation: 5,
  },
});

export default AddItems;
