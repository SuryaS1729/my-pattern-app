import React from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { IconButton, Button } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="light" />

      {/* App Header */}
      <View style={styles.header}>
        <IconButton icon="menu" iconColor="white" size={28} onPress={() => {}} />
        <Text style={styles.headerText}>ChatGPT</Text>
        <IconButton icon="account-circle-outline" iconColor="white" size={28} onPress={() => {}} />
      </View>

      {/* Main Section */}
      <View style={styles.main}>
        <Text style={styles.title}>What can I help with?</Text>
        <View style={styles.buttonRow}>
          <Button mode="outlined" icon="image" textColor="white" style={styles.button}>
            Create image
          </Button>
          <Button mode="outlined" icon="eye" textColor="white" style={styles.button}>
            Analyze images
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button mode="outlined" icon="file-document" textColor="white" style={styles.button}>
            Summarize text
          </Button>
          <Button mode="outlined" textColor="white" style={styles.button}>
            More
          </Button>
        </View>
      </View>

      {/* Input Bar with Extra Icons */}
      <View style={styles.inputContainer}>
      <View style={styles.inputRow}>
          <TextInput
            placeholder="Message ChatGPT"
            placeholderTextColor="white"
            style={styles.input}
          />
     
        </View>
        <View style={styles.iconRow}>
          <View style={styles.leftedView}>
          <IconButton icon="plus" iconColor="white" size={24} />
          <IconButton icon="earth" iconColor="white" size={24} />
          <IconButton icon="bullhorn" iconColor="white" size={24} />
          </View>
          <View style={styles.rightedView}>
          <IconButton icon="microphone" iconColor="white" size={24} />
          <IconButton icon="send" iconColor="white" size={24} />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 5,
  },
  button: {
    marginHorizontal: 5,
    borderColor: "#444",
    borderWidth: 1,
  },
  inputContainer: {
    padding: 5,
   
    borderTopColor: "#222",
    backgroundColor: "grey",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-between",
     marginBottom:10// Space between icons and input
    
  },
 leftedView: {
    flexDirection: "row",
   
   // Space between icons and input
    
  },
  rightedView: {
    flexDirection: "row",
    justifyContent:"flex-start",
     // Space between icons and input
    
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  input: {
    flex: 1,
    color: "#061826",
    fontSize:20
  },
});