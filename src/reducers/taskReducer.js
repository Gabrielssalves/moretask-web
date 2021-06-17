import {
    GET_TASKS,
    GET_MAIN_TASK,
    SET_LOADING,
    SET_LOADING_MAIN,
    TASKS_ERROR,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SET_CURRENT,
    CLEAR_CURRENT,
} from "../actions/types";

const initialState = {
    tasks: null,
    mainTask: null,
    current: null,
    loading: true,
    mainLoading: true,
    error: null
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            };
        case GET_MAIN_TASK:
            return {
                ...state,
                mainTask: action.payload,
                mainLoading: false
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                loading: false
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload),
                loading: false
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action.payload._id ? action.payload : task),
                loading: false
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SET_LOADING_MAIN:
            return {
                ...state,
                loadingMain: true
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