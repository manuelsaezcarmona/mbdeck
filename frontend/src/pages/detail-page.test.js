import React from 'react';
import { render, screen } from '../test.utils';
import { DetailPage } from './detail-page';
// import { addFavorite } from '../redux/actioncreators';

describe('Given the detail page', () => {
  const initialState = {
    recipeID: {
      _id: '123',
      recipeName: 'sirope de chocolate',
      recipeImage: 'https://cecotec.es/recetas-mambo/wp-content/uploads/2021/05/Mambo_Mezclar_Sirope-de-chocolate_RRSS-min-e1620810801163-1140x500.jpg',
      category: 'postres',
      ratingTotal: 100,
      ratingVotes: 25,
      difficulty: 'facil',
      ingredients: [
        {
          quantity: '200 gr',
          description: 'azucar'
        },
        {
          quantity: '75 gr',
          description: 'cacao en polvo'
        },
        {
          quantity: '200 ml',
          description: 'agua'
        },
        {
          quantity: '1 cucharadita',
          description: 'extracto de vainilla'
        }
      ],
      preparation: [
        {
          order: 1,
          title: 'cuchillas',
          description: 'Colocamos las cuchillas en su posición',
          image: '',
          instructions: [{
            instructionIcon: 'https://i.ibb.co/HK4VdKj/time.png',
            instructionName: 'Tiempo',
            intructionDuration: '10 seg'
          },
          {
            instructionIcon: 'https://i.ibb.co/gJgYVw1/speed.png',
            instructionName: 'Velocidad',
            intructionDuration: '10'
          }
          ]
        },
        {
          order: 2,
          title: 'Azucar',
          description: 'Introducimos el azúcar y pulverizamos',
          image: '',
          instructions: [{
            instructionIcon: 'https://i.ibb.co/HK4VdKj/time.png',
            instructionName: 'Tiempo',
            intructionDuration: '10 seg'
          },
          {
            instructionIcon: 'https://i.ibb.co/gJgYVw1/speed.png',
            instructionName: 'Velocidad',
            intructionDuration: '10'
          }
          ]
        },
        {
          order: 3,
          title: 'Agua y vainilla',
          description: 'Agregamos el agua y la vainilla',
          image: '',
          instructions: [{
            instructionIcon: 'https://i.ibb.co/HK4VdKj/time.png',
            instructionName: 'Tiempo',
            intructionDuration: '10 min'
          },
          {
            instructionIcon: 'https://i.ibb.co/gJgYVw1/speed.png',
            instructionName: 'Velocidad',
            intructionDuration: '2'
          },
          {
            instructionIcon: 'https://i.ibb.co/1s6Gd2z/temperature.png',
            instructionName: 'Temperatura',
            intructionDuration: '105 grados'
          },
          {
            instructionIcon: 'https://i.ibb.co/ckrnpsX/heatpower.png',
            instructionName: 'Potencia de Calor',
            intructionDuration: '7'
          }

          ]
        },
        {
          order: 4,
          title: 'Cacao',
          description: 'Agregamos el cacao y programamos',
          image: '',
          instructions: [{
            instructionIcon: 'https://i.ibb.co/HK4VdKj/time.png',
            instructionName: 'Tiempo',
            intructionDuration: '2 min'
          },
          {
            instructionIcon: 'https://i.ibb.co/gJgYVw1/speed.png',
            instructionName: 'Velocidad',
            intructionDuration: '2'
          },
          {
            instructionIcon: 'https://i.ibb.co/1s6Gd2z/temperature.png',
            instructionName: 'Temperatura',
            intructionDuration: '105 grados'
          },
          {
            instructionIcon: 'https://i.ibb.co/ckrnpsX/heatpower.png',
            instructionName: 'Potencia de Calor',
            intructionDuration: '7'
          }

          ]
        },
        {
          order: 5,
          title: 'Finalizando',
          description: 'Bajamos los restos adheridos en las paredes y volvemos a programar',
          image: '',
          instructions: [{
            instructionIcon: 'https://i.ibb.co/HK4VdKj/time.png',
            instructionName: 'Tiempo',
            intructionDuration: '2 min'
          },
          {
            instructionIcon: 'https://i.ibb.co/gJgYVw1/speed.png',
            instructionName: 'Velocidad',
            intructionDuration: '2'
          },
          {
            instructionIcon: 'https://i.ibb.co/1s6Gd2z/temperature.png',
            instructionName: 'Temperatura',
            intructionDuration: '105 grados'
          },
          {
            instructionIcon: 'https://i.ibb.co/ckrnpsX/heatpower.png',
            instructionName: 'Potencia de Calor',
            intructionDuration: '7'
          }

          ]
        }
      ]
    }
  };

  beforeEach(() => {
    // addFavorite.jest.fn();
    render(<DetailPage />, initialState);
  });
  test('Should be Render', () => {
    expect(screen.getByText(/sirope de chocolate/i)).toBeInTheDocument();
  });
  test('The Button to add to be render', () => {
    expect(screen.getByText(/Me gusta/i)).toBeInTheDocument();
  });
});
