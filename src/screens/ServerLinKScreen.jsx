import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const ServerLinKScreen = ({setServer}) => {
    const [text, setText] = React.useState("")
  return (
    <View className="flex-1 items-stretch justify-center space-y-5 p-5">
      <Text className="text-center text-2xl ">ServerLinKScreen</Text>
      <TextInput className="p-3 border rounded-2xl text-lg text-center" value={text} onChangeText={(text)=>setText(text)}/>
      <View className=" justify-center items-center  rounded-full h-[10vh]">
      <Button title="Set Server" onPress={()=>setServer(text)}/>
      </View>
    </View>
  )
}

export default ServerLinKScreen