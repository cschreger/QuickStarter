import React from 'react';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return(e) => 
            this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signUp(Object.assign({}, this.state))
            .then(() => this.props.history.push("/"))

    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors)}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className='signup-window'>
                    <div className="switch-to-login">Have an account? {this.props.navLink}</div>
                    <h3 className="signup-header">Sign Up</h3>
                    <div className="signup-errors">{this.renderErrors()}</div>

                        <input className='signup-form-field'
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput('name')}
                        />
           

                        <input className='signup-form-field'
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />

                        <input className='signup-form-field'
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />

                    <button className="signup-button">
                        {this.props.formType}
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignupForm;