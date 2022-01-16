import React from 'react';
import { Login } from './login';
import { render, screen } from '../../test.utils';

describe('Given the login Page', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<Login />);
    });
    test('Then rendered the elements', () => {
      const inputele = screen.getByText(/Loguear/i);

      expect(inputele).toBeInTheDocument();
    });
    test('Push the button', () => {
      const loginButton = screen.getByRole('button');
      expect(loginButton).toBeInTheDocument();
    });
  });
});
