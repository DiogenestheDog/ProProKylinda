import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.getOut = this.getOut.bind(this);

    }
    
    getOut(e) {
        e.preventDefault();
        this.props.logout();
    }


    render() {
        return (<div>
            <button onClick={this.getOut}>Log Out</button>
            <marquee>You did it! You're in!</marquee>

        </div>)
    }
}

export default Splash;