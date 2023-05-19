import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo } from "react";
import { Dialog, Icon, ListItem, Slider } from "@rneui/base";
import SelectComponent from "./SelectComponent";
import axios from "axios";
import SelectResult from "./SelectResult";

const AddResult = ({
  company,
  visable,
  setVisable,
  resultsdata,
  addToToday,
}) => {
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
      .then((res) => {
        Alert.alert("Success ", "The Contact Result was Added Successfully ");

        // add to todays contacted companies
        addToToday({
          company: company.name,
          typ: contactType,
          result: contactResult,
        });
      })
      .catch((err) => {
        Alert.alert("Error Data Not Submited", "Please try again ");
      });
  };
  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "70%", width: "95%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      {/* <Dialog.Title   /> */}

      <TouchableOpacity
        className="flex flex-row items-start justify-center space-x-1 mt-[4vh]"
      >
        <Icon size={30} color="#19A7CE" name="business" />

        <Dialog.Title titleStyle={{fontStyle:"italic", color:"#146C94", fontSize:25}}title={ " "+company?.name}/>
      </TouchableOpacity>


    

      <View className="flex-1 justify-between my-[5vh] ">


         {/* Country Select */}

         <View>
          <Text className="text-lg font-bold text-[#548CA8]">Set Contact Result</Text>
        <SelectResult
          result={contactResult}
          setResult={setContactResult}
          resultdata={resultsdata}
        />
        </View>

       {/* Contact Type checkbox */}
       <View>
       <Text className="text-lg font-bold text-[#548CA8]">Set Contact Type</Text>
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

         

       

      </View>
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
    </Dialog>
  );
};

export default AddResult;
