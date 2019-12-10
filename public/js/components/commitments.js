class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      buddy: "",
      referee: "",
      commitments: []
    };
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newCommitment = {
      owner: this.state.owner,
      buddy: this.state.buddy,
      referee: this.state.referee
    };
    this.setState({
      owner: "",
      buddy: "",
      referee: "",
      commitments: [newCommitment, ...this.state.commitments]
    });
  };

  render() {
    return (
      <div class="text-center text-white d-none d-lg-block">
        <br></br>
        <h3>Make a new Commitment Today!</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              I am committing to:<br></br>
              <input name="newCommitment" value="1" type="checkbox" />
              <span> Exercise once a week</span>
              <br></br>
              <input name="newCommitment" value="2" type="checkbox" />
              <span> Not smoke for the week</span>
              <br></br>
            </label>
            <br></br>
          </div>
          <div>
            <input
              type="text"
              name="owner"
              value={this.state.owner}
              onChange={this.handleChange}
              id="owner"
            />
            <br />
            <input
              type="text"
              name="buddy"
              value={this.state.buddy}
              onChange={this.handleChange}
              id="buddy"
            />
            <br />
            <input
              type="text"
              name="referee"
              value={this.state.referee}
              onChange={this.handleChange}
              id="referee"
            />
            <br />
          </div>
          <div>
            <label>
              Progress:<br></br>
              <input name="progress" value="1" type="checkbox" />
              <span> On Track! </span>
              <br></br>
              <input name="progress" value="2" type="checkbox" />
              <span> Need Help!</span>
            </label>
          </div>
          <input type="submit" />
        </form>
        <br></br>
        <h1>Submitted Info</h1>
        <h4>Owner: {this.state.owner}</h4>
        <h4>Buddy: {this.state.buddy}</h4>
        <h4>Referee: {this.state.referee}</h4>
      </div>
    );
  }
}
