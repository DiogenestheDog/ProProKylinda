import React from 'react';
import { connect } from 'react-redux';

class VideoModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videoFile: null,
            videoURL: "",
            postHeader: "",
            draggedOver: false
        }
        this.dispatchPost = this.dispatchPost.bind(this);
        this.videoReader = this.videoReader.bind(this);
        this.chooseFile = this.chooseFile.bind(this);
        this.dragHighlight = this.dragHighlight.bind(this);
        this.dragUnhighlight = this.dragUnhighlight.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    dispatchPost(e) {
        e.preventDefault();

        const { header, body, videoFile } = this.state;
        const user_id = this.props.user.id;
        let formData = new FormData();

        formData.append('post[header]', header ? header : null);
        formData.append('post[user_id]', user_id ? user_id : null);
        formData.append('post[post_type]', "video");
        // all blobs-types are called image for now
        if (videoFile) formData.append('post[image]', videoFile);

        this.props.createPost(formData);
        this.setState({
            header: "",
            videoURL: "",
            videoFile: null,
        });
    }

    chooseFile(e) {
        e.preventDefault();
        $("#file-input").click();
    }

    videoReader(e) {
        const reader = new FileReader
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ videoURL: reader.result, videoFile: file });
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ videoURL: "", videoFile: null });
        }
    }

    update(type) {
        return e => this.setState({
            [type]: e.currentTarget.value
        });
    }

    // adapted from https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/

    // add event listeners to drop zone
    // switch classes
    // handle data transfer
    // handle video preview

    dragHighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ draggedOver: true });
    }

    dragUnhighlight(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ draggedOver: false });
    }

    handleDrop(e) {
        e.preventDefault();
        this.setState({ draggedOver: false });
        const reader = new FileReader;
        const video = e.dataTransfer.files[0];
        reader.onloadend = () => this.setState({ videoURL: reader.result, videoFile: video });
        if (video) {
            reader.readAsDataURL(video);
        } else {
            this.setState({ videoURL: "", videoFile: null });
        }
    }

    render() {
        const { username } = this.props.user
        let { draggedOver, videoURL } = this.state;
        return (
            <div className="post-modal-container">
                <h4 className="pf-username">{username}</h4>
                <form className="post-form">
                    <input type="text" className="post-header" onChange={this.update('header')} placeholder="Title" />
                    <div className={draggedOver ? "drop-zone dragged-over" : "drop-zone"}
                        onDragOver={this.dragHighlight} onDragEnter={this.dragHighlight}
                        onDragLeave={this.dragUnhighlight} onDrop={this.handleDrop}></div>
                    {this.state.videoURL ? (<video className="video-preview" controls><source src={videoURL} access="video/*" type="video/mp4"></source></video>) : ""}
                    <div className="file-input-wrapper">
                        <input id="file-input" type="file" onChange={this.videoReader} />
                    </div>
                    <i className="material-icons" id="video-upload-button" onClick={this.chooseFile} >videocam</i>
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
    createPost: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoModal);