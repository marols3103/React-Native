import React from "react";
import { View, StyleSheet } from "react-native";
import ToDoItem from "@/components/toDoItem";

const ToDoList = ({ todos, handleEditTodo, handleDeleteTodo }) => {
  return (
    <View style={styles.list}>
      {todos.map((todo) => (
        <ToDoItem
          item={todo}
          key={todo.key}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default ToDoList;
