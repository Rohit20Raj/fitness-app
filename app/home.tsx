import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ImageSlider from "@/components/ImageSlider";
import BodyParts from "@/components/BodyParts";
import { ScrollView } from "react-native-virtualized-view";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
} from "react-native-reanimated";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <StatusBar hidden />
      {/* <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="chevron-back-circle-outline" size={40} color="red" />
      </TouchableOpacity> */}
      <Animated.View
        entering={FadeInLeft.delay(100).springify()}
        style={{ marginLeft: 10 }}
      >
        <Text style={{ fontSize: 40, fontWeight: 800, marginTop: 0 }}>
          READY TO
        </Text>
        <Text
          style={{ fontSize: 40, fontWeight: 800, color: "rgba(244,63,94,1)" }}
        >
          WORKOUT
        </Text>
      </Animated.View>
      <Animated.View 
        // entering={FadeInUp.delay(100).springify()}
      >
        <ImageSlider />
      </Animated.View>
      <View>
        <BodyParts />
      </View>
    </ScrollView>
  );
};

export default Home;
