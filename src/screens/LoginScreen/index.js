import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/images';
import Icon from 'react-native-vector-icons/dist/Feather';
const LoginScreen = props => {
  const navigation = useNavigation();
  const [passwordError, setPasswordError] = useState('');
  const [userEmailError, setUserEmailError] = useState('');
  const [isActive, setIsActive] = useState(true);

  const [userDetail, setUserDetail] = useState({
    email: '',
    password: '',
  });

  const submit = async () => {
    let email = 'kumaramit@gmail.com';
    let password = 'Asdf@1234';
    console.log(
      'userDetail.email == email && userDetail.password == password',
      userDetail.email,
      userDetail.password,
    );
    if (userDetail.email == email && userDetail.password == password) {
      console.log('sahi h');
      setUserDetail({
        email: '',
        password: '',
      });
      AsyncStorage.setItem('auth', JSON.stringify(true));
      navigation.navigate('Dashboard');
    } else {
      Toast.show('Invalid Credential', Toast.LONG);
    }
  };
  return (
    <View style={styles.minstyleviewphotograpgy}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}
        >
        <View style={styles.container}>
          <View style={styles.minviewallcontent}>
            <Text style={styles.setpatintlogin}>Login</Text>
            <TextInput
              style={styles.textInput}
              placeholderTextColor={'gray'}
              placeholder={'email'}
              minLength={5}
              onChangeText={text => {
                let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                console.log('regex.test(text)', regex.test(text));
                if (text == '') {
                  setUserEmailError('This field is required');
                } else if (!regex.test(text)) {
                  setUserEmailError('Please enter valid email');
                } else {
                  setUserEmailError('');
                }
                setUserDetail({...userDetail, email: text});
              }}
              value={userDetail.email}
            />
            <Text style={styles.errorMsg}>{userEmailError}</Text>
            <View style={styles.textInput}>
              <TextInput
                style={styles.textInputPass}
                secureTextEntry={isActive}
                placeholderTextColor={'gray'}
                placeholder={'password'}
                onChangeText={text => {
                  let regex =
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
                  console.log('regex.test(text)', regex.test(text));
                  if (text == '') {
                    setPasswordError('This field is required');
                  } else if (!regex.test(text)) {
                    setPasswordError('Please enter valid password');
                  } else {
                    setPasswordError('');
                  }
                  setUserDetail({...userDetail, password: text});
                }}
                value={userDetail.password}
                minLength={8}
              />
              <TouchableOpacity onPress={() => setIsActive(!isActive)}>
                <Icon name={isActive ? 'eye-off' : 'eye'} size={20} />
              </TouchableOpacity>
            </View>
            <Text style={styles.errorMsg}>{passwordError}</Text>

            <View style={styles.buttonviewsettopspace}>
              <TouchableOpacity
                disabled={
                  !!userDetail.email &&
                  !!userDetail.password &&
                  userEmailError == '' &&
                  passwordError == ''
                    ? false
                    : true
                }
                style={styles.LoginButton}
                onPress={() => {
                  submit();
                }}>
                <Text style={styles.LoginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  setpatintlogin: {
    fontSize: 27,
    marginBottom: 20,
    color: '#50C878',
    textAlign: 'center',
  },
  minstyleviewphotograpgy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  LoginButton: {
    paddingVertical: 15,
    width: '100%',
    backgroundColor: '#50C878',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  LoginText: {
    color: '#fff',
    alignItems: 'center',
  },
  errorMsg: {
    paddingTop: 3,
    paddingBottom: 10,
    paddingLeft: 10,
    color: 'red',
  },
  buttonviewsettopspace: {
    width: '100%',
    marginBottom: 20,
  },
  minviewallcontent: {
    width: '90%',
    height: '100%',
  },
  textInput: {
    width: '100%',
    borderRadius: 7,
    flexDirection: 'row',
    paddingHorizontal: 12,
    height: 47,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 2,
  },
  textInputPass: {
    width: '90%',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
