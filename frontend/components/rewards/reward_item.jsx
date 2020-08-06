import React from 'react';
import ProjectShowContainer from '../projects/project_show_container';

class RewardItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pledgeAmt: 0
        }
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {

        let {reward, currentUser} = this.props
        return (
            <div className="reward-items-container">
                <div></div>
            </div>
        )
    }

}

export default RewardItem;