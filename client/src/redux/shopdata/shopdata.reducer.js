
import ShopdataActionTypes from './shopdata.actiontype';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopdataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ShopdataActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopdataActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case ShopdataActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
               ...state,
               isFetching: false,
               errorMessage: action.payload
            }
        default:
             return state;
    }
}

export default shopdataReducer;