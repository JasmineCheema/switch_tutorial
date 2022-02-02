import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import S1 from "./screens/s1";
import S2 from "./screens/s2";
export default function App() {
  return (
    <View style={styles.container}>
      
<AppCon/>
     
    </View>
  );
}
const SN=createSwitchNavigator(
  {
    s1:S1,
    s2:S2
  }
)
const AppCon=createAppContainer(SN)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
