import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ChatMessages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dmChat}>
        <View style={styles.chatBubble}>
          <Text>Hello Aditya, did you start the assignment?</Text>
        </View>
        <View style={styles.chatBubble}>
          <Text>Long Back!</Text>
        </View>
      </View>

      <View style={styles.dmChat1}>
        <View style={styles.chatBubble1}>
          <Text style={styles.chatText}>
            Hello Aditya, did you start the assignment?
          </Text>
        </View>
        <View style={styles.chatBubble1}>
          <Text style={styles.chatText}>Long Back!</Text>
        </View>
      </View>

      <View style={styles.chatInput}>
        <TextInput style={styles.input} placeholder="Write a message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  dmChat: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
    height: height * 0.15,
  },
  dmChat1: {
    width: "100%",
    padding: 20,
    alignItems: "flex-end",
    height: height * 0.55,
  },
  chatBubble: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  chatBubble1: {
    backgroundColor: "#5E83FB",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  chatText: {
    color: "#fff",
  },
  chatInput: {
    flexDirection: "row",
    alignItems: "center",
    borderTopColor: "#ddd",
    padding: 20,
    width: "100%",
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#5E83FB",
    padding: 10,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
  },
});

export default ChatMessages;
