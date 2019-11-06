import React from 'react';

class TextModal extends React.Component {
    constructor(props) {
        super(props);

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
            this.setState({ photoFile: null, photoUrl: "" });
        }
    }

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

    render() {
        return (
            <div className={this.state.buttonClicked ? "post-modal-container-revealed" : "post-modal-container"}>
                <h4 className="pf-username">{username}</h4>
                <form className="post-form">
                    <input type="text" className="post-header" onChange={this.update('header')} placeholder="header" />
                    {/* <input type="textarea" onChange={this.update('body')} placeholder="Watcha thinking about?" /> */}
                    <textarea className="post-body" type="text" onChange={this.update('body')} placeholder="Watcha thinking about?" />
                    {this.state.imageUrl ? (<img src={this.state.imageUrl} className="image-preview" />) : ""}
                    <div className="file-input-wrapper">
                        <input id="file-input" type="file" onChange={this.imageReader} />
                    </div>
                    <i className="material-icons" id="photo-upload-button" onClick={this.chooseFile} >photo_camera</i>
                    <button onClick={this.dispatchPost} type="submit">Do it</button>
                </form>
            </div>
        );
    }
}

export default TextModal;