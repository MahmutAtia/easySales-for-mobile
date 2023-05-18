import { View, Text } from "react-native";
import React from "react";
import { Card, Button, Icon } from "@rneui/base";
import * as Linking from 'expo-linking';
import * as Clipboard from 'expo-clipboard';



const CompanyCard = ({
  item,
  setSelectedCompany,
  setContactHistoryVisable,
  setResultVisable,
}) => {






  return (
    <Card>
      <Card.Title h4>{item?.name}</Card.Title>
      <View className="flex flex-row justify-evenly">
        <Button
          type="clear"
          radius={"lg"}
          title="Contact History"
          onPress={() => {
            setSelectedCompany(item);
            setContactHistoryVisable(true);
          }}
        />

        <Button
          type="clear"
          radius={"lg"}
          title="Add Result"
          onPress={() => {
            setSelectedCompany(item);
            setResultVisable(true);
          }}
        />
      </View>

      <Card.Divider />

      <View className="flex flex-row justify-around">
      {item?.email && item?.email !== "nan" && (
        <Button onPress={
            ()=>{Linking.openURL("mailto:"+item?.email)}
        } size="sm" radius={"sm"} type="solid">
          <Icon name="email" color="white" />
        </Button>
      )}
      {item?.phone && item?.phone !== "nan" && (
        <Button onPress={() => {
            Linking.openURL("tel:"+ item?.phone);
          }} size="sm" radius={"sm"} type="solid">
          <Icon name="call" color="white" />
        </Button>
      )}

{item?.website && item?.website !== "nan" && (
        <Button onPress={()=>{
            Linking.openURL(item?.website);
        }} size="sm" radius={"sm"} type="solid">
          <Icon name="language" color="white" />
        </Button>
      )}
      </View>
    </Card>
  );
};

export default React.memo(CompanyCard);

{
  /* <View className="flex flex-col border p-5 m-3 rounded-3xl space-y-1">
<Text className="text-xl font-bold">{item?.name}</Text>
<View className="flex flex-row">
  <Icon name="call" size={25} />
  <Text className="text-md mb-3">{item?.phone}</Text>
</View>

<View className="flex flex-row justify-evenly">
  <Button
    radius={"lg"}
    title="Contact History"
    onPress={() => {
      setSelectedCompany(item);
      setContactHistoryVisable(true);
    }}
  />

  <Button
    radius={"lg"}
    title="Add Result"
    onPress={() => {
      setSelectedCompany(item);
      setResultVisable(true);
    }}
  />
</View>
</View> */
}
