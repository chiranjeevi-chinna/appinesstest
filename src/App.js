import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './compnents/login/login';
import EmployeeList from './compnents/home/empoyeeList';



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/employees" component={EmployeeList} />
      </BrowserRouter>
    )
  }
}