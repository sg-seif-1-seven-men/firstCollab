class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      currentUser: ""
    };
  }
  // HandleChange & handleSubmit
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/sessions", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(loggedInUser => {
        return loggedInUser.json();
      })
      .then(jsonedUser => {
        this.setState({
          currentUser: jsonedUser
        });
        console.log("Current User is:", this.state.currentUser);
      })
      .then(() => {
        this.props.userState(this.state.currentUser);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <section class="page-section clearfix">
          <div class="container">
            <div class="intro">
              <img
                class="intro-img img-fluid mb-3 mb-lg-0 rounded"
                src="./Bootstrap/img/intro.jpg"
                alt=""
              />
              <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-upper">Username:</span>
                </h2>
                <form onSubmit={this.handleSubmit}>
                  <label
                    htmlFor="username"
                    class="section-heading-upper"
                  ></label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="password"
                    class="section-heading-upper"
                  ></label>
                  <br></br>
                  <br></br>
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Password:</span>
                  </h2>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <input
                    class="intro-button btn btn-primary btn-xs"
                    type="submit"
                    value="Log In"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section cta">
          <div class="container">
            <div class="row">
              <div class="col-xl-9 mx-auto">
                <div class="cta-inner text-center rounded">
                  <h2 class="section-heading mb-4">
                    <span class="section-heading-upper">Our Promise</span>
                    <span class="section-heading-lower">To You</span>
                  </h2>
                  <p class="mb-0">
                    Find a friend, pick a consequence, and leverage the power of
                    behavioral economics to motivate yourself to get fit this
                    year!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      //   <React.Fragment>
      //     <br />
      //     <br />
      //     <br />

      //     <div className="container intro-text left-20 text-center bg-faded p-5 rounded">
      //       <h1>Login</h1>

      //       <div className="card-body">
      // <form onSubmit={this.handleSubmit}>
      //   <label htmlFor="username" class="section-heading-upper">
      //     Username:
      //   </label>
      //   <br></br>
      //   <input
      //     type="text"
      //     name="username"
      //     id="username"
      //     value={this.state.username}
      //     onChange={this.handleChange}
      //   />
      //   <br></br>
      //   <label htmlFor="password" class="section-heading-upper">
      //     Password:
      //   </label>
      //   <br></br>
      //   <input
      //     type="password"
      //     name="password"
      //     id="password"
      //     value={this.state.password}
      //     onChange={this.handleChange}
      //   />
      //   <br></br>
      //   <br></br>
      //   <input
      //     class="btn btn-primary btn-xl"
      //     type="submit"
      //     value="Submit"
      //   />
      // </form>
      //       </div>
      //     </div>
      //   </React.Fragment>
    );
  }
}
