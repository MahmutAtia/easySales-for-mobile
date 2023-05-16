import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Home from "./src/screens/home"
import Companies from './src/screens/Companies';

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 " >
      <Companies/>      
      <StatusBar style="auto" />
   
      
    </SafeAreaView>
  );
}

