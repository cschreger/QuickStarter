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
        this.props.logIn(this.state).then(() => this.props.history.push("/"))
    }

    renderErrors() {
        return (
            <ul>
                {Object.values(this.props.errors)}
            </ul>
        );
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
            <div className="main-content">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <div className="login-window">
                    <h3 className="log-in-header">Log in</h3>
                    <div className="login-errors">{this.renderErrors()}</div>
                        <input className="login-form-field"
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />

                        <input className="login-form-field"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    <button className = "login-button" 
                            onSubmit={this.handleSubmit}>
                            {this.props.formType}
                    </button>

                    <br/>
                    <br/>

                    <div className="line-strikethrough">
                        <p className="text"> or </p>
                    </div>
                    <br/>

                    <button className="demo-login" onClick={this.demoLogin}>
                        Demo Login
                    </button>
                    <br/><br/>
                    <div className="switch-to-signup">New to Quickstarter? {this.props.navLink}</div>

                    </div>
                </form>
            </div>
        );
    }
}

export default LoginForm;