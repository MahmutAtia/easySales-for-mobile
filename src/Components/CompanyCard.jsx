import { View, Text } from "react-native";
import React from "react";
import { Card, Button, Icon, Badge } from "@rneui/base";
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
import { TouchableOpacity } from "react-native";

const CompanyCard = ({
  item,
  setSelectedCompany,
  setContactHistoryVisable,
  setResultVisable,
  index,
}) => {
  const copyToClipboard = async (companyName) => {
    await Clipboard.setStringAsync(companyName);
  };

  return (
    <Card key={index} containerStyle={{ borderRadius: 35 }}>
      {/* Badge important or not intersted */}

      <Badge
        containerStyle={{
          padding: 4,
          position: "absolute",
          top: 2,
          right:0,
        }}
        status={
          item.status === true
            ? "success"
            : item.status === false
            ? "error"
            : null
        }
        value={
          item.status === true
            ? "IMPORTANT"
            : item.status === false
            ? "NOT INTERSTED"
            : null
        }
      />

      <TouchableOpacity
        className="flex flex-row items-start justify-center space-x-1 mt-[4vh]"
        onPress={() => copyToClipboard(item.name)}
      >
        <Icon size={30} color="#19A7CE" name="business" />

        <Card.Title h4 h4Style={{color:"#146C94"}}>{item?.name}</Card.Title>
      </TouchableOpacity>
      <View className="flex flex-row justify-evenly mt-[3vh]">
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

      <View className="flex flex-row justify-around m-[2vh]">
        {item?.email && item?.email !== "nan" && (
          <Button
            onPress={() => {
              Linking.openURL("mailto:" + item?.email);
            }}
            size="sm"
            radius={"sm"}
            type="solid"
          >
            <Icon name="email" color="white" />
          </Button>
        )}
        {item?.phone && item?.phone !== "nan" && (
          <Button
            onPress={() => {
              Linking.openURL("tel:" + item?.phone);
            }}
            size="sm"
            radius={"sm"}
            type="solid"
          >
            <Icon name="call" color="white" />
          </Button>
        )}

        {item?.website && item?.website !== "nan" && (
          <Button
            onPress={() => {
              Linking.openURL(item?.website);
            }}
            size="sm"
            radius={"sm"}
            type="solid"
          >
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
