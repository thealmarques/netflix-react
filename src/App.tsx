import React from 'react';
import './App.scss';
import { Profile } from './components/profile/profile';
import { Provider } from 'react-redux';
import store from './shared/store';

function App() {
  return (
    <Provider store={store}>
      <Profile></Profile>
    </Provider>
  );
}

export default App;
