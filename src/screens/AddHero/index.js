import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  PERMISSIONS,
  RESULTS,
  request,
  requestMultiple,
} from 'react-native-permissions';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
export default function AddHero(props) {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [NickName, setNickName] = useState('');
  const [power, setPower] = useState('');
  const [imagedata, setimagedata] = useState('');
const {edit,dataOLD} = props.route.params
  const SaveData = () => {
    //
    let form_data = new FormData();
    form_data.append('Name', name);
    form_data.append('NickName', NickName);
    form_data.append('Power', power);
    form_data.append('image', {
      uri: imagedata.path,
      name: 'test.jpeg',
      type: imagedata.mime,
    });

    let url =
      'https://d364-2409-40d4-5-661e-811e-659a-405a-b728.in.ngrok.io/api/products';
    axios
      .post(url, form_data, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      })
      .then(res => {
        console.log(res?.data);
        navigation.navigate('Dashboard');
      })
      .catch(err => console.log('err', err));

    //
  };
  const onPressCamera = () => {
    request(PERMISSIONS.ANDROID.CAMERA)
      .then(async result => {
        if (result == RESULTS.GRANTED || result == RESULTS.LIMITED) {
          const result = await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          });
          console.log(
            'resultresultresultresultresultresultresultresultresultresultresultresult12345678934567890-3467890-',
            result,
          );
          setimagedata(result);
        } else {
          console.log('errorrrrrr');
        }
      })
      .catch(err => {
        console.log('errorrrrrr in catch', err);
      });
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          backgroundColor: '#50C878',
          paddingVertical: 13,
          paddingHorizontal: 13,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 14, color: 'white'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          AVENGERS
        </Text>
        <Text></Text>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          width: '100%',
          height: 'auto',
        }}>
        <TouchableOpacity
          onPress={() => {
            onPressCamera();
          }}
          activeOpacity={0.9}
          style={{
            height: 150,
            width: 150,
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          {!!imagedata ? (
            <Image
              source={{
                uri: imagedata.path,
              }}
              style={{height: 150, width: 150}}
            />
          ) : (
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
              }}
              style={{height: 150, width: 150}}
            />
          )}
        </TouchableOpacity>
        {/* textInput */}
        <View
          style={{
            margin: 30,
            borderRadius: 7,
            borderColor: 'lightblue',
            borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            height: 47,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 2,
          }}>
          <TextInput
            style={{
              width: '80%',
            }}
            placeholderTextColor={'gray'}
            placeholder={'Name'}
            onChangeText={text => {
              setName(text);
            }}
            value = { edit ? dataOLD?.Name : name}
            // value={''}
          />
        </View>
        <View
          style={{
            marginHorizontal: 30,
            borderRadius: 7,
            borderColor: 'lightblue',
            borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            height: 47,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 2,
          }}>
          <TextInput
            style={{
              width: '80%',
            }}
            placeholderTextColor={'gray'}
            placeholder={'NickName'}
            onChangeText={text => {
              setNickName(text);
            }}
            value = { edit ? dataOLD?.NickName : NickName}

          />
        </View>
        <View
          style={{
            margin: 30,
            borderRadius: 7,
            borderColor: 'lightblue',
            borderWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 12,
            height: 47,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 2,
          }}>
          <TextInput
            style={{
              width: '80%',
            }}
            placeholderTextColor={'gray'}
            placeholder={'Power'}
            onChangeText={text => {
              setPower(text);
            }}
            value = { edit ? dataOLD?.Power : power}

          />
        </View>
        {/* textInput */}
        <TouchableOpacity
          onPress={() => {
            SaveData();
          }}
          style={{
            backgroundColor: '#50C878',
            alignItems: 'center',
            alignSelf: 'center',
            width: '50%',
            paddingVertical: 15,
            marginVertical: 20,
            borderRadius: 50,
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
