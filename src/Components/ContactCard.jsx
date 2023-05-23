import { View, Text } from "react-native";
import React from "react";
import { Card, Icon } from "@rneui/base";

const ContactCard = ({ item , istoday,index}) => {
  return (
    <Card key={index} containerStyle={{ borderRadius: 35 }}>
      <Card.Title>
        <View className="flex flex-row items-center justify-center">
          <Icon
            name={!istoday ? "calendar-alt" : "building"}
            type="font-awesome-5"
            size={20}
            color="#19A7CE"
          />

          <Text   className="font-bold text-lg text-[#548CA8]">
            { !istoday ? " Date : " + item?.date : " " + item?.company.substring(0, 20)}
          </Text>
        </View>
      </Card.Title>
      <Card.Divider />
      <View className="flex flex-row justify-between items-center">
        <Icon name="call" ou size={25} color="#FDB827" />
        <Text className="text-[#2185D5] font-bold italic">{item?.typ}</Text>
        <Icon  name="star" size={25} color="#FDB827" />
        <Text className="text-[#2185D5] font-bold italic"> {item?.result?.substring(0, 15)}</Text>
      </View>
    </Card>
  );
};

export default React.memo(ContactCard);
