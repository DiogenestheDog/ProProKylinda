import React from 'react';

class AudioPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        const { header, body, imageURL } = this.props.post
        return (
            <div className="post-item">
                <img className="post-item-avatar" src={avatarUrl} ></img><div className="post-item-username">{username}</div>
                <h4>{header}</h4>
                {imageURL ? (<audio controls><source src={imageURL} type="audio/ogg"></source></audio>) : ""}
                <div>{body}</div>
            </div>
        );
    }
}

export default AudioPost;