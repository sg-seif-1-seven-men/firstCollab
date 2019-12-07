// Import React Router
const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      commitments: []
    };
  }
  render() {
    return (
      //   <div>
      //     <Header />
      //     <h1> Buddy Goals </h1>
      //     <About />
      //   </div>

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));

// ReactDOM.render(<App />, document.querySelector(".container"));
