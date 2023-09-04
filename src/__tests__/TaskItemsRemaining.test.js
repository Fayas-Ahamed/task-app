import React from 'react';
import { render } from '@testing-library/react';
import TaskItemsRemaining from '../components/TaskItemsRemaining';
import { TasksContext } from '../context/TasksContext';

const mockContextValue = {
  tasks: [
    { id: 1, title: 'Task 1', isComplete: false },
    { id: 2, title: 'Task 2', isComplete: false },
    { id: 3, title: 'Task 3', isComplete: true },
  ],
};

const renderWithMockContext = () => {
  return render(
    <TasksContext.Provider value={mockContextValue}>
      <TaskItemsRemaining />
    </TasksContext.Provider>
  );
};

describe('TaskItemsRemaining component', () => {
  it('renders the correct remaining task count when there are incomplete tasks', () => {
    const { getByText } = renderWithMockContext();

    expect(getByText('2 tasks remaining')).toBeInTheDocument();
  });

  it('renders the correct remaining task count when there is one incomplete task', () => {
    const oneIncompleteTaskContextValue = {
      tasks: [
        { id: 1, title: 'Task 1', isComplete: false },
      ],
    };

    const { getByText } = render(
      <TasksContext.Provider value={oneIncompleteTaskContextValue}>
        <TaskItemsRemaining />
      </TasksContext.Provider>
    );

    expect(getByText('1 task remaining')).toBeInTheDocument();
  });

  it('renders the correct remaining task count when there are no incomplete tasks', () => {
    const noIncompleteTasksContextValue = {
      tasks: [
        { id: 1, title: 'Task 1', isComplete: true },
        { id: 2, title: 'Task 2', isComplete: true },
      ],
    };

    const { getByText } = render(
      <TasksContext.Provider value={noIncompleteTasksContextValue}>
        <TaskItemsRemaining />
      </TasksContext.Provider>
    );

    expect(getByText('0 tasks remaining')).toBeInTheDocument();
  });
});
