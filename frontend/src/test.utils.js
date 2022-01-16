/* eslint-disable react/function-component-definition */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './redux/store';

function render(
  component,
  initialState
) {
  const store = configureStore(initialState);

  function Wrapper({ children }) {
    return (
      <Router>
        <Provider store={store}>
          {children}
        </Provider>
      </Router>
    );
  }
  return rtlRender(component, { wrapper: Wrapper });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
