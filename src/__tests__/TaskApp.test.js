import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskApp from '../components/TaskApp';

test('renders the App component', () => {
  const { getByText } = render(<TaskApp />);
  
  const nameText = getByText(/What is your name?/i);
  expect(nameText).toBeInTheDocument();
  
  const taskAppText = getByText(/Task App/i);
  expect(taskAppText).toBeInTheDocument();
});

test('allows the user to enter their name', () => {
  const { getByPlaceholderText, getByText } = render(<TaskApp />);
  
  const nameInput = getByPlaceholderText(/What is your name/i);
  
  fireEvent.change(nameInput, { target: { value: 'Test' } });
  
  expect(nameInput.value).toBe('Test');
  
  const greetingText = getByText(/Hello, Test/i);
  expect(greetingText).toBeInTheDocument();
});
