class Header extends React.Component {
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
            {/* <a
              class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none"
              href="#"
            >
              Start Bootstrap
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button> */}
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
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
