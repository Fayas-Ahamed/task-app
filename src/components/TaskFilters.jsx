import React, { useContext } from 'react';
import { TasksContext } from '../context/TasksContext';

function TaskFilters() {
  const { filter, setFilter, tasksFiltered } = useContext(TasksContext);

  return (
    <div>
      <button
        onClick={() => {
          setFilter('all');
          tasksFiltered();
        }}
        className={`button filter-button ${
          filter === 'all' ? 'filter-button-active' : ''
        }`}
      >
        All
      </button>
      <button
        onClick={() => {
          setFilter('active');
          tasksFiltered();
        }}
        className={`button filter-button ${
          filter === 'active' ? 'filter-button-active' : ''
        }`}
      >
        Active
      </button>
      <button
        onClick={() => {
          setFilter('completed');
          tasksFiltered();
        }}
        className={`button filter-button ${
          filter === 'completed' ? 'filter-button-active' : ''
        }`}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilters;
