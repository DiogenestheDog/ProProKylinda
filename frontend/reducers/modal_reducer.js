import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

const UIReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL:
            return Object.assign({}, state, action.modal);
        case CLOSE_MODAL:
            let newState = Object.assign({}, state);
            newState.modal = null;
            return newState;
        default:
            return state;
    }
};

export default UIReducer;