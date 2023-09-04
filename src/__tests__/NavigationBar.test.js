import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

test('renders the NavigationBar component with navigation links', () => {
  render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );

  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const contactLink = screen.getByText('Contact');
  const blogLink = screen.getByText('Blog');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
  expect(blogLink).toBeInTheDocument();
});

test('applies the "active" class to the active link', () => {
  render(
    <MemoryRouter initialEntries={['/about']}>
      <NavigationBar />
    </MemoryRouter>
  );

  const aboutLink = screen.getByText('About');
  expect(aboutLink).toHaveClass('active');

  const homeLink = screen.getByText('Home');
  const contactLink = screen.getByText('Contact');
  const blogLink = screen.getByText('Blog');

  expect(homeLink).not.toHaveClass('active');
  expect(contactLink).not.toHaveClass('active');
  expect(blogLink).not.toHaveClass('active');
});