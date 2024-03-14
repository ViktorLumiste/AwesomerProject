import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles"

const TaskItem = ({ task, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={[styles.taskText, task.completed && styles.completedTask]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
}

export default TaskItem