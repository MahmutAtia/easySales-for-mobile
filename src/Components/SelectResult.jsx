import { FlatList } from 'react-native'
import React, { useEffect } from 'react'
import {  Icon, ListItem } from "@rneui/base";

const SelectResult = React.memo(({result,setResult,resultdata}) => {



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
          <FlatList
         
            data={resultdata}
            renderItem={({ item, index }) => (
              <ListItem
                key={item?.index}
                onPress={() => {
                  setResult(item?.contact_result);
                  setExpanded(false);
                }}
                bottomDivider
              >
                <ListItem.Content>
                  <ListItem.Title>{item?.contact_result}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </ListItem.Accordion>
  )
})

export default SelectResult