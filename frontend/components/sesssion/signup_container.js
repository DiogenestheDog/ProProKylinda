import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import { SessionForm } from './session_form';

mapDispatchToState = dispatch => ({
    signup: user => dispatch(signup(user))
});

export default connect(null, mapDispatchToState)(SessionForm);