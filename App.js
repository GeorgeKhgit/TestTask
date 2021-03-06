import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {MainApp} from './src/components/MainApp';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
