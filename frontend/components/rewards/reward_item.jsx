import React from 'react';
import ProjectShowContainer from '../projects/project_show_container';

class RewardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pledgeAmt: 0,
            clicked: false
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const backing = {
            backer_id: this.props.currentUser.id,
            project_id: this.props.project.id,
            reward_id: this.props.reward
        }

        const projectUpdates = {
            id: this.props.project.id,
            pledged_amt: (this.props.project.pledged_amt + this.state.pledgeAmt)
        }

        this.props.createBacking(backing)
            .then(() => this.props.updateProject(projectUpdates))
    }

    render() {

        let {reward, currentUser} = this.props
        let clicked = this.state.clicked

        return (
            <div className="reward-items-container">
                <div>
                    <div className={`reward ${clicked === true ? "clicked" : ""}`} onClick={this.handleClick}>
                        <div className="pledge-title">
                            <h2>Pledge {reward.pledge_amt} or more</h2>
                        </div>

                        <div className="reward-checkout">
                            <div className="pledge-input">
                                <input
                                    type="text"
                                    placeholder={`Pledge ${reward.pledge_amt} or more`}
                                    onChange={this.handleInput('pledgeAmt')}
                                />
                            </div>

                            <div className="backing-statement">
                                <h3>{reward.title}</h3>
                                <h5>{reward.description}</h5>
                            </div>
                        </div>

                        <div className={`submit-backing container ${clicked === true ? "clicked" : ""}`}>
                            <button
                                className={`back-reward ${clicked === true && pledgeAmt ? "ready" : ""}`}
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