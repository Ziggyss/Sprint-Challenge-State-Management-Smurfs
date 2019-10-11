import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import * as reducers from "./state/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SmurfList from './components/SmurfList';

const monsterReducer = combineReducers({
  smurfs: reducers.smurfsReducer,
  formValues: reducers.formReducer
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <SmurfList />
      </div>
    </Provider>
  );
}

export default App;
