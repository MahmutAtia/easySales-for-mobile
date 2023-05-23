import { View, Text, FlatList, ActionSheetIOS } from "react-native";
import React from "react";
import { Dialog, Icon } from "@rneui/base";
import axios from "axios";

import call from "react-native-phone-call";
import { ActivityIndicator } from "react-native";
import ContactCard from "./ContactCard";
import { TouchableOpacity } from "react-native";

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

        if (error?.response?.status === 404) {
          setData([]);
          setLoading(false);
        }
      });
  }, [company]);

  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "60%", width: "95%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <TouchableOpacity className="flex flex-row items-start justify-center space-x-1 mt-[4vh]">
        <Icon size={30} color="#19A7CE" name="business" />

        <Dialog.Title
          titleStyle={{ fontStyle: "italic", color: "#146C94", fontSize: 25 }}
          title={" " + company?.name.substring(0, 20)}
        />
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size={50} />
      ) : (
        <View className="flex-1  ">
          {error?.response?.status !== 404 && (
            <Text>{error?.response?.status}</Text>
          )}
          {data.length === 0 && <Text>No Contact History Found</Text>}
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={data}
            renderItem={({ item, index }) => (
              <ContactCard item={item} index={index} />
            )}
            maxToRenderPerBatch={3}
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

export default React.memo(ContactHistory);
