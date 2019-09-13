import { connect } from 'react-redux';

import NavBar from './nav_bar';

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
    signup: (user) => dispatch(signup(user)),
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);