import {
    GET_STAFF,
    SET_LOADING,
    STAFF_ERROR
} from "../actions/types";

const initialState = {
    staff: null,
    loading: false,
    error: null
};

const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFF:
            return {
                ...state,
                staff: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case STAFF_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default staffReducer