import React from 'react';
import { render, screen } from '../test.utils';
import { RegisterPage } from './register-page';

describe('Given the register page', () => {
  render(<RegisterPage />);
  test('Should Be render the Header', () => {
    expect(screen.getByText(/Registro/i)).toBeInTheDocument();
  });
});
