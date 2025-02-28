import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { GestureHandlerRootView, TextInput } from "react-native-gesture-handler";
import { Svg, Rect, Pattern, Defs, Circle, Line, LinearGradient, Stop } from "react-native-svg";

export default function App() {
  return (
    <View style={styles.container}>
     <StatusBar translucent backgroundColor="transparent" style="dark" />
     
      <Text style={styles.text}>Hello, Smarati here!</Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#ffd25a"
  },
  absoluteFill: {
    position: "absolute",
  },
  text: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#333",
    textAlign:"left"
   
  },
});