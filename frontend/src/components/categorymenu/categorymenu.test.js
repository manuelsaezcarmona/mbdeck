import React from 'react';
import { render, screen } from '../../test.utils';
import { CategoryMenu } from './categorymenu';
import './categorymenu.scss';

describe('Given the categoryMenu component', () => {
  describe('When it is rendered', () => {
    test('then render link element nav', () => {
      render(<CategoryMenu />);
      expect(screen.getByText(/carnes/)).toBeInTheDocument();
      expect(screen.getByText(/pescados/)).toBeInTheDocument();
    });
  });
});
