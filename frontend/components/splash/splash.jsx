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
            postBody: "",
            imageUrl: "",
            imageFile: null
        };
        this.previewNewAvatar = this.previewNewAvatar.bind(this);
       // this.updateAvatar = this.updateAvatar.bind(this);
        this.togglePostForm = this.togglePostForm.bind(this);
        this.dispatchPost = this.dispatchPost.bind(this);
        this.imageReader = this.imageReader.bind(this);
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
            imageFile: null
        });
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
        })
    }

    componentDidMount() {
        this.props.getAllUsers();
        this.props.getAllPosts();
    }

    render() {
        console.log(this.state.buttonClicked);
        const { username, avatarUrl } = this.props.user;
        // console.log(togglePostForm);
        window.user = this.props.user;
        window.state = this.state;
        window.props = this.props;
        let { photoUrl } = this.state;
        return (<div className="post-container">
            <h1>Home of {username}</h1>
            <img className="user-avatar" src={photoUrl ? photoUrl : avatarUrl} />
            <div className="post-buttons">
                <div className="post-button text-post" onClick={this.togglePostForm} >
                    <i className="material-icons md-48">text_fields</i>
                    <div>Text</div></div>
                <div className="post-button photo-post" onClick={this.togglePostForm} >
                    <i className="material-icons md-48">camera_alt</i>
                    <div>Photo</div></div>
                <div className="post-button quote-post" onClick={this.togglePostForm} >
                    <i className="material-icons md-48">format_quote</i>
                    <div>Quote</div>
                </div>
                <div className="post-button chat-post" onClick={this.togglePostForm} >
                    <i className="material-icons md-48">mood</i>
                    <div>Chat</div>
                </div>
                {this.buttonClicked ? this.togglePostForm() : ""}
                <div className={this.state.buttonClicked ? "post-form-container-revealed scale-in-top" : "post-form-container"}>
                    <h4 className="pf-username">{username}</h4>
                    <form className="post-form">
                        <input type="text" className="post-header" onChange={this.update('header')} placeholder="header" />
                        <input type="textarea" onChange={this.update('body')} placeholder="Watcha thinking about?" />
                        <input type="file" onChange={this.imageReader} />
                        <button onClick={this.dispatchPost} type="submit">Do it</button>
                        {this.state.imageUrl ? (<img src={this.state.imageUrl} className="image-preview" />) : ""}
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