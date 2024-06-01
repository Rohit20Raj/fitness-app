import { View, Text, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import sliderImages from '../static/sliderImages'

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ImageSlider = () => {

  return (
    <FlatList
      horizontal
      data={sliderImages}
      renderItem={({item}) => <ItemCard imgUri={item} />}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate={"fast"} 
      snapToInterval={windowWidth}
    />
  )
}

const ItemCard = ({imgUri}) => {
  return (
    <Image
      source={imgUri}
      style={{
        width: windowWidth-20,
        height: 200,
        margin: 10,
        borderRadius: 25
      }}
    />
  )
}

export default ImageSlider