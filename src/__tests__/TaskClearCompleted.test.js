import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskClearCompleted from '../components/TaskClearCompleted';
import { TasksContext } from '../context/TasksContext';

const mockContextValue = {
  tasks: [
    { id: 1, title: 'Task 1', isComplete: true },
    { id: 2, title: 'Task 2', isComplete: false },
    { id: 3, title: 'Task 3', isComplete: true },
  ],
  setTasks: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <TasksContext.Provider value={mockContextValue}>
      <TaskClearCompleted />
    </TasksContext.Provider>
  );
};

describe('TaskClearCompleted component', () => {
  it('renders a "Clear completed" button', () => {
    const { getByText } = renderWithMockContext();

    expect(getByText('Clear completed')).toBeInTheDocument();
  });

  it('calls clearCompleted when the "Clear completed" button is clicked', () => {
    const { getByText } = renderWithMockContext();

    const clearCompletedButton = getByText('Clear completed');
    fireEvent.click(clearCompletedButton);

    expect(mockContextValue.setTasks).toHaveBeenCalledWith([
      { id: 2, title: 'Task 2', isComplete: false },
    ]);
  });
});
