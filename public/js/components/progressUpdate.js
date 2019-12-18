class Progress extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: "",
        log: "",
        verificationStatus: false,
        refereeComments: "",
        users: [],
        commitments: [],
        progress:[]
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
        fetch("/commitments")
          .then(response => response.json())
          .then(commitments => {
            console.log(commitments);
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
    
        fetch("/progressUpdate/"+this.props.match.params.commitmentId, { 
          body: JSON.stringify(this.state),
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          }
        })
          .then(createdProgress => {
            console.log("fetch worked. currently at created progress");
            return createdProgress.json();
          })
          .then(jsonedProgress => {
            console.log(
                "created progress worked. currently at jsoned progress"
            );
            this.setState({
                date: "",
                log: "",
                users: [],
                commitments: [], //Access createdProgress
                progress:[] //Spread Operator
            });
            console.log("BREAK");
            console.log(jsonedProgress);
            console.log("commitmentId:"+this.props.match.params.commitmentId)

            // PUT to commitments to update progess
            // fetch("/commitments/"+this.props.match.params.commitmentId, { 
            //   body: JSON.stringify(jsonedProgress),
            //   method: "PUT",
            //   headers: {
            //     Accept: "application/json, text/plain, */*",
            //     "Content-Type": "application/json"
            //   }
            // })
            // .then(updatedCommitment => {
            //   console.log("fetch worked. currently at updated commitment");
            //   return updatedCommitment;
            // })
            

            // fetch("/commitments")
            // .then(response => response.json())
            // .then(commitments => {
            //     console.log(commitments);
            //     this.setState({
            //     commitments: commitments
            //     });
            // });
          })
          .catch(error => console.log(error));
      }

    render() {
        return(
            <div>
                {/* Render Progress Update Form for User/Buddy */}
                <form onSubmit={this.handleSubmit}>
                    {/* Edit Progress */}
                    <h2 class="section-heading mb-4">
                        <span class="section-heading-upper">Date:</span>
                    </h2>
                    <label
                    htmlFor="date"
                    class="section-heading-upper"
                    ></label>
                    <input
                    type="date"
                    name="date"
                    id="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    />    
                    
                    <h2 class="section-heading mb-4">
                        <span class="section-heading-upper">Progress Log:</span>
                    </h2>
                    <label
                    htmlFor="log"
                    class="section-heading-upper"
                    ></label>
                    <input
                    type="text"
                    name="log"
                    id="log"
                    value={this.state.log}
                    onChange={this.handleChange}
                    /> 
                    <br></br>
                    {/* Submit Button */}
                    <input type="submit" value="submit" />
                </form>

                {/* Render Verification Update for Referee */}
            </div>
        )
    }
}
