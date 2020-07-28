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
    }


    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form">
                    <div className='signup-window'>
                    <div className="switch-to-login">Have an account? {this.props.navLink}</div>
                    <h2 className="signup-header">Sign Up</h2>
                
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