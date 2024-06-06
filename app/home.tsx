import { View, Text, TouchableOpacity, Image } from "react-native";
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
        style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <View>
          <Text style={{ fontSize: 35, fontWeight: 800, marginTop: 30 }}>
            READY TO
          </Text>
          <Text
            style={{ fontSize: 35, fontWeight: 800, color: "rgba(244,63,94,1)" }}
          >
            WORKOUT
          </Text>
        </View>
        <TouchableOpacity onPress={()=>router.navigate('profile')} style={{
          flexDirection: 'column',
          // borderWidth: 1,
          // height: 100,
          marginTop: 20,
          marginRight: 10,
          overflow: 'hidden',
          // justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image
            source={require('../assets/profileImages/profile_default_avatar.jpg')}
            style={{
              borderRadius: 100,
              height: 80,
              width: 80,
              // transform: [{scale: 1.3}]
            }}
          />
          <Text style={{color: 'rgba(255,140,0,1)', textDecorationLine: 'underline'}}>Edit your profile</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View 
        // entering={FadeInUp.delay(100).springify()}
        style={{
          marginTop: 20
        }}
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
