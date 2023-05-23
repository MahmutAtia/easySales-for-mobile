import { FlatList } from "react-native";
import React, { useEffect } from "react";
import { Icon, ListItem } from "@rneui/base";
import Selcet from "./Selcet";

const SelectComponent = ({ country, setCountry, countrydata ,expanded, setExpanded}) => {
  // Accordion state

  return (
    <ListItem.Accordion
      value={country}
      content={
        <>
          <Icon name="place" size={30} />
          <ListItem.Content>
            <ListItem.Title> {country} </ListItem.Title>
          </ListItem.Content>
        </>
      }
      isExpanded={expanded}
      onPress={() => {
        setExpanded(!expanded);
      }}
    >
      <FlatList
        data={[{ name: "all" }, ...countrydata]}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item, index }) => (
          <Selcet
            item={item.name}
            index={index}
            setResult={setCountry}
            setExpanded={setExpanded}
    
          />
        )}
      />
    </ListItem.Accordion>
  );
};

export default React.memo(SelectComponent);
