import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  useWindowDimensions,
  Linking,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const Detail = props => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
 

 
  return (
    <>
      <View style={Styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 14, color: 'white'}}>Back</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 16, color: 'white'}}>Restaurant Detail</Text>
        <Text></Text>
      </View>
      <ScrollView style={{flex: 1}}>
      
       
        <View>
          <View style={Styles.imageCounter}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
             5
            </Text>
          </View>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.headingText}>titile</Text>
          <Text style={Styles.addressText}>address</Text>
          <View style={Styles.details}>
            <View style={Styles.detailBox}>
              <Ionicons name="time-outline" color={'#FDDA0D'} size={25} />
              <Text style={Styles.detailTitle}>10AM - 11AM</Text>
            </View>
            <View style={Styles.detailBox}>
              <EvilIcons name="location" color={'#FDDA0D'} size={25} />
              <Text style={Styles.detailTitle}>4.25KM</Text>
            </View>
            <View style={Styles.detailBox}>
              <EvilIcons name="location" color={'#C70039'} size={25} />
              <Text style={Styles.detailTitle}>DELIVERY</Text>
            </View>
          </View>
          <Text style={Styles.decriptionText}>description</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={Styles.btnBox}>
        <Text style={Styles.btnText}>Call</Text>
      </TouchableOpacity>
    </>
  );
};
export default Detail;

const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#50C878',
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  imageCounter: {
    backgroundColor: '#50C878',
    alignSelf: 'center',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 15,
    borderTopLeftRadius: 15,
    position: 'absolute',
    right: 15,
    top: -25,
  },
  detailsContainer: {
    paddingVertical: 30,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '800',
    paddingHorizontal: 15,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  detailTitle: {
    fontSize: 13,
    fontWeight: '500',
    paddingVertical: 7,
  },
  detailBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  decriptionText: {
    fontSize: 16,
    fontWeight: '400',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  btnBox: {
    backgroundColor: '#50C878',
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
