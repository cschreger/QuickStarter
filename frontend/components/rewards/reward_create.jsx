import React from 'react';
import {Link} from 'react-router-dom';

class RewardCreate extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: "",
            pledgeAmt: "",
            description: "",
            deliveryDate: "",
            shipTo: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
    }

    
    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }



    handleSubmit(e) {
        e.preventDefault();
        let rewardData = new FormData();

        rewardData.append('reward[project_id]', this.props.project.id)
        rewardData.append('reward[title]', this.state.title)
        rewardData.append('reward[description]', this.state.description)
        rewardData.append('reward[delivery_date]', this.state.deliveryDate)
        rewardData.append('reward[pledge_amt]', this.state.pledgeAmt)
        rewardData.append('reward[ship_to]', this.state.shipTo)
   

        if (e.target.id === "create-reward") {
            this.props.createReward(rewardData)
                .then(() => {
                    return this.props.history.last
                })
        }

        this.setState({
            title: "",
            pledgeAmt: "",
            description: "",
            deliveryDate: "",
            shipTo: ""
        })
    }


    render() {
        if (this.props.project.creator_id != this.props.currentUser.id) {
          this.props.history.push("/");
        }

        let {title, pledgeAmt, description, deliveryDate, shipTo} = this.state;

        return (
          <div className="rewards-add-container">
            <div className="rewards-info-container">
              <h2>Add your rewards</h2>
              <h4>
                Offer simple, meaningful rewards that bring backers closer to
                your project. Rewards don't have to be physical items. Consider
                special experiences or behind-the-scenes peeks into your
                project.
              </h4>
            </div>
            <div className="reward-form-container">
              <form className="add-reward-form">
                <div className="reward-selections">
                  <label className="reward-title">
                    Title
                    <input
                      type="text"
                      value={title}
                      placeholder="Signed limited edition"
                      onChange={this.handleInput("title")}
                    />
                  </label>

                  <label className="reward-pledge">
                    Amount
                    <input
                      type="number"
                      value={pledgeAmt}
                      placeholder="USD"
                      onChange={this.handleInput("pledgeAmt")}
                    />
                  </label>

                  <label className="reward-description">
                    Description
                    <input
                      type="text"
                      value={description}
                      placeholder="Get an early copy - hot off the presses!"
                      onChange={this.handleInput("description")}
                    />
                  </label>

                  <label className="reward-delivery-date">
                    Delivery Date
                    <input
                      type="date"
                      value={deliveryDate}
                      onChange={this.handleInput("deliveryDate")}
                    />
                  </label>

                  <label className="reward-shipping">
                    Ship To
                    <select
                      value={shipTo}
                      placeholder="Select an option"
                      onChange={this.handleInput("shipTo")}
                    >
                      <option value="" disabled hidden>
                        Choose a shipping option
                      </option>
                      <option value="Anywhere in the world">
                        Anywhere in the world
                      </option>
                      <option value="U.S.A">U.S.A.</option>
                      <option value="No shipping">No shipping</option>
                    </select>
                  </label>
                </div>

                <button
                  id="create-reward"
                  className={`add-reward-button ${
                    title &&
                    pledgeAmt > 1 &&
                    description &&
                    deliveryDate &&
                    shipTo
                      ? "ready"
                      : ""
                  }`}
                  onClick={this.handleSubmit}
                >
                  Add Reward
                </button>

                <button>
                  <Link to={`/projects/${this.props.match.params.projectId}`}>
                    I'm all done adding rewards
                  </Link>
                </button>
              </form>
            </div>
          </div>
        );
    }

}

export default RewardCreate;