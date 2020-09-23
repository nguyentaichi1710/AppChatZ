import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Root from './navigators';
const App = () => {
  return (
    <Provider store={store}>
      <Root></Root>
    </Provider>
  );
};

export default App;
