import React from 'react';

class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        const { postType, header, body, imageURL } = this.props.post
        return (
            <div className="post-item">
                <img className="post-item-avatar" src={avatarUrl} ></img><div className="post-item-username">{username}</div>
                <h4>{header}</h4>
                <img src={imageURL} className="post-img" />
                <div>{body}</div>
            </div>
        );
    }
}

export default PostItem;