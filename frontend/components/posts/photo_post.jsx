import React from 'react';

class PhotoPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        const { header, body, imageURL } = this.props.post
        return (
            <div className="post-item">
                <img className="post-item-avatar" src={avatarUrl} />
                <div className="post-item-username">{username}</div>
                <h4>{header}</h4>
                {imageURL ? (<img src={imageURL} className="post-img" />) : ""}
                <div>{body}</div>
            </div>
        );
    }
}

export default PhotoPost;