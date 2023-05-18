import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {  Icon, ListItem } from "@rneui/base";

const SelectComponent = React.memo(({country,setCountry,countrydata})=> {



      // Accordion state
  const [expanded, setExpanded] = React.useState(false);



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
            renderItem={({ item, index }) => (
              <ListItem
                key={item?.index}
                onPress={() => {
                  setCountry(item?.name);
                  setExpanded(false);
                }}
                bottomDivider
              >
                <ListItem.Content>
                  <ListItem.Title>{item?.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </ListItem.Accordion>
  )
})

export default SelectComponent