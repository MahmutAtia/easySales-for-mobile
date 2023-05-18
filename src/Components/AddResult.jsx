import { View, Text, FlatList, Alert } from "react-native";
import React, { useEffect, useMemo } from "react";
import { Dialog, Icon, ListItem, Slider } from "@rneui/base";
import SelectComponent from "./SelectComponent";
import axios from "axios";
import SelectResult from "./SelectResult";

const AddResult = ({ company, visable, setVisable, resultsdata }) => {
  // states
  const [contactType, setContactType] = React.useState("ARAMA");
  const [contactResult, setContactResult] = React.useState("CEVAP YOK");

  // object to send to the server
  const obj = {
    contact_type: contactType,
    date: new Date().toISOString().slice(0, 10),
    contact_result: contactResult,
  };

  // send the object to the server
  const send = () => {
    axios
      .post(company?.contact_url, obj)
      .then((res) =>
        Alert.alert("Success ", "The Contact Result was Added Successfully ")
      )
      .catch((err) => {
        Alert.alert("Error Data Not Submited", "Please try again ");
      });
  };
  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "55%", width: "90%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <Dialog.Title title={company?.name} />

      {/* Dialog Buttons */}

      <Dialog.Actions>
        <Dialog.Button
          title="Submit"
          onPress={() => {
            send();
            setVisable(false);
          }}
        />
        <Dialog.Button title="CANCEL" onPress={() => setVisable(false)} />
      </Dialog.Actions>

      <View className="flex-1 space-y-10 ">
        {/* Country Select */}
        <ListItem.Title>Set Contact Result</ListItem.Title>
        <SelectResult
          result={contactResult}
          setResult={setContactResult}
          resultdata={resultsdata}
        />

        {/* Contact Type checkbox */}
        <ListItem.Title>Set Contact Type</ListItem.Title>

        <ListItem>
          <ListItem.CheckBox
            center
            title="Call"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={contactType === "ARAMA"}
            onPress={() => setContactType("ARAMA")}
          />
          <ListItem.CheckBox
            center
            title="WhatsApp"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={contactType === "WHATSAPP"}
            onPress={() => setContactType("WHATSAPP")}
          />
          <ListItem.CheckBox
            center
            title="Email"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={contactType === "E-POSTA"}
            onPress={() => setContactType("E-POSTA")}
          />
        </ListItem>
      </View>
    </Dialog>
  );
};

export default AddResult;
