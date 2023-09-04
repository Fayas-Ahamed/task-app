import React from 'react';
import { render } from '@testing-library/react';
import Contact from '../components/Contact';

test('renders the Contact component with correct text', () => {
  const { getByText } = render(<Contact />);
  
  const contactText = getByText('This is the contact page');
  
  expect(contactText).toBeInTheDocument();
});