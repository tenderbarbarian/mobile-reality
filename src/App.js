import React from 'react';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';


const store = configureStore();

function App() {
  return (
  <Provider store={store}>
		<AppRouter />
	</Provider>
  );
}

export default App;
