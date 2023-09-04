import React from 'react';
import { render, screen } from '@testing-library/react';
import NoMatch from '../components/NoMatch';

test('renders the NoMatch component with correct text', () => {
  render(<NoMatch />);
  
  const notFoundText = screen.getByText('404 Page Not Found!');
  
  expect(notFoundText).toBeInTheDocument();
});