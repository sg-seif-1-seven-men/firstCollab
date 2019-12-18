class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitment: "Exercise once a week",
      duration: "",
      frequency: "",
      owner: this.props.currentUser._id,
      buddy: "",
      referee: "",
      success: "",
      // progress: "Raring to Go!",
      users: [],
      commitments: []
    };
  }
  componentDidMount() {
    fetch("/users")
      .then(response => response.json())
      .then(users => {
        this.setState({
          users: users
        });
      });
    fetch("/commitments")
      .then(response => response.json())
      .then(commitments => {
        console.log(commitments);
        this.setState({
          commitments: commitments
        });
      });
  }

  componentDidUpdate() {
    // fetch("/users")
    //   .then(response => response.json())
    //   .then(users => {
    //     console.log(users);
    //     this.setState({
    //       users: users
    //     });
    //   });
    // fetch("/commitments")
    //   .then(response => response.json())
    //   .then(commitments => {
    //     console.log(commitments);
    //     this.setState({
    //       commitments: commitments
    //     });
    //   });
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
    if (
      this.state.buddy === this.props.currentUser._id ||
      this.state.referee === this.props.currentUser._id
    ) {
      console.log(
        "You can't be your own referee or buddy! Don't try to cheat!"
      );
      alert("You can't be your own referee or buddy! Don't try to cheat!");
    } else {
      fetch("/commitments", {
        body: JSON.stringify(this.state),
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
      .then(jsonedCommitment => {
        console.log(
          "created commitment worked. currently at jsoned commitment"
        );
        this.setState({
          commitment: "Exercise once a week",
          duration: "",
          frequency: "",
          owner: this.props.currentUser._id,
          buddy: "",
          referee: "",
          success: "",
          // progress: "Raring to Go!"
        });
        console.log(jsonedCommitment);

          fetch("/commitments")
            .then(response => response.json())
            .then(commitments => {
              console.log(commitments);
              this.setState({
                commitments: commitments
              });
            });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    return (
      <div class="text-center text-white d-none d-lg-block">
        <br></br>
        {/* Create Commitment  */}
        <h3>Make a Commitment to a New Goal Today!</h3>
        <br></br>

        <form onSubmit={this.handleSubmit}>
          {/* Select Commitment */}
          <div>
            I am committing to a goal of:<br></br>
            <select
              value={this.state.commitment}
              onChange={this.handleChange}
              id="commitment"
            >
              <option value="Exercise">Exercise</option>
              <option value="Not smoke">Not smoke</option>
              <option value="Eat Vegetables">Eat Vegetables</option>
            </select>
            <select
              value={this.state.frequency}
              onChange={this.handleChange}
              id="frequency"
            >
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="3x per Week">3x per Week</option>
            </select>
            &nbsp;for&nbsp;
            <select
              value={this.state.duration}
              onChange={this.handleChange}
              id="duration"
            >
              <option value="1 month">1 month</option>
              <option value="2 months">2 months</option>
              <option value="3 monhts">3 months</option>
            </select>
            <br></br>
          </div>
          <br></br>

          {/* Populate Owner */}
          <div>
            Your Goals Community: <br></br>
            <select
              value={this.state.owner}
              onChange={this.handleChange}
              id="owner"
            >
              <option value={this.props.currentUser._id}>
                {this.props.currentUser.username}
              </option>
            </select>
            {/* Populate Buddy  */}
            &nbsp;partnering with&nbsp;
            <select
              value={this.state.buddy}
              onChange={this.handleChange}
              id="buddy"
            >
              <option>Select Buddy</option>
              {this.state.users.map(user => {
                return <option value={user._id}>{user.username}</option>;
              })}
            </select>
            {/* Populate Referee  */}
            &nbsp;held accountable by&nbsp;
            <select
              value={this.state.referee}
              onChange={this.handleChange}
              id="referee"
            >
              <option>Select Referee</option>
              {this.state.users.map(user => {
                return <option value={user._id}>{user.username}</option>;
              })}
            </select>
            <br></br>
            <br></br>
          </div>
          {/* Populate Progress Status  */}
          {/* <div>
            My progress status is:<br></br>
            <select
              value={this.state.progress}
              onChange={this.handleChange}
              id="progress"
            >
              <option value="Raring to Go!">Raring to Go!</option>
              <option value="On Track!">On Track!</option>
              <option value="Need Help!">Need Help!</option>
            </select>
          </div>
          <br></br> */}
          {/* Submit Button */}
          <input type="submit" value="submit" />
        </form>
        <br></br>
        {/* <h3>Selected Info for your Verification before Submission</h3>
        <h5>Owner: {this.state.owner}</h5>
        <h5>Buddy: {this.state.buddy}</h5>
        <h5>Referee: {this.state.referee}</h5> */}
        {/* View/Update Commitments  */}
        <div class="text-center text-white d-none d-lg-block">
          <br></br>
          <h3>Dashboard - Commitments you Initiated!</h3>
          <br></br>
          <table class="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Commitment</th>
                <th scope="col">Buddy</th>
                <th scope="col">Referee</th>
                <th scope="col">Progress</th>
                <th scope="col">Update Progress</th>
                <th scope="col">Referee Comments</th>
              </tr>
            </thead>
            <tbody>
              {this.state.commitments.map(commitment => {
                return this.props.currentUser._id === commitment.owner._id ? (
                  <tr>
                    <td> {commitment.commitment} </td>
                    <td> {commitment.buddy.username} </td>
                    <td> {commitment.referee.username} </td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].log : "Null"} </td>
                    <td>
                      {/* <Link to="/update">Update Progress</Link> */}
                      <Link to={{pathname: `/update/${commitment._id}`}}>Update Progress</Link>
                    </td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].refereeComments : "Null"} </td>
                  </tr>
                ) : (
                  ""
                );
              })}

              {/* {this.props.currentUser._id === commitment.owner._id ? (
                this.state.commitments.map(commitment => {
                  return;
                  <tr>
                    <td> {commitment.commitment} </td>
                    <td> {commitment.buddy.username} </td>
                    <td> {commitment.referee.username} </td>
                    <td> {commitment.progress} </td>
                    <td> {commitment.progress} </td>
                  </tr>;
                })
              ) : (
                <tr>
                  <td> You have no commitments at the moment! </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>

        <div class="text-center text-white d-none d-lg-block">
          <br></br>
          <h3>Dashboard - Commitments you have agreed to!</h3>
          <br></br>
          <table class="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Commitment</th>
                <th scope="col">Owner</th>
                <th scope="col">Referee</th>
                <th scope="col">Progress</th>
                <th scope="col">Update Progress</th>
                <th scope="col">Referee Comments</th>
              </tr>
            </thead>
            <tbody>
              {this.state.commitments.map(commitment => {
                return this.props.currentUser._id === commitment.buddy._id ? (
                  <tr>
                    <td> {commitment.commitment} </td>
                    <td> {commitment.owner.username} </td>
                    <td> {commitment.referee.username}</td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].log : "Null"} </td>
                    <td>
                      <Link to={{pathname: `/update/${commitment._id}`, query:"/update"}}>Update Progress</Link>
                    </td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].refereeComments : "Null"} </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        </div>

        <div class="text-center text-white d-none d-lg-block">
          <br></br>
          <h3>Dashboard - Commitments you are Refereeing!</h3>
          <br></br>
          <table class="table table-dark table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">Commitment</th>
                <th scope="col">Owner</th>
                <th scope="col">Buddy</th>
                <th scope="col">Progress</th>
                <th scope="col">Referee Comments</th>
                <th scope="col">Verify</th>
              </tr>
            </thead>
            <tbody>
              {this.state.commitments.map(commitment => {
                return this.props.currentUser._id === commitment.referee._id ? (
                  <tr>
                    <td> {commitment.commitment} </td>
                    <td> {commitment.owner.username} </td>
                    <td> {commitment.buddy.username} </td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].log : "Null"} </td>
                    <td> {commitment.progress.length > 0 ? commitment.progress[commitment.progress.length - 1].refereeComments : "Null"} </td>
                    <td>
                      <Link to="/update">Verify as Referee</Link>
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
