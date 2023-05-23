import { Text } from 'react-native'
import React from 'react'
import { ListItem } from '@rneui/base';

const Selcet = ({setExpanded,setResult,item}) => {
  return (
    <ListItem
    onPress={() => {
      setResult(item);
      setExpanded(false);
    }}
    bottomDivider
  >
    <ListItem.Content>
    
      <Text  className="text-[#476072] font-bold">{item}</Text>
    </ListItem.Content>
  </ListItem>
  )
}

export default React.memo(Selcet)