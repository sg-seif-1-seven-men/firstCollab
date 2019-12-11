// Import React Router
const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;


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
              <Home currentUser={this.state.currentUser} />
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
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));
