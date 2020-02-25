import { connect } from 'react-redux';

import PostIndex from './post_index';

const mapStateToProps = ({ entities, session }) => {
    let posts = Object.values(entities.posts).reverse()
        .filter(post => post.user_id === session.id);

    return ({
        posts,
        users: entities.users
    });
};

export default connect(mapStateToProps)(PostIndex);