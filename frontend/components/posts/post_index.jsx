import React from 'react';

import PostItem from './post_item';
import PostModal from '../modals/post_modal'
class PostIndex extends React.Component {
    constructor(props) {
        super(props);

        this.organizePosts = this.organizePosts.bind(this);
    }

    // componentDidMount() {

    // }

    organizePosts() {
        const { users, posts } = this.props
        return posts.map( (post, i) => {
            return ( <PostItem post={post} user={users[post.user_id]} key={`post-${i}`}  /> );
        });
    }

    render() {
        if (Object.keys(this.props.users).length <= 1) {
            return null;
        }
        return ( <div className="posts-column">{this.organizePosts()}</div> );
    }
}

export default PostIndex;