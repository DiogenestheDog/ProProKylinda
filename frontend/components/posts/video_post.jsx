import React from 'react';

class VideoPost extends React.Component {
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
                <video className="video-preview" controls><source src={imageURL} access="video/*" type="video/mp4"></source></video>
                <div>{body}</div>
            </div>
        );
    }
}

export default VideoPost;