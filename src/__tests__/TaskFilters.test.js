import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskFilters from '../components/TaskFilters';
import { TasksContext } from '../context/TasksContext';

const mockContextValue = {
  filter: 'all',
  setFilter: jest.fn(),
  tasksFiltered: jest.fn(),
};

const renderWithMockContext = () => {
  return render(
    <TasksContext.Provider value={mockContextValue}>
      <TaskFilters />
    </TasksContext.Provider>
  );
};

describe('TaskFilters component', () => {
  it('renders filter buttons', () => {
    const { getByText } = renderWithMockContext();

    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Active')).toBeInTheDocument();
    expect(getByText('Completed')).toBeInTheDocument();
  });

  it('calls setFilter and tasksFiltered when a filter button is clicked', () => {
    const { getByText } = renderWithMockContext();

    fireEvent.click(getByText('Active'));

    expect(mockContextValue.setFilter).toHaveBeenCalledWith('active');
    expect(mockContextValue.tasksFiltered).toHaveBeenCalled();
  });

});
