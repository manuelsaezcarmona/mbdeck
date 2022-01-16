import React from 'react';
import { render, screen } from '../../test.utils';
import { FavoriteItem } from './favoriteitem';

describe('Given the Favorite Menu component', () => {
  test('then render link', () => {
    const item = {

      recipeImage: 'una imagen',
      recipeName: 'patatas',
      category: 'legumbres'

    };
    const handleDelete = jest.fn();
    render(<FavoriteItem item={item} handleDelete={handleDelete} />);
    expect(screen.getByText(/legumbres/i)).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
});
