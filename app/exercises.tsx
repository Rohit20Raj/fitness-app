import { View, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { bodyParts } from '@/static/excercises';
import { router, useLocalSearchParams, useRouter } from 'expo-router';
import ExcerciseList from '@/components/ExcerciseList';
import { ScrollView } from 'react-native-virtualized-view';
import Ionicons from "@expo/vector-icons/Ionicons";
import * as FileSystem from 'expo-file-system';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Exercises = () => {
  const jsonFiles = {
    back: require('@/api/back.json'),
    chest: require('@/api/chest.json'),
    cardio: require('@/api/cardio.json'),
    shoulders: require('@/api/shoulders.json'),
    waist: require('@/api/waist.json'),
    lowerArms: require('@/api/lowerArms.json'),
    upperArms: require('@/api/upperArms.json'),
    lowerLegs: require('@/api/lowerLegs.json'),
    upperLegs: require('@/api/upperLegs.json')
  };

  const route = useRouter();
  const item = useLocalSearchParams();
  const [data, setData] = useState(null);
  const bannerImage = item.image;
  const bodyPart = item.id;

  // console.log(bannerImage);

  const loadJSON = async (muscle) => {
    try {
      const jsonData = jsonFiles[muscle];
      setData(jsonData);
    } catch (error) {
      console.error("Error loading JSON file:", error);
    }
  };
  
  useEffect(() => {
    loadJSON(bodyPart);
  }, [bodyPart])

  return (
    <ScrollView>
      <TouchableOpacity 
        onPress={()=>router.back()}
        style={{
          position: 'absolute',
          zIndex: 100,
          borderRadius: 40,
          padding: 10,
        }}
      >
        <Ionicons name="arrow-back-outline" size={40} color="rgba(244,63,94,1)" />
      </TouchableOpacity>
      <Image
        source={{uri: bannerImage}}
        // resizeMode='cover'
        style={{
          width: windowWidth,
          height: windowHeight/3,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      />
      <View style={{
        marginHorizontal: 10
      }}>
        <Text style={{
          fontSize: 30,
          fontWeight: 800,
          marginVertical: 10,
          color: 'rgb(31,31,31)'
        }}>
          {item.name}
        </Text>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({item, index})=><ExcerciseList item={item} index={index} />}
          columnWrapperStyle={{
            justifyContent: 'space-between'
          }}
        />
      </View>
    </ScrollView>
  )
}

export default Exercises