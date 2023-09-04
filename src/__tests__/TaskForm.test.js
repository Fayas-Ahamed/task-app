import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from '../components/TaskForm';
import { TasksContext } from '../context/TasksContext';

const mockContextValue = {
  tasks: [],
  setTasks: jest.fn(),
  idForTask: 1,
  setIdForTask: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <TasksContext.Provider value={mockContextValue}>
      <TaskForm />
    </TasksContext.Provider>
  );
};

describe('TaskForm component', () => {
  it('renders an input field', () => {
    const { getByPlaceholderText } = renderWithMockContext();

    expect(getByPlaceholderText('Add a new task')).toBeInTheDocument();
  });

  it('updates the input field value when the user types', () => {
    const { getByPlaceholderText } = renderWithMockContext();
    const inputField = getByPlaceholderText('Add a new task');

    fireEvent.change(inputField, { target: { value: 'New Task' } });

    expect(inputField.value).toBe('New Task');
  });

  it('adds a new task when the user submits the form', () => {
    const { getByPlaceholderText } = renderWithMockContext();
    const inputField = getByPlaceholderText('Add a new task');

    fireEvent.change(inputField, { target: { value: 'New Task' } });
    fireEvent.submit(inputField);

    expect(mockContextValue.setTasks).toHaveBeenCalledWith([
      {
        id: 1,
        title: 'New Task',
        isComplete: false,
      },
    ]);
  });
});
