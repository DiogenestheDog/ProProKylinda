import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import TextModal from './text_modal';

const PostModal = ({modal, closeModal}) => {
    if (!modal) return null;

    let component;
    switch(modal) {
        case 'text':
            component = TextModal;
            break;
        default:
            return null;
    }
    return (
        <div className="post-modal-background" onClick={closeModal}>
            <div className="post-modal">
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

connect(mapStateToProps, mapDispatchToProps)(Modal);

export default PostModal;