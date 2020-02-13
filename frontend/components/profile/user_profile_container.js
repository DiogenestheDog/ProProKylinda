import { connect } from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = state => ({
    user: users[session_id],
    posts
});

const mapDispatchtoProps = state => ({
    five: 5
});

export default connect(mapStateToProps, mapDispatchtoProps)(UserProfile);