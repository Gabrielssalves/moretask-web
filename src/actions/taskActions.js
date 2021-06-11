import {
    GET_TASKS,
    SET_LOADING,
    TASKS_ERROR,
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
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
            // payload: err.response.statusText
        })
    }
};

// get tasks from server
export const getMainTask = () => async dispatch => {
    try {
        setLoading();
        const userName = localStorage.getItem("userName");
        const token = localStorage.getItem('userToken');

        const res = await fetch('https://moretask-fatec.herokuapp.com/workflow', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await res.json();
        const newTask = data.workflows[0].Ls_Tasks.filter(task => task.Ob_User.Nm_User === userName)[0]
        console.log(newTask)
        dispatch({
            type: GET_TASKS,
            payload: newTask
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            // payload: err.response.statusText
        })
    }
};

// add task to server
export const addTask = (task) => async dispatch => {
    try {
        setLoading();
        const token = localStorage.getItem('userToken');
        const res = await fetch('https://moretask-fatec.herokuapp.com/task', {
            method: "POST",
            body: JSON.stringify(task),
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token }
        });
        window.location.reload();
        const data = await res.json();
        console.log(data)
        dispatch({
            type: ADD_TASK,
            payload: data
        });
        
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            // payload: err.response.statusText
        })
    }
};

// delete task from server
export const deleteTask = (id) => async dispatch => {
    try {
        setLoading();
        const token = localStorage.getItem('userToken');

        await fetch(`https://moretask-fatec.herokuapp.com/task/${id}`, {
            method: "DELETE",
            headers: { 'Authorization': 'Bearer ' + token }
        });

        dispatch({
            type: DELETE_TASK,
            payload: id
        });
        window.location.reload();
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            // payload: err.response.statusText
        })
    }
};

// update task from server
export const updateTask = task => async dispatch => {
    try {
        setLoading();
        const token = localStorage.getItem('userToken');
        const res = await fetch(`https://moretask-fatec.herokuapp.com/task/${task._id}`, {
            method: "PATCH", 
            body: JSON.stringify(task),
            headers: { 
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token }
        });

        const data = await res.json();
        console.log(data)
        dispatch({
            type: UPDATE_TASK,
            payload: data
        });
        window.location.reload();
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            // payload: err.response.statusText
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