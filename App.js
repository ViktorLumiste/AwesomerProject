// src/App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskInput from './src/components/TaskInput';
import TaskList from './src/components/TaskList';
import ClearTasksButton from './src/components/ClearTasksButton';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length.toString(), title, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(t => {
      if (t.id === taskId) {
        return { ...t, completed: !t.completed };
      }
      return t;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TaskInput onSubmit={addTask} />
      <TaskList
        tasks={tasks}
        onPressTask={toggleTaskCompletion}
        onLongPressTask={deleteTask}
      />
      <ClearTasksButton onPress={clearTasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
