import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

const ExerciseDetails = ({ item, refRBSheet }) => {
  // console.log(JSON.stringify(item,null,2))
  // const secondaryMuscles = item.secondaryMuscles;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity 
        onPress={()=>refRBSheet.current.close()}
        style={{
          position: 'absolute',
          zIndex: 100,
          borderRadius: 40,
          padding: 10,
        }}
      >
        <Ionicons name="arrow-back-outline" size={40} color="rgba(244,63,94,1)" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.gifUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.details}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.name}</Text>
        </View>

        <View style={{borderWidth: 1, borderColor: 'rgba(33,33,33,0.1)', marginBottom: 10}}/>

        <View style={styles.info}>
          <Text style={styles.key}>Equipment: </Text>
          <Text style={styles.value}>{item.equipment}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Secondary Muscles: </Text>
          <View style={styles.secondaryMusclesValueWrapper}>
            {item.secondaryMuscles.map((item, index, key) => {
              return <Text style={styles.value}>{item} </Text>;
            })}
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.key}>Target: </Text>
          <Text style={styles.value}>{item.target}</Text>
        </View>

        <View style={{borderWidth: 1, borderColor: 'rgba(33,33,33,0.1)', marginTop: 15}}/>

        <View style={styles.title}>
          <Text style={styles.titleText}>Instructions</Text>
          {item.instructions.map((item, index, key) => {
            return (
              <View style={styles.instructionContainer}>
                <Text style={styles.instructionIndex}>
                  {index + 1}
                  {". "}
                </Text>
                <Text style={styles.instruction}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
  },
  image: {
    height: windowWidth,
    width: windowWidth,
  },
  details: {
    marginHorizontal: 10,
    paddingRight: 5,
  },
  title: {
    marginVertical: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "800",
  },
  info: {
    marginVertical: 3,
    flexDirection: "row",
  },
  key: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  secondaryMusclesValueWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    // justifyContent: 'center'
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
    backgroundColor: "#3477eb",
    borderRadius: 20,
    paddingHorizontal: 6,
    paddingBottom: 4,
    textAlign: "center",
    marginHorizontal: 1,
    color: "white",
    marginTop: 1
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  instructionIndex: {
    fontSize: 16,
  },
  instruction: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default ExerciseDetails;
