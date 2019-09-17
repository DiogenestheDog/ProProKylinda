import React from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
                username: "",
                email: "",
                password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({ 
            email: "",
            password: "",
            username: ""
        });
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul className="error-list">
                { Array.isArray(this.props.errors) ? this.props.errors.map( (error, i) => (
                    <li key={`key-${i}`}>{error}</li>
                    )
                ) : ""}
            </ul>
        )
    }

    askForUsername() {
        return (
            <label>
                <input type="text"
                    value={this.state.username}
                    placeholder="Username"
                    onChange={this.update('username')}
                    className="flat-input"
                />
            </label>
        );
    }

    render() {
        const { formType, errors } = this.props;
        let { username, email, password } = this.state;
        return (
        <div className="session-container">
            <div className="session-form">
                <div className="title-container">
                    <h1 className="title-text">Warbler</h1>
                </div>
                <div className="form-container">
                   {this.renderErrors()}
                    
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text"
                            value={email}
                            placeholder="Email"
                            onChange={this.update('email')}
                            className="flat-input sliding-from-right"
                        />
                    </label>
                    <label>
                        <input type="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="flat-input email-input sliding-from-right"
                        />
                    </label>
                    {formType === 'signup' ? this.askForUsername() : "" }
                            <button onClick={this.buttonHandler} className="login flat-button" type="submit" >
                                {formType === "login" ? "Log In" : "Sign Up"}
                            </button>
                    </form>
                </div>
            </div>
        </div>)
    }
}

export default SessionForm;