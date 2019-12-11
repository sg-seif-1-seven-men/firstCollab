// Import React Router
const { Redirect, BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      commitments: []
    };
  }
  userState = (user) => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        console.log('user logged in');
      }
    );
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/commitments">
              <Commitments />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              {this.state.currentUser ? <Redirect to="/commitments" /> : <Login userState={this.userState} />}
            </Route>
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));
