import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { useFetch } from '../hoocs'
import { ActivityIndicator } from 'react-native';

const Home = () => {

  const {data, error, loading }= useFetch("");
  console.log(loading)
  console.log(data?.slice(0,10))


   return (
    <View className="flex-1 ">
      
        <Text>hi</Text>
    </View>
  )
}
export default Home