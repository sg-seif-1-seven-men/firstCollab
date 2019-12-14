class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentUser: this.props.currentUser
  //   };
  // }

  render() {
    return (
      <div>
        <h1 class="site-heading text-center text-white d-none d-lg-block">
          <span class="site-heading-lower">Smashing Goals</span>
          <span class="site-heading-upper text-primary mb-3">
            A better way to hit those new year resolutions
          </span>
        </h1>

        <nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active px-lg-4 nav-link text-uppercase text-expanded">
                  <Link to="/">Home</Link>
                </li>
                <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                  <Link to="/about">About</Link>
                </li>
                <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                  <Link to="/commitments">Commitments</Link>
                </li>
                <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                  <Link to="/signup">Signup</Link>
                </li>
                {this.props.currentUser ? (
                  <li
                    class="nav-item px-lg-4 nav-link text-uppercase text-expanded"
                    onClick={this.props.toLogout}
                  >
                    Logout
                  </li>
                ) : (
                  <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                    <Link to="/login">Log In</Link>
                  </li>
                )}
                <li class="nav-item px-lg-4 nav-link text-uppercase text-expanded">
                  {this.props.currentUser ? (
                    <li>Welcome {this.props.currentUser.username} </li>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
