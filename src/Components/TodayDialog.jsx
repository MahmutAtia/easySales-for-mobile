import { View, Text, FlatList, ActionSheetIOS } from "react-native";
import React from "react";
import { useFetchV2 } from "../hoocs";
import { Card, Dialog, Icon, ListItem, Slider } from "@rneui/base";
import axios from "axios";

import { ActivityIndicator } from "react-native";
import ContactCard from "./ContactCard";

const TodayDialog= ({ today ,visable, setVisable }) => {


  
   

  return (
    <Dialog
      overlayStyle={{ backgroundColor: "white", height: "75%", width: "95%" }}
      isVisible={visable}
      onBackdropPress={() => setVisable(false)}
    >
      {/* Dialog Title */}
      <Dialog.Title title="Contactd Today " />
      { (
        <View className="flex-1  ">
         
          {today.length === 0 && <Text>No Contact Found</Text>}
          <FlatList
            data={today}
            renderItem={({ item, index }) => (
              <ContactCard item={item} index={index}  istoday={true}/>
            )}
          />
          <Dialog.Actions>
            
            <Dialog.Button title="Close " onPress={() => setVisable(false)} />
          </Dialog.Actions>
        </View>
      )}
    </Dialog>
  );
};

export default React.memo(TodayDialog);
