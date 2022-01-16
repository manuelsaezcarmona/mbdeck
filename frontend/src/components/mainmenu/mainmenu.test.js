import React from 'react';
import { render, screen } from '../../test.utils';
import { MainMenu } from './mainmenu';

describe('Given the Mainmenu', () => {
  describe('then render', () => {
    beforeEach(() => {
      render(<MainMenu />);
    });
    test('should be the logo', () => {
      expect(screen.getByText(/Mambo/i)).toBeInTheDocument();
      expect(screen.getByText(/Deck/i)).toBeInTheDocument();
    });
    test('should be the Register Link', () => {
      const element = screen.getByText(/Registro/i);

      expect(element).toBeInTheDocument();
    });
  });
});
