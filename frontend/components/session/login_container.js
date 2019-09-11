import { connect } from 'react-redux';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( {errors} ) => ({
    errors: errors.session,
    formType: "login"
});

const mapDispatchToState = dispatch => ({
    processForm: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToState)(SessionForm);