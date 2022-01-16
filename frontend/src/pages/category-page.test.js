import React from 'react';
import { render, screen } from '../test.utils';
import { CategoryPage } from './category-page';

describe('Given the Category Page', () => {
  describe('Then require a valid user', () => {
    describe('Then user is autenticated', () => {
      const initialState = {
        user: {
          username: '123',
          recipes: []
        }
      };
      beforeEach(() => {
        render(<CategoryPage />, initialState);
      });
      test('Should Be render the Header', () => {
        expect(screen.getByText(/Categorias/i)).toBeInTheDocument();
      });
    });
    describe('Then user is not autenticated', () => {
      const initialState = {
        user: {
          username: 'invitado'
        }
      };
      beforeEach(() => {
        render(<CategoryPage />, initialState);
      });
      test('Should be render Restricted Page', () => {
        expect(screen.getByText(/Acceso restringido/i)).toBeInTheDocument();
      });
    });
  });
});
