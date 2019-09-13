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
            <ul>
                {this.props.errors ? this.props.errors.map( (error, i) => (
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
                />
            </label>
        );
    }

    render() {
        const { formType, errors } = this.props;
        return (
        <div className="session-form">
            <h1>ProProKylinda</h1>
            
            <Link to={formType === "login" ? "signup" : "login"} >
                {formType === "login" ? "Sign Up" : "Log In"}
            </Link>
            {this.renderErrors()}
            
            <form onSubmit={this.handleSubmit}>
            <label>
                <input type="text"
                    value={this.state.email}
                    placeholder="Email"
                    onChange={this.update('email')}
                />
            </label>
            <label>
                <input type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                />
            </label>
            {formType === 'signup' ? this.askForUsername() : "" }
            <button type="submit" >{`Enter`}</button>
        </form>
        </div>)
    }
}

export default SessionForm;