import React from 'react';

import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./store/reducers";



const store = createStore(rootReducer);

test('main app heading', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>);
  const mainHeading = getByText(/Co-make-4/);
  expect(mainHeading).toBeInTheDocument();
});
