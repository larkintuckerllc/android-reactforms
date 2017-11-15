import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Form from './components/Form';

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  );
}
export default App;
