import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

function TaskClearCompleted() {
  const { tasks, setTasks } = useContext(TasksContext);

  function clearCompleted() {
    setTasks([...tasks].filter(task => !task.isComplete));
  }

  return (
    <button onClick={clearCompleted} className="button">
      Clear completed
    </button>
  );
}

export default TaskClearCompleted;
