import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskCompleteAllTasks from '../components/TaskCompleteAllTasks';
import { TasksContext } from '../context/TasksContext';

const mockContextValue = {
  tasks: [
    { id: 1, title: 'Task 1', isComplete: false },
    { id: 2, title: 'Task 2', isComplete: false },
    { id: 3, title: 'Task 3', isComplete: false },
  ],
  setTasks: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <TasksContext.Provider value={mockContextValue}>
      <TaskCompleteAllTasks />
    </TasksContext.Provider>
  );
};

describe('TaskCompleteAllTasks component', () => {
  it('renders a "Complete All" button', () => {
    const { getByText } = renderWithMockContext();

    expect(getByText('Complete All')).toBeInTheDocument();
  });

  it('calls completeAllTasks when the "Complete All" button is clicked', () => {
    const { getByText } = renderWithMockContext();

    const completeAllButton = getByText('Complete All');
    fireEvent.click(completeAllButton);

    expect(mockContextValue.setTasks).toHaveBeenCalledWith([
      { id: 1, title: 'Task 1', isComplete: true },
      { id: 2, title: 'Task 2', isComplete: true },
      { id: 3, title: 'Task 3', isComplete: true },
    ]);
  });
});
