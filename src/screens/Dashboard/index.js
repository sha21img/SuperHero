import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation,useIsFocused} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const focus = useIsFocused()
  const [data, setData] = React.useState([]);

  useEffect(() => {
    getHeroes();
  }, [focus]);

  const getHeroes = async () => {
    await axios
      .get(
        'https://d364-2409-40d4-5-661e-811e-659a-405a-b728.in.ngrok.io/api/products',
      )
      .then(res => {
        console.log('res.dataaa', res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log('errorrrr', error);
      });
  };

  const DeleteRecord = async (id) =>{
    await axios
    .delete(
      `https://d364-2409-40d4-5-661e-811e-659a-405a-b728.in.ngrok.io/api/products/${id}`,
    )
    .then(res => {
      console.log('res.dataaa', res.data);
      getHeroes()
    })
    .catch(error => {
      console.log('errorrrr', error);
    });
  }
  return (
    <>
      <View style={styles.header}>
        <Text></Text>
        <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
          AVENGERS
        </Text>
        <Text></Text>
      </View>

      <ScrollView style={styles.container}>
        {data?.map(el => {
          const mBuffer = (global.Buffer =
            global.Buffer || require('buffer').Buffer);
          const parse = mBuffer
            .from(el.image.data.data, 'binary')
            .toString('base64');
          return (
            <TouchableOpacity style={styles.item__container}>
              <View>
                <Image
                  source={{
                    uri: `data:image/png;base64,${parse}`,
                  }}
                  style={styles.dishImg}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between' ,width:'67%',alignItems:'center'}}>
                <View>
                <Text style={styles.resName}>{el.Name}</Text>
                <Text style={styles.resName}>{el.NickName}</Text>

                <Text style={styles.resName}>{el.Power}</Text>

                </View>
                <View>
                <TouchableOpacity style={styles.map__img}
                onPress={()=>{
                  navigation.navigate('AddHero',{
                    edit:true,
                    dataOLD:el
                  });
                }}
                >
                  <FontAwesome name="edit" size={26} color="red" />
                  
                </TouchableOpacity>
                <TouchableOpacity style={styles.map__img} 
                onPress={()=>{
                  DeleteRecord(el._id)
                }}
                >
                  <MaterialCommunityIcons name="delete" size={26} color="red" />
                  
                </TouchableOpacity>
                </View>
             
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddHero',{
            edit:false
          });
        }}
        style={{
          backgroundColor: '#50C878',
          borderRadius: 50,
          position: 'absolute',
          width: 70,
          height: 70,
          alignItems: 'center',
          justifyContent: 'center',
          bottom: 15,
          right: 12,
        }}>
        <FontAwesome name="plus" size={20} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#50C878',
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  container: {flex: 1, backgroundColor: 'white', paddingVertical: 20},
  item__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    marginHorizontal: 15,
  },
  img_resName__container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dishImg: {
    height: 100,
    width: 100,
    borderRadius: 7,
    marginRight: 20,
  },
  resName: {
    color: 'black',
  },
  map__img: {
    backgroundColor: '#50C878',
    width: 43,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingBottom:5,
    marginBottom:5
  },
});
