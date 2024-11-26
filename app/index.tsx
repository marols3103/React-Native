import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import ToDoList from "@/components/toDoList";

export default function Index() {
  const [todos, setTodos] = useState([
    { text: "Apprendre le React Native", key: "1" },
    { text: "Construire ma première application  React Native", key: "2" },
  ]);
  const [newToDoText, setNewToDoText] = useState("");
  const [nextKey, setNextKey] = useState(3);

  const [editingText, setEditingText] = useState("");
  const [editingToDo, setEditingToDo] = useState(null);

  // Ajouter une tâche
  const handleAddTodo = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text: newToDoText, key: String(nextKey) },
    ]);
    setNewToDoText("");
    setNextKey(nextKey + 1);
  };

  // Supprimer une tâche
  const handleDeleteTodo = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  // Commencer l'édition d'une tâche
  const handleEditTodo = (key) => {
    const todoToEdit = todos.find((todo) => todo.key === key);
    if (todoToEdit) {
      setEditingText(todoToEdit.text);
      setEditingToDo(todoToEdit);
    }
  };

  // Enregistrer les modifications
  const handleSaveEdit = () => {
    if (editingToDo) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.key === editingToDo.key
            ? { ...todo, text: editingText }
            : todo
        )
      );
      setEditingToDo(null);
      setEditingText("");
    }
  };

  // Annuler l'édition
  const handleCancelEdit = () => {
    setEditingToDo(null);
    setEditingText("");
  };

  // Affichage
  return (
    <View style={styles.main}>
      <Text>Listes des tâches:</Text>
      <ToDoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />

      {editingToDo ? (
        <View>
          <TextInput
            style={styles.inputMargin}
            value={editingText}
            onChangeText={setEditingText}
            placeholder="Modifier la tâche"
          />
          <Button title="Enregistrer" onPress={handleSaveEdit} />
          <Button title="Annuler" onPress={handleCancelEdit} />
        </View>
      ) : (
        <View>
          <TextInput
            style={styles.inputMargin}
            value={newToDoText}
            onChangeText={setNewToDoText}
            placeholder="Entrer une nouvelle tâche"
          />
          <Button title="Ajouter" onPress={handleAddTodo} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputMargin: {
    marginBottom: 4,
  },
});
