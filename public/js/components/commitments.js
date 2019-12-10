// class Commitments extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> This is the Commitments Page </h1>
//         <h2> Testing </h2>
//       </div>
//     );
//   }
// }

class Commitments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commitments: []
    };
  }

  componentDidMount() {
    console.log("component did mount");
    fetch("/commitments")
      .then(response => response.json())
      .then(commitments => {
        console.log("commitments:" + commitments);
        this.setState({
          commitments: commitments
        });
      });
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("/commitments", {
      body: JSON.stringify({ description: this.state.description }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdCommitments => {
        return createdCommitments.json();
      })
      .then(jsonedCommitments => {
        // reset the form
        // add person to list
        this.setState({
          description: "",
          todos: [jsonedCommitments, ...this.state.commitments]
        });
        console.log(jsonedCommitments);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h1> Commitments </h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
          />
          <input type="submit" />
        </form>
        <table>
          <tbody>
            {this.state.commitments
              ? this.state.commitments.map(commitment => {
                  return (
                    <tr>
                      <td> {commitment.description} </td>
                      <td> X </td>
                      <td> complete </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </table>
      </div>
    );
  }
}
