import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView, Text, View } from 'react-native';

import Companies from './src/screens/Companies';
import ServerLinKScreen from './src/screens/ServerLinKScreen';
import { useState } from 'react';

export default function App() {

  const [server, setServer] = useState(null);
  return (
    <SafeAreaView className="flex-1 " >
      {!server ? <ServerLinKScreen setServer={setServer}/> :<Companies server={server} setServer={setServer}/> }  
      <StatusBar style="light" />
   
      
    </SafeAreaView>
  );
}

