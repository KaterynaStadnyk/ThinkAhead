import React from "react";
import "./App.css";
import Articles from "./components/Articles";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Team from "./components/Team";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import FormUserComponent from './components/FormUserComponent'
import Body from './components/Body'

const NotFound = () => {
  return <div>Page not found</div>;
};

class App extends React.Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    },() => console.log('USER IN STATE :', this.state.user));
  };

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Navbar />
        <Switch>

        {/*  */}
        <Route
            exact
            path="/testform"
            component={FormUserComponent}
          />
        {/*  */}

          <Route
            exact
            path="/signup"
            render={props => <Signup setUser={this.setUser} {...props} />}
          />
          <Route
            exact
            path="/login"
            render={props => <Login setUser={this.setUser} {...props} />}
          />
          <Route exact path="/" render={props => <Home user={this.state.user} {...props}/>} />
          <Route exact path="/body" render={props => <Body user={this.state.user} {...props}/>} />


          <Route path="/about" component={About} />
          <Route path="/team" component={Team} />
          <Route exact path="/funeral" component={SideBar} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
