import React from 'react';
import { render, screen } from '@testing-library/react';
import NoTasks from '../components/NoTasks';

test('renders the NoTasks component with correct content', () => {
  render(<NoTasks />);
  
  const messageElement = screen.getByText(/add some tasks/i);
  expect(messageElement).toBeInTheDocument();
});