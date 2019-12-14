class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitment: "Exercise once a week",
      owner: "",
      buddy: "",
      referee: "",
      success: "",
      progress: "On Track",
      users: []
    };
  }
  componentDidMount() {
    fetch("/users")
      .then(response => response.json())
      .then(users => {
        console.log(users);
        this.setState({
          users: users
        });
      });
  }
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   const newCommitment = {
  // commitment: this.state.commitment,
  // owner: this.state.owner,
  // buddy: this.state.buddy,
  // referee: this.state.referee,
  // success: this.state.success,
  // progress: this.state.progress
  //   };
  //   this.setState({
  //     commitment: "Exercise once a wee",
  //     owner: "",
  //     buddy: "",
  //     referee: "",
  //     success: "",
  //     progress: "On Track",
  //     commitments: [newCommitment, ...this.state.commitments]
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();

    fetch("/commitments", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdCommitment => {
        console.log("fetch worked. currently at created commitment");
        return createdCommitment;
      })
      .then(jsonedCommitment => {
        console.log(
          "created commitment worked. currently at jsoned commitment"
        );
        this.setState({
          commitment: "Exercise once a wee",
          owner: "",
          buddy: "",
          referee: "",
          success: "",
          progress: "On Track"
        });
        console.log(jsonedCommitment);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div class="text-center text-white d-none d-lg-block">
        <br></br>
        <h3>Make a new Commitment Today!</h3>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          {/* Select Commitment */}
          <div>
            I am committing to:<br></br>
            <select
              value={this.state.commitment}
              onChange={this.handleChange}
              id="commitment"
            >
              <option selected value="Exercise once a week">
                Exercise once a week
              </option>
              <option value="Not smoke for the week">
                Not smoke for the week
              </option>
            </select>
            <br></br>
          </div>
          <br></br>
          {/* Populate Owner */}
          <div>
            Owner: <br></br>
            <select
              value={this.state.owner}
              onChange={this.handleChange}
              id="owner"
            >
              {this.state.users.map(user => {
                return <option value={user._id}>{user.username}</option>;
              })}
            </select>
            <br></br>
            <br></br>
            {/* Populate Buddy  */}
            Buddy: <br></br>
            <select
              value={this.state.buddy}
              onChange={this.handleChange}
              id="buddy"
            >
              {this.state.users.map(user => {
                return <option value={user._id}>{user.username}</option>;
              })}
            </select>
            <br></br>
            <br></br>
            {/* Populate Referee  */}
            Referee: <br></br>
            <select
              value={this.state.referee}
              onChange={this.handleChange}
              id="referee"
            >
              {this.state.users.map(user => {
                return <option value={user._id}>{user.username}</option>;
              })}
            </select>
            <br></br>
            <br></br>
          </div>
          {/* Populate Progress Status  */}
          <div>
            My progress status is:<br></br>
            <select
              value={this.state.progress}
              onChange={this.handleChange}
              id="progress"
            >
              <option value="On Track">On Track!</option>
              <option value="Need Help">Need Help!</option>
            </select>
          </div>
          <br></br>
          {/* Submit Button */}
          <input type="submit" value="submit" />
        </form>
        <br></br>
        {/* <h3>Submitted Info</h3>
        <h5>Owner: {this.state.owner}</h5>
        <h5>Buddy: {this.state.buddy}</h5>
        <h5>Referee: {this.state.referee}</h5> */}
      </div>
    );
  }
}
