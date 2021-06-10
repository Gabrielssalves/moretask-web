import { GET_TASKS, SET_LOADING, TASKS_ERROR } from "../actions/types";

const initialState = {
    tasks: null,
    current: null,
    loading: false,
    error: null
}

const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TASKS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default taskReducer;