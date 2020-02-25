import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.getOut = this.getOut.bind(this);
    }

    getOut(e) {
        e.preventDefault();
        this.props.logout();
    }

    // toSignup() { history.push('/signup'); }

    navButton() {
        const login = (
            <Link to="/login">
                <div className="flat-button logout-button">Log In</div>
            </Link>
        );

        const logout = (
                <div onClick={this.getOut} className="flat-button logout-button">Log Out</div>
        );

        const signup = (
            <Link to="/signup">
                <div className="flat-button logout-button">Sign Up</div>
            </Link>
        );

        return this.props.sessionId != undefined ? logout : this.props.path === "/signup" ? login : signup;
    }

    render() {
        const { sessionId } = this.props;
        return (<nav className={sessionId != undefined ? "logged-in top-nav" : "top-nav"}>
            <div className="left-nav">
                <h1 className="rainbow-letter">[ p ]</h1>
            </div>
            <div className="right-nav">
                <Link to={`/profile/${sessionId}`} >
                    <i className="material-icons" id="profile-button">perm_identity</i>
                </ Link>
                {this.navButton()}
            </div>
        </nav>);
    }
}

export default NavBar;