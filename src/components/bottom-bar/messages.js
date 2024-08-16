import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

const messages = [
  {
    id: "1",
    name: "Nazeef",
    message: "How are you doing?",
    avatar: "https://example.com/avatar1.png", // Replace with the actual image URI
  },
  {
    id: "2",
    name: "Simran",
    message: "You replied: Working on the assignment",
    avatar: "https://example.com/avatar2.png",
  },
  {
    id: "3",
    name: "Nandini",
    message: "Lorem Ipsum",
    avatar: "https://example.com/avatar3.png",
  },
  {
    id: "4",
    name: "Jeel",
    message: "Lorem Ipsum",
    avatar: "https://example.com/avatar4.png",
  },
];

const DMs = () => {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>DM's</Text>
        </View>
        <Text style={styles.totalMessages}>Total Messages ({messages.length})</Text>
        <FlatList
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={styles.messageContainer}>
                  <Image source={{ uri: item.avatar }} style={styles.avatar} />
                  <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.message}>{item.message}</Text>
                  </View>
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  totalMessages: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    fontSize: 16,
    color: "#555",
  },
});

export default DMs;
