import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './shared/store';
import { AppRouter } from './routes';

function App() {
  return (
    <Provider store={store}>
      <AppRouter></AppRouter>
    </Provider>
  );
}

export default App;
