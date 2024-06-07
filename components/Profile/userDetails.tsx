import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const options = ["Male", "Female"];

const UserDetails = () => {
  const router = useRouter();

  const [gender, setGender] = useState("default");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const saveUserInfo = () => {
    // console.log("User info saved!");
    const storeData = async () => {
      try {
        const jsonData = {
          gender: gender,
          name: name,
          email: email,
        };
        // console.log(JSON.stringify(jsonData, null, 2));
        const value = JSON.stringify(jsonData);
        await AsyncStorage.setItem("userInfo", value);
      } catch (e) {
        console.log("Unable to store data locally: ", e);
      }
    };

    storeData();

    router.back();
  };

  const userGender = (gender) => {
    setGender(gender);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        // await AsyncStorage.clear();
        const value = await AsyncStorage.getItem("userInfo");
        const jsonData = JSON.parse(value);
        if (value !== null) {
          // console.log(JSON.stringify(value,null,2));
          // value previously stored
          setGender(jsonData.gender);
          setName(jsonData.name);
          setEmail(jsonData.email);
        }
      } catch (e) {
        // error reading value
        console.log("Error fetching data: ", e);
      }
    };
    getData();
  }, []);

  let profileImgAddress = require(`../../assets/profileImages/profile_default_avatar.jpg`);
  if (gender === "Male") {
    profileImgAddress = require(`../../assets/profileImages/profile_male_avatar.jpg`);
  }
  if (gender === "Female") {
    profileImgAddress = require(`../../assets/profileImages/profile_female_avatar.jpg`);
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          position: "absolute",
          zIndex: 100,
          borderRadius: 40,
          padding: 10,
          top: 0,
          left: 0,
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={40}
          color="rgba(244,63,94,1)"
        />
      </TouchableOpacity>
      <View style={styles.imgWrapper}>
        <Image source={profileImgAddress} style={styles.profileImg} />
        <Image source={require('../../assets/utilityImgs/Ellipse_2.png')} style={{...styles.profileImg, position: 'absolute', transform: [{scale: 1.05}]}} />
      </View>
      <View style={styles.userInfo}>
        <View style={styles.genderWrapper}>
          <Text style={styles.genderButtonText}>Your gender: </Text>
          <View style={styles.radioButtonGroupContainer}>
            {options.map((option, index, key) => {
              return (
                <TouchableOpacity
                  onPress={() => userGender(option)}
                  style={styles.optionContainer}
                >
                  <View style={styles.radioButtonWrapper}>
                    {gender === option && (
                      <View style={styles.radioButton}></View>
                    )}
                  </View>
                  <Text style={styles.genderButtonText}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameLabel}>Your Name: </Text>
          <View>
            <TextInput
              style={styles.nameTextBoxInput}
              onChangeText={setName}
              value={name}
              // placeholder="useless placeholder"
              // keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameLabel}>Email: </Text>
          <View>
            <TextInput
              style={styles.nameTextBoxInput}
              onChangeText={setEmail}
              value={email}
              placeholder="example@email.com"
              keyboardType="email-address"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={saveUserInfo}
          title="Save"
          color="orange"
          accessibilityLabel="Save your information"
        />
      </View>
    </ScrollView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  imgWrapper: {
    height: 200,
    width: 200,
    // borderWidth: 3,
    // borderColor: "orange",
    borderRadius: 200,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 50
  },
  profileImg: {
    height: 200,
    width: 200,
  },
  userInfo: {
    marginVertical: 50,
    marginHorizontal: 20,
    height: 100,
    // borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  genderButtonText: {
    fontSize: 20,
    fontWeight: "800",
  },
  genderWrapper: {
    flexDirection: "row",
  },
  radioButtonGroupContainer: {
    flexDirection: "row",
    // borderWidth: 1,
    flex: 1,
    justifyContent: "space-evenly",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth: 1
  },
  radioButtonWrapper: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 3,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  radioButton: {
    height: 10,
    width: 10,
    borderRadius: 20,
    backgroundColor: "orange",
  },
  userNameContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 40,
  },
  userNameLabel: {
    fontSize: 20,
    fontWeight: "800",
  },
  nameTextBoxInput: {
    height: 40,
    borderBottomWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: "row",
    // flex: 1,
    minWidth: 150,
    fontSize: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    width: 200,
    alignSelf: "center",
    marginTop: 100,
    // borderRadius: 80,
    overflow: "hidden",
    // borderWidth: 1,
    borderRadius: 8,
  },
});
