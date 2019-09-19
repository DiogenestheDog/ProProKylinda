import React from 'react';

import PostIndexContainer from '../posts/post_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null,
            photoUrl: ""
        };
        this.previewNewAvatar = this.previewNewAvatar.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
    }

    previewNewAvatar(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            return this.setState({
                photoFile: file,
                photoUrl: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({photoFile: null, photoUrl: ""});
        }

    }

    updateAvatar(e) {
        let formData = new FormData();
        formData.append('user[username]', this.props.user.username);
        formData.append('user[id]', this.props.id)
        if (this.state.photoFile) {
            formData.append('user[avatar]', this.state.photoFile);
        }
    
        this.props.changeUser(formData);

    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllPosts();
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        window.user = this.props.user;
        window.state = this.state;
        window.props = this.props;
        let { photoUrl } = this.state;
        return (<div className="post-container">
            <h1>Home of {username}</h1>
            <img className="user-avatar" src={photoUrl ? photoUrl : avatarUrl} />
            <div className="post-buttons">
                <div className="post-button text-post">
                    <i className="material-icons md-48">text_fields</i>
                    <div>Text</div></div>
                <div className="post-button photo-post">
                    <i className="material-icons md-48">camera_alt</i>
                    <div>Photo</div></div>
                <div className="post-button quote-post">
                    <i className="material-icons md-48">format_quote</i>
                    <div>Quote</div>
                </div>
                <div className="post-button chat-post">
                    <i className="material-icons md-48">mood</i>
                    <div>Chat</div>
                </div>
            </div>
            <div className="grid-feed">
                
                <PostIndexContainer />
          
            </div>
        </div>)
    }
}

export default Splash;