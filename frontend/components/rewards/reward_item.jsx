import React from 'react';
import ProjectShowContainer from '../projects/project_show_container';

class RewardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pledgeAmt: `Pledge $${this.props.reward.pledge_amt} or more`,
            clicked: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }


    handleClick(e) {
        e.preventDefault();

        this.setState({
            clicked: !this.state.clicked,
            pledgeAmt: this.props.reward.pledge_amt
        })

    }


    handleSubmit(e) {
        e.preventDefault();

        if (!this.props.currentUser) {
            this.props.history.push("/login")
        }

        const backing = {
            backer_id: this.props.currentUser.id,
            project_id: this.props.project.id,
            reward_id: this.props.reward.id
        }

        const projectUpdates = {
            id: this.props.project.id,
            pledged_amt: (this.props.project.pledged_amt + (parseInt(this.state.pledgeAmt, 10)))
        }

        this.props.createBacking(backing)
            .then(() => this.props.updateProject(projectUpdates))

        let element = document.getElementById("project")
        element.scrollIntoView({ behavior: 'smooth' });
        
        this.setState({
          pledgeAmt: `Pledge $${this.props.reward.pledge_amt} or more`
        });
    }

    render() {

        let {reward, currentUser} = this.props
        let clicked = this.state.clicked

        return (
            <div className="reward-items-container">
                <div className="reward-color">
                    <div className={`reward ${clicked === true ? "clicked" : ""}`}>
                        <div className="pledge-title">
                            <h2>Pledge ${reward.pledge_amt} or more</h2>
                        </div>

                        <div className="reward-checkout">
                            <div className="pledge-input">
                                <input onClick={this.handleClick}
                                    type="text"
                                    onChange={this.handleInput('pledgeAmt')}
                                    value={this.state.pledgeAmt}
                                />
                            </div>

                            <div className="backing-statement">
                                <h3>{reward.title}</h3>
                                <h5>{reward.description}</h5>
                            </div>
                        </div>

                        <div id='submit-backing-container'>
                            <button
                                className={`back-reward ${this.state.pledgeAmt >= reward.pledge_amt ? "ready" : ""}`}
                                onClick={this.handleSubmit}
                            >Back This Project</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default RewardItem;