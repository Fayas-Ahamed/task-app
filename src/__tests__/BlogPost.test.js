import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

test('displays the correct blog post id', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/blog/1']}>
      <Route path="/blog/:id">
        <BlogPost />
      </Route>
    </MemoryRouter>
  );

  const blogPostText = getByText('This is blog post 1');
  expect(blogPostText).toBeInTheDocument();
});