import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username } = this.props.user;
        const { postType, header, body, images } = this.props.post
        return (
            <div className="post-item">
                <h3>{username}</h3>
                <h4>{header}</h4>
                <div>{body}</div>
            </div>
        );
    }
}

export default PostItem;