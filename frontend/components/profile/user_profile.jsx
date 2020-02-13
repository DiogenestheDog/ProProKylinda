import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)


    }

    render() {
        console.log(this.props);
        return (<div className="profile">Honk Honk</div>);
    }
}

export default UserProfile;