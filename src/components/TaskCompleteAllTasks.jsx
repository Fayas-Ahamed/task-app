import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

function TaskCompleteAllTasks() {
  const { tasks, setTasks } = useContext(TasksContext);

  function completeAllTasks() {
    const updatedTasks = tasks.map(task => {
      task.isComplete = true;

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <div onClick={completeAllTasks} className="button">
        Complete All
      </div>
    </div>
  );
}

export default TaskCompleteAllTasks;
