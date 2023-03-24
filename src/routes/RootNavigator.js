import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import Dashboard from '../screens/Dashboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Detail from '../screens/Detail';
import AddHero from '../screens/AddHero'
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const [login, setLogin] = useState('loading');
  const [data, setData] = useState('loading');
  useEffect(() => {
    checkuser();
  }, []);
  const checkuser = async () => {
    const auth = await AsyncStorage.getItem('auth');
    setLogin(JSON.parse(auth));
  };

  return (
    <>
      {login !== 'loading' ? (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={login ? 'Dashboard' : 'LoginScreen'}>
          <Stack.Screen name={'Dashboard'} component={Dashboard} />
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'Detail'} component={Detail} />
          <Stack.Screen name={'AddHero'} component={AddHero} />

          
        </Stack.Navigator>
      ) : null}
    </>
  );
};

export default RootNavigator;
