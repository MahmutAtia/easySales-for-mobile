import { View, Text, FlatList, ActionSheetIOS } from "react-native";
import React from "react";
import { useFetchV2 } from "../hoocs";
import { Dialog, Icon, ListItem, Slider } from "@rneui/base";
import axios from "axios";

import call from "react-native-phone-call";
import { ActivityIndicator } from "react-native";

const ContactHistory = ({ company, visable, setVisable }) => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);

    axios
      .get(company?.contact_url)
      .then((response) => {
        setData(response.data.results);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [company]);

  // console.log(data[0]?.company);

  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "55%", width: "95%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <Dialog.Title title={"Contact History Of " + company?.name} />
      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <View className="flex-1 space-y-10 ">
          {error && <Text>Error: can't fetch data </Text>}

          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <View className="flex flex-row justify-evenly items-center py-2 my-2 border rounded-3xl ">
                <Icon name="call" size={25} />
                <Text>{item?.typ}</Text>
                <Icon name="calendar" type="evilicon" size={25} />
                <Text>{item?.date}</Text>
                <Icon name="star" size={25} />
                <Text> {item?.result?.substring(0, 10)}</Text>
              </View>
            )}
          />
          <Dialog.Actions>
            <Dialog.Button
              title="Make Call"
              onPress={() => {
                const args = {
                  number: company?.phone, // String value with the number to call
                  prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
                  skipCanOpen: true, // Skip the canOpenURL check
                };

                call(args);
              }}
            />
            <Dialog.Button title="Close " onPress={() => setVisable(false)} />
          </Dialog.Actions>
        </View>
      )}
    </Dialog>
  );
};

export default ContactHistory;
