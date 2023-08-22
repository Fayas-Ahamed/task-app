import React, { useContext } from 'react';
import TaskItemsRemaining from './TaskItemsRemaining';
import TaskClearCompleted from './TaskClearCompleted';
import TaskCompleteAllTasks from './TaskCompleteAllTasks';
import TaskFilters from './TaskFilters';
import useToggle from '../hooks/useToggle';
import { TasksContext } from '../context/TasksContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function TaskList() {
  const { tasks, setTasks, tasksFiltered } = useContext(TasksContext);
  const [isModifyAllVisible, setModifyAllVisible] = useToggle();
  const [isFilterVisible, setFilterVisible] = useToggle();

  function deleteTask(id) {
    setTasks([...tasks].filter(task => task.id !== id));
  }

  function completeTask(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function markAsEditing(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isEditing = true;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function updateTask(event, id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        if (event.target.value.trim().length === 0) {
          task.isEditing = false;
          return task;
        }
        task.title = event.target.value;
        task.isEditing = false;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  function cancelEdit(event, id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isEditing = false;
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <>
      <TransitionGroup component="ul" className="task-list">
        {tasksFiltered().map((task, index) => (
          <CSSTransition
            key={task.id}
            timeout={300}
            classNames="slide-horizontal"
          >
            <li className="task-item-container">
              <div className="task-item">
                <input
                  type="checkbox"
                  onChange={() => completeTask(task.id)}
                  checked={task.isComplete ? true : false}
                />

                {!task.isEditing ? (
                  <span
                    onDoubleClick={() => markAsEditing(task.id)}
                    className={`task-item-label ${
                      task.isComplete ? 'line-through' : ''
                    }`}
                  >
                    {task.title}
                  </span>
                ) : (
                  <input
                    type="text"
                    onBlur={event => updateTask(event, task.id)}
                    onKeyDown={event => {
                      if (event.key === 'Enter') {
                        updateTask(event, task.id);
                      } else if (event.key === 'Escape') {
                        cancelEdit(event, task.id);
                      }
                    }}
                    className="task-item-input"
                    defaultValue={task.title}
                    autoFocus
                  />
                )}
              </div>
              <button onClick={() => deleteTask(task.id)} className="x-button">
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>

      <div className="toggles-container">
        <button onClick={setModifyAllVisible} className="button">
          Modify All Option
        </button>
        <button onClick={setFilterVisible} className="button">
          Filter Option
        </button>
      </div>

      <CSSTransition
        in={isModifyAllVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="check-all-container">
          <TaskCompleteAllTasks />

          <TaskItemsRemaining />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isFilterVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="other-buttons-container">
          <TaskFilters />
          <div>
            <TaskClearCompleted />
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default TaskList;
