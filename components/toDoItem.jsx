import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ToDoItem = ({ item, handleEditTodo, handleDeleteTodo }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleEditTodo(item.key)}
        >
          <Text style={styles.editButtonText}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteTodo(item.key)}
        >
          <Text style={styles.deleteButtonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  editButton: {
    backgroundColor: "#007BFF",
    padding: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FF4D4D",
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default ToDoItem;
