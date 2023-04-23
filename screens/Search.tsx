import { View, StatusBar, ScrollView, Text, TouchableOpacity } from 'react-native';
import { COLOURS, SearchCategory } from '../database/Database';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchBar } from 'react-native-elements';

const Search = () => {
  // create an category reusable card
  const CategoryCard = ({ data }: { data: any }) => {
    return (
      <TouchableOpacity
        style={{
          margin: '2.5%',
          backgroundColor: COLOURS.white,
          borderRadius: 35,
          width: '42.5%',
          justifyContent: 'space-between',

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
            alignItems: 'flex-start',
            padding: 25,
          }}
        >
          <Ionicons
            name={data.icon}
            size={24}
            style={{
              color: COLOURS.black,
              borderRadius: 50,
              backgroundColor: COLOURS.white,
            }}
          />
          <Text style={{}}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    );
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
            Search
          </Text>
          <TouchableOpacity>
            <Ionicons
              name="filter-outline"
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
          {/* <SearchBar
            value={''}
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

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 25,
          }}
        >
          {SearchCategory.map((data) => {
            return <CategoryCard data={data} key={data.id} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;
