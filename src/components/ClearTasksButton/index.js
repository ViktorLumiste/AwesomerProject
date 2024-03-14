import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from "./styles"

const ClearTasksButton = ({ onPress }) => {
  const clearTasks = () => {
    Alert.alert(
      'Clear Tasks',
      'Are you sure you want to clear all tasks?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: onPress }
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableOpacity style={styles.clearButton} onPress={clearTasks}>
      <Text style={styles.clearButtonText}>Clear Tasks</Text>
    </TouchableOpacity>
  );
}

export default ClearTasksButton