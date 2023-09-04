import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

test('renders the About component', () => {
  const { getByText } = render(<About />);
  const aboutElement = getByText('This is the about page');
  expect(aboutElement).toBeInTheDocument();
});

test('has the "container" class', () => {
  const { container } = render(<About />);
  expect(container.firstChild).toHaveClass('container');
});