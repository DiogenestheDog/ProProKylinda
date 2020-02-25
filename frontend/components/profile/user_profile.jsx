import React from 'react';
import UserIndexContainer from '../posts/user_index_container';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     user: 
        // }

    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllUserPosts(this.props.id);
        console.log(this.props.id)
       // this.props.getAllPosts();
    }

    render() {
        
        return (<div>
            <h1 className="user-index">{this.props.user.username}</h1>
            <div className="grid-feed">
                <UserIndexContainer />
            </div>
        </div>);
    }
}

export default UserProfile;