import React from 'react';
import './App.css';
import Users from './Users'
import { Provider } from 'react-redux'
import store from '../src/redux/user/store'
function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
      <Users />
    </Provider>
    </div>
  );
}

export default App;
