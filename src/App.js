import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Login from "./components/login/Login";
import {
   Switch,
   Route
} from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/admin/Dashboard";
import Home from "./Home";
import Landing from "./components/landingpage/Landing";
import ThemeIcons from "./components/icons/ThemeIcons";



export default function App() {
  return (
      <>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/landing" component={Landing}/>
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route path="/icons" component={ThemeIcons}/>
              <Route component={Error}/>
          </Switch>
          </>
  );
}


