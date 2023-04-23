import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './router/MainNavigator';
import { extendTheme, NativeBaseProvider } from 'native-base';

const theme = extendTheme({});

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <MainNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
