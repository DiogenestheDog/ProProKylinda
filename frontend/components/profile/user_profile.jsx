import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        console.log(this.props);
    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllPosts();
    }

    render() {
        console.log(this.props);
        return (<div className="grid-feed">
            <PostIndexContainer />
        </div>);
    }
}

export default UserProfile;