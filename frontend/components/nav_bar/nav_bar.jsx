import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        this.getOut = this.getOut.bind(this);
    }

    getOut(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.logout();
    }

    render() {
        const { loggedIn } = this.props;
        return (<nav className={loggedIn ? "logged-in top-nav" : "top-nav"}>
            <div className="left-nav">
                <h1 className="rainbow-letter">[ p ]</h1>
            </div>
            <div className="right-nav"> 
                <button className="logout-button flat-button" onClick={this.getOut}>
                    {loggedIn ? "Log Out" : "Sign In"}
                    </button>
            </div>
        </nav>);
    }
}

export default NavBar;