import React, { useContext, useMemo } from 'react';
import { TasksContext } from '../context/TasksContext';

function TaskItemsRemaining() {
  const { tasks } = useContext(TasksContext);

  function remainingCalculation() {
    return tasks.filter(task => !task.isComplete).length;
  }

  const remaining = useMemo(remainingCalculation, [tasks]);

  return <span>{remaining} {remaining == 1 ? 'task' : 'tasks' } remaining</span>;
}

export default TaskItemsRemaining;
