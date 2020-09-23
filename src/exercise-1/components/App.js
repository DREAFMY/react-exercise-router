import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import MyProfile from './MyProfile';
import AboutMe from './AboutMe';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-profile" component={MyProfile} />
            <Route exact path="/about-us" component={AboutMe} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
