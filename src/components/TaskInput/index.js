import React, { useState } from 'react';
import {  View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles"

const TaskInput = ({ onSubmit }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === '') return;
    onSubmit(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={task}
        onChangeText={text => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TaskInput
