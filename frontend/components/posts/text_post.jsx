import React from 'react';

class TextPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        const { header, body } = this.props.post
        return (
            <div className="post-item">
                <img className="post-item-avatar" src={avatarUrl} />
                <div className="post-item-username">{username}</div>
                <h4>{header}</h4>
                <div>{body}</div>
            </div>
        );
    }
}

export default TextPost;