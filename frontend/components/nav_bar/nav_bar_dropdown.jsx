import React from 'react';

class NavBarDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.logout().then(this.props.closeModal)
        this.props.history.push('/');
    }

    render() {
        return(
            <div className="modal-dropdown">
                <ul>
                    <input className="modal-logout" 
                    type="submit"
                    value="Log out"
                    onClick={this.handleSubmit}
                    />
                </ul>
            </div>
        )
    }

}

   

export default NavBarDropdown;