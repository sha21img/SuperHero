/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';
import redux from './src/redux';
import {LogBox, PermissionsAndroid, Platform} from 'react-native';
const App = () => {
  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);



  return (
    <>
      <Provider store={redux}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;
