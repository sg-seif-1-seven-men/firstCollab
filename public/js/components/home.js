class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }
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
                  <span class="section-heading-upper">Most Popular Goal</span>
                  <span class="section-heading-lower">Get Fit this Year</span>
                </h2>
                <p class="mb-3">
                  Find a friend, pick a consequence, and leverage the power of
                  behavioral economics to motivate yourself to get fit this
                  year!
                </p>
                <div class="intro-button mx-auto">
                  <a class="btn btn-primary btn-xl" href="#">
                    Set your goal today!
                  </a>
                </div>
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
    );
  }
}
