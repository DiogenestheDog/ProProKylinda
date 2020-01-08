import React from 'react';

import PostIndexContainer from '../posts/post_index_container';
import PostModal from '../modals/post_modal';

class Splash extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null,
            photoUrl: "",
            buttonClicked: false,
            postHeader: "",
            postBody: "",
            imageUrl: "",
            imageFile: null
        };
        this.previewNewAvatar = this.previewNewAvatar.bind(this);
       // this.updateAvatar = this.updateAvatar.bind(this);
        this.togglePostForm = this.togglePostForm.bind(this);
        this.dispatchPost = this.dispatchPost.bind(this);
        this.imageReader = this.imageReader.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
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

    togglePostForm(e) {
        e.preventDefault();
   //     let veracity = ;
        this.setState({
            buttonClicked: this.state.buttonClicked === false ? true : false
        });
        console.log(this.state.buttonClicked);
       // console.log(veracity);
    }

    // updateAvatar(e) {
    //     let formData = new FormData();
    //     formData.append('user[username]', this.props.user.username);
    //     formData.append('user[id]', this.props.id)
    //     if (this.state.photoFile) {
    //         formData.append('user[avatar]', this.state.photoFile);
    //     }
    
    //     this.props.changeUser(formData);

    // }

    dispatchPost(e) {
        e.preventDefault();
        
        const { header, body, imageFile } = this.state;
        const user_id = this.props.user.id;
        let formData = new FormData();

        formData.append('post[header]', header ? header : null);
        formData.append('post[body]', body ? body : null);
        formData.append('post[user_id]', user_id ? user_id : null);
        formData.append('post[post_type]', "text");
        if (imageFile) formData.append('post[image]', imageFile);
        
        this.props.createPost(formData);
        this.setState({
            header: "",
            body: "",
            imageUrl: "",
            imageFile: null,
            buttonClicked: this.state.buttonClicked === false ? true : false
        });
    }


    chooseFile(e) {
        e.preventDefault();
        $("#file-input").click();
        console.log("honk");
    }
 
    imageReader(e) {
        const reader = new FileReader
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllPosts();
    }

    render() {
        const { username, avatarUrl } = this.props.user;
        const { openModal } = this.props;

        let { photoUrl } = this.state;
        return (
        <div className="post-container">
            <PostModal />
            <h1>Home of {username}</h1>
            <img className="user-avatar" src={photoUrl ? photoUrl : avatarUrl} />
            <div className="post-buttons">
                <div className="post-button text-post" onClick={() => openModal('text')} >
                    <i className="material-icons">text_fields</i>
                    <div>Text</div></div>
                <div className="post-button photo-post" onClick={() => openModal('photo')} >
                    <i className="material-icons">camera_alt</i>
                    <div>Photo</div></div>
                <div className="post-button quote-post" onClick={this.togglePostForm} >
                    <i className="material-icons">format_quote</i>
                    <div>Quote</div>
                </div>
                <div className="post-button chat-post" onClick={() => openModal('chat')} >
                    <i className="material-icons">mood</i>
                    <div>Chat</div>
                </div>
                <div className="post-button audio-post" onClick={this.togglePostForm} >
                    <i className="material-icons">music_note</i>
                    <div>Audio</div>
                </div>
                <div className="post-button video-post" onClick={this.togglePostForm} >
                    <i className="material-icons">videocam</i>
                    <div>Video</div>
                </div>
                {this.buttonClicked ? this.togglePostForm() : ""}
                <div className={this.state.buttonClicked ? "post-form-container-revealed scale-in-top" : "post-form-container"}>
                    <h4 className="pf-username">{username}</h4>
                    <form className="post-form">
                        <input type="text" className="post-header" onChange={this.update('header')} placeholder="header" />
                        <textarea className="post-body" type="text" onChange={this.update('body')} placeholder="Watcha thinking about?" />
                        {this.state.imageUrl ? (<img src={this.state.imageUrl} className="image-preview" />) : ""}
                        <div className="file-input-wrapper">
                            <input id="file-input" type="file" onChange={this.imageReader} />
                        </div>
                        <i className="material-icons" id="photo-upload-button" onClick={this.chooseFile} >photo_camera</i>
                        <button onClick={this.dispatchPost} type="submit">Do it</button>
                    </form>
                </div>
            </div>
           
            <div className="grid-feed">         
                <PostIndexContainer /> 
            </div>
        </div>);
    }
}

export default Splash;