import { View, Text } from 'react-native'
import React from 'react'
import { ListItem } from '@rneui/base';

const Selcet = ({setExpanded,setResult,item,index}) => {
  return (
    <ListItem
    key={index}
    onPress={() => {
      setResult(item);
      setExpanded(false);
    }}
    bottomDivider
  >
    <ListItem.Content>
      <ListItem.Title>{item}</ListItem.Title>
    </ListItem.Content>
  </ListItem>
  )
}

export default React.memo(Selcet)