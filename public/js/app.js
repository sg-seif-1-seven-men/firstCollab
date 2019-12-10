// Import React Router
const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitments: []
    };
  }
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
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".containerReact"));
