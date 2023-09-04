import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Root from '../components/Root';

test('renders the Root component with navigation and Home content', () => {
  render(
    <Router>
      <Root />
    </Router>
  );

  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('Contact');
  const blogLink = screen.getByText('Blog');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();

  const homeContent = screen.getByText('Task App');
  expect(homeContent).toBeInTheDocument();
});

test('navigates to the About page when the About link is clicked', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Root />
    </Router>
  );

  const aboutLink = screen.getByText('About');
  aboutLink.click();

  const aboutContent = screen.getByText('This is the about page');
  expect(aboutContent).toBeInTheDocument();
});