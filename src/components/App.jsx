import React, { useEffect, useState, useRef } from 'react';
import NoTasks from './NoTasks';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import useLocalStorage from '../hooks/useLocalStorage';
import '../reset.css';
import '../App.css';
import { TasksContext } from '../context/TasksContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

function App() {
  const [name, setName] = useLocalStorage('name', '');

  const nameInputEl = useRef(null);
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const [idForTask, setIdForTask] = useLocalStorage('idForTask', 1);

  const [filter, setFilter] = useState('all');

  function tasksFiltered() {
    if (filter === 'all') {
      return tasks;
    } else if (filter === 'active') {
      return tasks.filter(task => !task.isComplete);
    } else if (filter === 'completed') {
      return tasks.filter(task => task.isComplete);
    }
  }

  useEffect(() => {
    nameInputEl.current.focus();
  }, []);

  function handleNameInput(event) {
    setName(event.target.value);
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        idForTask,
        setIdForTask,
        tasksFiltered,
        filter,
        setFilter,
      }}
    >
      <div className="task-app">
        <div className="name-container">
          <h2>What is your name?</h2>
          <form action="#">
            <input
              type="text"
              ref={nameInputEl}
              className="task-input"
              placeholder="What is your name"
              value={name}
              onChange={handleNameInput}
            />
          </form>

          <CSSTransition
            in={name.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <p className="name-label">Hello, {name}</p>
          </CSSTransition>
        </div>
        <h2>Task App</h2>
        <TaskForm />

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={tasks.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            {tasks.length > 0 ? <TaskList /> : <NoTasks />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
