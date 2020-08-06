import React from 'react';
import ProjectShowContainer from '../projects/project_show_container';

class RewardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pledgeAmt: 0,
            clicked: false
        }
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
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
                    <li className={`reward ${clicked === true ? "clicked" : ""}`} onClick={this.handleClick}>
                        <div className="pledge-title">
                            <h2>{reward.title}</h2>
                        </div>

                        <div className="reward-checkout">
                            <div className="pledge-input">
                                <input
                                    type="text"
                                    placeholder="Pledge any amount"
                                    onChange={this.handleInput('pledgeAmt')}
                                />
                            </div>

                            <div className="backing-statement">
                                <h3>Back it because you believe in it.</h3>
                                <h5>Support the project for no reward, just
                                        because it speaks to you</h5>
                            </div>
                        </div>

                        <div className={`submit-backing container ${clicked === true ? "clicked" : ""}`}>
                            <button
                                className={`back-reward ${clicked === true && pledgeAmt ? "ready" : ""}`}
                                onClick={this.handleSubmit}
                            >Back This Project</button>
                        </div>
                    </li>
                </div>
            </div>
        )
    }

}

export default RewardItem;