import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { Icon, ListItem } from "@rneui/base";
import SelectComponent from "./SelectComponent";
import Selcet from "./Selcet";
import { ScrollView } from "react-native-gesture-handler";

const SelectResult = ({ result, setResult, resultdata }) => {
  // Accordion state
  const [expanded, setExpanded] = React.useState(false);

  return (
    <ListItem.Accordion
      value={result}
      content={
        <>
          <Icon name="call" size={25} />
          <ListItem.Content>
            <ListItem.Title> {result} </ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <ScrollView className="h-[20vh]">
      {resultdata?.map((item, index) => (
        <Selcet
          key={index}
          item={item.contact_result}
          index={index}
          setResult={setResult}
          setExpanded={setExpanded}
        />
      ))}
      </ScrollView>
    </ListItem.Accordion>
    
  );
};

export default SelectResult;
