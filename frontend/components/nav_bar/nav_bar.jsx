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

    toSignup() { history.push('/signup'); }

    navButton() {
        const login = (
            <Link to="/login">
                <div className="flat-button">Log In</div>
            </Link>
        );

        const logout = (
            <Link to="/login">
                <div className="flat-button">Log Out</div>
            </Link>
        );

        const signup = (
            <Link to="/signup">
                <div className="flat-button">Sign Up</div>
            </Link>
        );

        return this.props.loggedIn ? logout : this.props.path === "/signup" ? login : signup;
    }

    render() {
        const { loggedIn } = this.props;
        return (<nav className={loggedIn ? "logged-in top-nav" : "top-nav"}>
            <div className="left-nav">
                <h1 className="rainbow-letter">[ p ]</h1>
            </div>
            <div className="right-nav"> 
                {this.navButton()}
            </div>
        </nav>);
    }
}

export default NavBar;