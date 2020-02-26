import { connect } from 'react-redux';

import PostIndex from './post_index';

const mapStateToProps = ({ entities }) => {
    
    let posts = Object.values(entities.posts).reverse();
    return ({
        posts,
        users: entities.users
    });
};

export default connect(mapStateToProps)(PostIndex);