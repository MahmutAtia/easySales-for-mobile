import { ScrollView } from "react-native";
import React from "react";
import { Icon, ListItem } from "@rneui/base";
import Selcet from "./Selcet";


const SelectResult = ({ result, setResult, resultdata }) => {
  // Accordion state
  const [expanded, setExpanded] = React.useState(false);


  return (
    <ListItem.Accordion
      value={result}
      content={
        <>
          <Icon color="#FDB827" name="call" size={25} />
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
