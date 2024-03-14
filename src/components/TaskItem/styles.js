import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    taskText: {
      fontSize: 16,
    },
    completedTask: {
      textDecorationLine: 'line-through',
      color: '#ccc',
    },
  });
  