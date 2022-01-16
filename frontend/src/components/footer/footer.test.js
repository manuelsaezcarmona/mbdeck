import React from 'react';
import { Footer } from './footer';
import { render, screen } from '../../test.utils';

describe('Given the footer component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<Footer />);
    });
    test('Then rendered the elements', () => {
      expect(screen.getByText(/Hecho/i)).toBeInTheDocument();
    });
  });
});
