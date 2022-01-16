import React from 'react';
import { render, screen } from '../test.utils';
import { UserPage } from './user-page';

describe('Given the User Page', () => {
  describe('Then require a valid user', () => {
    describe('Then user is autenticated', () => {
      const initialState = {
        user: {
          username: '123',
          recipes: []
        }
      };

      beforeEach(() => {
        render(<UserPage />, initialState);
      });
      test('Should Be render the Header', () => {
        expect(screen.getByText(/Tu Cuenta/i)).toBeInTheDocument();
      });
    });
    describe('Then user is NOT autenticated', () => {
      const initialState = {
        user: {
          username: 'invitado',
          recipes: []
        }
      };
      beforeEach(() => {
        render(<UserPage />, initialState);
      });
      test('Should Be render the Header', () => {
        expect(screen.getByText(/Acceso restringido/i)).toBeInTheDocument();
      });
    });
  });
});
