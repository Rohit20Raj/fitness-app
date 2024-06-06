import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const options = ['Male', 'Female'];

const UserDetails = () => {
  const [gender, setGender] = useState('default');

  const userGender = (gender) => {
    setGender(gender);
  }

  useEffect(() => {
    const storeData = async (value) => {
      try {
        await AsyncStorage.setItem('gender', value);
      } catch(e){
        console.log("Unable to store data locally: ", e);
      }
    }
    if(gender!=='default'){
      storeData(gender);
    }

    const getData = async () => {
      try {
        // await AsyncStorage.clear();
        const value = await AsyncStorage.getItem('gender');
        if (value !== null) {
          // value previously stored
          setGender(value);
          // console.log("Gender: ", gender);
        }
      } catch (e) {
        // error reading value
        console.log("Error fetching data: ", e);
      }
    };
    getData()
  }, [gender])

  let profileImgAddress = require(`../../assets/profileImages/profile_default_avatar.jpg`)
  if(gender === 'Male'){
    profileImgAddress = require(`../../assets/profileImages/profile_male_avatar.jpg`)
  }
  if(gender === 'Female'){
    profileImgAddress = require(`../../assets/profileImages/profile_female_avatar.jpg`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image
          source={profileImgAddress}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.userInfo}>
        <View style={styles.genderWrapper}>
          <Text style={styles.genderButtonText}>Your gender: </Text>
          <View style={styles.radioButtonGroupContainer}>
            {options.map((option, index, key)=>{
              return (
                <TouchableOpacity onPress={()=>userGender(option)} style={styles.optionContainer}>
                  <View style={styles.radioButtonWrapper}>
                    {gender === option &&
                    <View style={styles.radioButton}>
                    </View>}
                  </View>
                  <Text style={styles.genderButtonText}>{option}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
      </View>
    </View>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50
  },
  imgWrapper: {
    height: 200,
    width: 200,
    borderWidth: 3,
    borderColor: 'orange', 
    borderRadius: 200,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  profileImg: {
    height: 200,
    width: 200
  },
  userInfo: {
    marginVertical: 50,
    marginHorizontal: 20,
    height: 100,
    // borderWidth: 1
  },
  genderButtonText: {
    fontSize: 20,
    fontWeight: '800'
  },
  genderWrapper: {
    flexDirection: 'row',
  },
  radioButtonGroupContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1
  },
  radioButtonWrapper: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 3,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioButton: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: 'orange'
  }
})