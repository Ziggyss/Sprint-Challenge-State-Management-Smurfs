import React, { Component } from "react";
import "./App.css";
import thunk from "redux-thunk";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import SmurfList from './components/SmurfList';
import Form from './components/Form';

import Counter from "../src/components/counter";

const monsterReducer = combineReducers({
  smurfs: reducers.smurfsReducer,
  formValues: reducers.formReducer,
  count: reducers.countReducer
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
        <Counter />
        <SmurfList />
        <Form />
      </div>
    </Provider>
  );
}

export default App;
