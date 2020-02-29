import React from 'react';

import AudioPost from './audio_post';
import PhotoPost from './photo_post';
import TextPost from './text_post';
import VideoPost from './video_post';

class PostItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { post_type } = this.props.post
        let component;
        switch (post_type) {
            case "audio":
                component = <AudioPost post={this.props.post} user={this.props.user} />;
                break;
            case "text":
                component = <TextPost post={this.props.post} user={this.props.user} />;
                break;
            case "photo":
                component = <PhotoPost post={this.props.post} user={this.props.user} />;
                break;
            case "video":
                component = <VideoPost post={this.props.post} user={this.props.user} />;
                break;
        }
        
        return component;
        
    }
}

const mapStateToProps = state => ({

})

export default PostItem;