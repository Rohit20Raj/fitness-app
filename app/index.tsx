import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeIn, FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Index() {
  const router = useRouter();

  return (
    <View>
      <StatusBar hidden />
      <Image
        source={{uri: 'https://res.cloudinary.com/dioktys56/image/upload/v1717413780/fitness-app/Welcome_Page.jpg'}}
        style={{
          height: windowHeight,
          width: windowWidth,
        }}
        resizeMode="cover"
      />
      <LinearGradient
        colors={["transparent", "black"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        style={{
          height: windowHeight / 3,
          width: windowWidth,
          position: "absolute",
          zIndex: 10,
          bottom: 0,
        }}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 30,
          bottom: 0,
          alignSelf: "center",
        }}
      >
        <Animated.View 
          style={{ alignItems: "center" }}
          entering={FadeInDown.delay(100).springify()}
        >
          <Text style={{ color: "white", fontSize: 40, fontWeight: 700 }}>
            Best <Text style={{ color: "rgba(244,63,94,1)" }}>Workouts</Text>
          </Text>
          <Text style={{ color: "white", fontSize: 40, fontWeight: 700 }}>
            For You
          </Text>
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
        >
          <TouchableOpacity
            onPress={() => router.replace('home')}
            style={{
              display: "flex",
              backgroundColor: "rgba(244,63,94,1)",
              borderRadius: 40,
              borderWidth: 2,
              borderColor: "white",
              marginVertical: 40,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 30,
                fontWeight: 400,
                marginVertical: 6,
                marginHorizontal: 60,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
}
