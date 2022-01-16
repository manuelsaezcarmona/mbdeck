import React from 'react';
import { render, screen } from '../test.utils';
import { NotFound } from './not-found-page';

test('then render link', () => {
  render(<NotFound />);
  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
});
