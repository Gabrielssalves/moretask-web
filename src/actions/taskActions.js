import {
    GET_TASKS,
    SET_LOADING,
    TASKS_ERROR,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    SEARCH_TASKS,
    SET_CURRENT,
    CLEAR_CURRENT
} from "./types";

// export const getTasks = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/workflow');
//         const data = await res.json();

//         dispatch({
//             type: GET_TASKS,
//             payload: data
//         });
//     };
// };

// get tasks from server
export const getTasks = () => async dispatch => {
    try {
        setLoading();

        const token = localStorage.getItem('userToken');

        const res = await fetch('https://moretask-fatec.herokuapp.com/workflow', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await res.json();

        dispatch({
            type: GET_TASKS,
            payload: data.workflows[0].Ls_Tasks
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
};

// add task to server
export const addTask = (task) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/workflow', {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_TASK,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
};

// delete task from server
export const deleteTask = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/workflow/${id}`, {
            method: "DELETE"
        });

        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
};

// update task from server
export const updateTask = task => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/workflow/${task.id}`, {
            method: "PATCH", // patch wont destroy dt_create + ob_status + others
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_TASK,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
};

// search tasks from server
export const searchTasks = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/workflow?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_TASKS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
};

// Set current task
export const setCurrent = task => {
    return {
        type: SET_CURRENT,
        payload: task
    };
};

// Clear current task
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    };
};

// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};