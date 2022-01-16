import React from 'react';
import { render, screen } from '../test.utils';
import { LoginPage } from './login-page';
import { Login } from '../components/login/login';

describe('Given the login Page', () => {
  test('Render the login', () => {
    render(<LoginPage />);
    render(<Login />);
    expect(screen.getByText(/Esta es la LoginPage/i)).toBeInTheDocument();
  });
});
