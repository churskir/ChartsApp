import React, { Component } from 'react';
import './App.css';
import store from './store';

import { Provider } from "react-redux";

import MainPage from "./views/pages/MainPage"
import Header from "./views/components/Header"

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <React.Fragment>
            <div className="app">
              <Header />
              <MainPage />
            </div>
          </React.Fragment>
        </Provider>
      </div>
    );
  }
}

export default App;
