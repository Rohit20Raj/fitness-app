import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { useRouter } from 'expo-router';
import RBSheet from 'react-native-raw-bottom-sheet';
import ExerciseDetails from './ExerciseDetails';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ExcerciseList = ({item, index}) => {
  const refRBSheet = useRef();
  return (
    <TouchableOpacity 
      onPress={()=>refRBSheet.current.open()}
      style={{
      // borderRadius: 20,
      width: windowWidth/2-20,
      // borderWidth: 1,
      overflow: 'hidden',
      marginBottom: 20,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <View
        style={{
          borderRadius: 20,
          overflow: 'hidden',
        }}
      >
        <Image
          source={{uri: item.gifUrl}}
          style={{
            height: windowWidth/2-20,
            width: windowWidth/2-20,
          }}
        />
      </View>
      <Text
        numberOfLines={1}
        style={{
          // borderWidth: 1,
          // width: windowWidth/2-30,
        }}
      >
        {item.name}
      </Text>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'black',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            height: windowHeight,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
          }
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <ExerciseDetails item={item} refRBSheet={refRBSheet}/>
      </RBSheet>
    </TouchableOpacity>
  )
}

export default ExcerciseList