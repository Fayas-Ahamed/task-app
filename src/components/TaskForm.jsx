import React, { useContext, useState } from 'react';
import { TasksContext } from '../context/TasksContext';

function TaskForm() {
  const { tasks, setTasks, idForTask, setIdForTask } = useContext(TasksContext);

  const [taskInput, setTaskInput] = useState('');

  function handleInput(event) {
    setTaskInput(event.target.value);
  }

  function addTask(event) {
    event.preventDefault();

    if (taskInput.trim().length === 0) {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: idForTask,
        title: taskInput,
        isComplete: false,
      },
    ]);

    setIdForTask(prevIdForTask => prevIdForTask + 1);

    setTaskInput('');
  }

  return (
    <form action="#" onSubmit={addTask}>
      <input
        type="text"
        value={taskInput}
        onChange={handleInput}
        className="task-input"
        placeholder="Add a new task"
      />
    </form>
  );
}

export default TaskForm;
