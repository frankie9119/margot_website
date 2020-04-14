import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import CoachingPage from './Pages/CoachingPage/CoachingPage';
import ChanteusePage from './Pages/ChanteusePage/ChanteusePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/CoachingPage" exact component={CoachingPage} />
        <Route path="/ChanteusePage" exact component={ChanteusePage} />
        <Route exact path="/ContactPage" exact component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
