import React from 'react';
import { connect } from 'react-redux';

import { createPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

class PhotoModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            draggedOver: false,
            postHeader: "",
            imageURL: "",
            imageFile: null
        };
        this.previewNewAvatar = this.previewNewAvatar.bind(this);
        this.dispatchPost = this.dispatchPost.bind(this);
        this.imageReader = this.imageReader.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
        this.dragHighlight = this.dragHighlight.bind(this);
        this.dragUnhighlight = this.dragUnhighlight.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.checkFields = this.checkFields.bind(this);
    }

    previewNewAvatar(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            return this.setState({
                photoFile: file,
                photoURL: reader.result
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoFile: null, photoURL: "" });
        }
    }

    dispatchPost(e) {
        e.preventDefault();

        if (this.checkFields()) {
            const { header, imageFile } = this.state;
            const user_id = this.props.user.id;
            let formData = new FormData();

            formData.append('post[header]', header ? header : null);
            formData.append('post[user_id]', user_id ? user_id : null);
            formData.append('post[post_type]', "photo");
            if (imageFile) formData.append('post[image]', imageFile);

            this.props.createPost(formData)
                .then(this.props.closeModal());
            this.setState({
                header: "",
                imageURL: "",
                imageFile: null,
            });
        } else { window.alert("what are you doing?"); }
    }

    chooseFile(e) {
        e.preventDefault();
        $("#file-input").click();
    }

    imageReader(e) {
        const reader = new FileReader
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ imageURL: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageURL: "", imageFile: null });
        }
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    checkFields() {
        const { header, imageFile, imageURL } = this.state;
        if (header != false && imageURL != false && imageFile != null) {
            return true
        } else { return false; }
    }

    // adapted from https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
    
    // add event listeners to drop zone
    // switch classes
    // handle data transfer
    // handle image preview

    dragHighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ draggedOver: true });
    }

    dragUnhighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState( { draggedOver: false });
    }

    handleDrop(e) {
        e.preventDefault();
        this.setState({ draggedOver: false });
        const reader = new FileReader;
        const image = e.dataTransfer.files[0];
        reader.onloadend = () => this.setState({ imageURL: reader.result, imageFile: image });
        if (image) {
            reader.readAsDataURL(image);
        } else {
            this.setState({ imageURL: "", imageFile: null });
        }
    }

    render() {
        const { username } = this.props.user
        let { draggedOver } = this.state;
        return (
            <div className="post-modal-container">
                <h4 className="pf-username">{username}</h4>
                <form className="post-form">
                    <input type="text" className="post-header" onChange={this.update('header')} placeholder="Title" />
                    <div className={draggedOver ? "drop-zone dragged-over" : "drop-zone"} 
                        onDragOver={this.dragHighlight} onDragEnter={this.dragHighlight}
                        onDragLeave={this.dragUnhighlight} onDrop={this.handleDrop}></div>
                    {this.state.imageURL ? (<img src={this.state.imageURL} className="image-preview" />) : ""}
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

const mapStateToProps = ({ session, entities: { users: users } }) => ({
    user: users[session.id]
});

const mapDispatchToProps = dispatch => ({
    createPost: post => dispatch(createPost(post)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoModal);
