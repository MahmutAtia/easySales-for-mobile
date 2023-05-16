import { View, Text, FlatList, Button } from "react-native";
import call from "react-native-phone-call";

import React from "react";
import { useFetch } from "../hoocs";

const Companies = () => {
  const { data, error, loading } = useFetch("");
  console.log(loading);
  console.log(data?.slice(0, 10));
  return !data ? (
    <Text>loading ---- </Text>
  ) : (
    <View>
      <Text>Companies</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="flex flex-col border p-5 m-3 rounded-3xl space-y-1">
            <Text>{item?.name}</Text>
            <Text className="mb-3">{item?.phone}</Text>
            <Button
              title="Call"
              onPress={() => {
                const args = {
                  number: item?.phone, // String value with the number to call
                  prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
                  skipCanOpen: true, // Skip the canOpenURL check
                };

                call(args);
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Companies;
