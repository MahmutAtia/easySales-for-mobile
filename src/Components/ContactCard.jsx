import { View, Text } from 'react-native'
import React from 'react'
import { Card,Icon } from '@rneui/base'

const ContactCard = ({item}) => {
  return (
    <Card>
                <Card.Title>
                  <View className="flex flex-row items-center justify-center">
                    <Icon name="calendar-alt"  type="font-awesome-5" size={20} color="gray" />
                  <Text className="font-bold text-lg text-gray-600">  Date :{item?.date}</Text> 
                  </View>
                </Card.Title>
                <Card.Divider />
                <View className="flex flex-row justify-between items-center">
                <Icon name="call" size={25} color="gray"/>
                <Text>{item?.typ}</Text>
                <Icon name="star" size={25} color="gray"/>
                <Text> {item?.result?.substring(0, 10)}</Text>
                </View>
              </Card>
  )
}

export default React.memo(ContactCard)