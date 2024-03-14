import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from '../TaskItem';

const TaskList = ({ tasks, onPressTask, onLongPressTask }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onPress={() => onPressTask(item.id)}
          onLongPress={() => onLongPressTask(item.id)}
        />
      )}
    />
  );
}
export default TaskList