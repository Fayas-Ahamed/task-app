import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from '../components/Blog';

test('renders the Blog component with links', () => {
  render(
    <Router>
      <Blog />
    </Router>
  );

  const postOneLink = screen.getByText('Post One');
  const postTwoLink = screen.getByText('Post Two');

  expect(postOneLink).toBeInTheDocument();
  expect(postTwoLink).toBeInTheDocument();
});

test('links navigate to the correct routes', () => {
  render(
    <Router>
      <Blog />
    </Router>
  );

  const postOneLink = screen.getByText('Post One');
  postOneLink.click();

  expect(window.location.pathname).toBe('/blog/1');

  const postTwoLink = screen.getByText('Post Two');
  postTwoLink.click();

  expect(window.location.pathname).toBe('/blog/2');
});