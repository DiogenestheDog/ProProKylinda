import React from 'react';

import PostIndexContainer from '../posts/post_index_container';

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null,
            photoUrl: "",
            buttonClicked: false,
            postHeader: "",
            postBody: ""
        };
        this.previewNewAvatar = this.previewNewAvatar.bind(this);
        this.updateAvatar = this.updateAvatar.bind(this);
        this.revealPostForm = this.revealPostForm.bind(this);
        this.dispatchPost = this.dispatchPost.bind(this);
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

    revealPostForm(e) {
        e.preventDefault();
        let veracity = this.buttonClicked === false ? true : false;
        this.setState({
            buttonClicked: veracity
        });
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

    dispatchPost(e) {
        e.preventDefault();
        const { header, body } = this.state;
        const user_id = this.props.user.id;
        const post = {
            header,
            body,
            user_id,
            post_type: "text"
        };
        this.props.createPost(post);
        this.setState({
            header: "",
            body: ""
        });
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        })
    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllPosts();
    }

    render() {
        console.log(this.state.buttonClicked);
        const { username, avatarUrl } = this.props.user;
        // console.log(revealPostForm);
        window.user = this.props.user;
        window.state = this.state;
        window.props = this.props;
        let { photoUrl } = this.state;
        return (<div className="post-container">
            <h1>Home of {username}</h1>
            <img className="user-avatar" src={photoUrl ? photoUrl : avatarUrl} />
            <div className="post-buttons">
                <div className="post-button text-post" onClick={this.revealPostForm} >
                    <i className="material-icons md-48">text_fields</i>
                    <div>Text</div></div>
                <div className="post-button photo-post" onClick={this.revealPostForm} >
                    <i className="material-icons md-48">camera_alt</i>
                    <div>Photo</div></div>
                <div className="post-button quote-post" onClick={this.revealPostForm} >
                    <i className="material-icons md-48">format_quote</i>
                    <div>Quote</div>
                </div>
                <div className="post-button chat-post" onClick={this.revealPostForm} >
                    <i className="material-icons md-48">mood</i>
                    <div>Chat</div>
                </div>
                <div className={this.buttonClicked ? "post-form-container" :  "post-form-container-revealed"}>
                    <h2>Let's Post</h2>
                    <form className="post-form">
                        <input type="text" onChange={this.update('header')} placeholder="header" />
                        <input type="textarea" onChange={this.update('body')} placeholder="Watcha thinking about?" />
                        <button onClick={this.dispatchPost} type="submit">Do it</button>
                    </form>
                </div>
            </div>
           
            <div className="grid-feed">
                
                <PostIndexContainer />
          
            </div>
        </div>)
    }
}

export default Splash;