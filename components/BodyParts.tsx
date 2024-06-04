import { View, Text, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import {bodyParts} from '@/static/excercises'
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const windowWidth = Dimensions.get("window").width;

const BodyParts = () => {
  // console.log(bodyParts);
  const router = useRouter();
  return (
    <View>
      <Text style={{
        marginHorizontal: 15,
        marginVertical: 20,
        fontWeight: 700,
        fontSize: 25
      }}>
        Excercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'center'
        }}
        renderItem={({item, index}) => (
          <ExcerciseCard 
            item={item}
            router={router}
            index={index}
          />
        )}
      />
    </View>
  )
}

const ExcerciseCard = ({item, router, index}) => {
  // console.log(JSON.stringify(item,null,2));
  const bodyPart = item.name;
  const imgUri = item.image;

  const imgWidth = windowWidth/2-20;

  const handleNavigation = () => {
    // console.log(id);
    router.push({pathname: 'exercises', params: item})
  }

  return (
    <TouchableOpacity 
      onPress={handleNavigation}
      activeOpacity={1}
      style={{
      position: 'relative',
      margin: 5,
      borderRadius: 20,
      // borderWidth: 1,
      overflow: 'hidden'
    }}>
      <Animated.View
        entering={FadeInUp.delay(125*((index+1)/2)).springify()}
      >
        <Image
          source={{uri: imgUri}}
          resizeMode='cover'
          style={{
            width: imgWidth,
            height: imgWidth,
          }}
        />
        <LinearGradient
          colors={["transparent", "rgba(33,33,33,0.7)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
          style={{
            height: '35%',
            width: '100%',
            position: 'absolute',
            bottom: 0
          }}
        >
          <Text style={{
            alignSelf: 'center',
            color: 'white',
            position: 'absolute',
            bottom: 10,
            fontWeight: 700
          }}>
            {bodyPart}
          </Text>
        </LinearGradient>
      </Animated.View>
    </TouchableOpacity>
  )
}

export default BodyParts