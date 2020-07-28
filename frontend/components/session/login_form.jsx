import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.logIn(this.state)
    }

    demoLogin(e){
        e.preventDefault();

        this.setState({
            email: "demologin@gmail.com",
            password:"hunter12"
        }, () => this.props.logIn(Object.assign({}, this.state)))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}className="login-form">
                    <h2 className="log-in-header">Log in</h2>
                        <input
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    <button onSubmit={this.handleSubmit}>{this.props.formType}</button>

                    <br/>
                    <br/>

                    <p> or </p>

                    <button onClick={this.demoLogin}>Demo Login</button>
                    <br/><br/>
                    <div className="switch-to-signup">New to Quickstarter? {this.props.navLink}</div>
                </form>
            </div>
        );
    }
}

export default LoginForm;