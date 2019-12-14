// Import React Router
const {
  Redirect,
  BrowserRouter,
  Link,
  Switch,
  Route,
  browserHistory
} = ReactRouterDOM;

// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import { Button } from "semantic-ui-react";

// class Logout extends Component {
//   state = {
//     navigate: false
//   }

//   logout = () => {
//     localStorage.clear("token");
//     this.setState({ navigate: true });
//   };

//   render() {
//     const { navigate } = this.state;
//     if (navigate) {
//       return <Redirect to="/" />;
//     }
//     return <Button onClick={this.logout}>log out</Button>;
//   }
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      commitments: []
    };
  }
  userState = user => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        console.log("user logged in");
      }
    );
  };

  toLogout = () => {
    this.setState({
      currentUser: ""
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header
            currentUser={this.state.currentUser}
            toLogout={this.toLogout}
          />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/commitments">
              {this.state.currentUser ? (
                <Commitments currentUser={this.state.currentUser} />
              ) : (
                  <Redirect to="/login" userState={this.userState} />
                )}
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              {this.state.currentUser ? (
                <Redirect to="/commitments" />
              ) : (
                  <Login userState={this.userState} />
                )}
            </Route>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));
