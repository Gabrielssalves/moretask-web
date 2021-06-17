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
    CLEAR_CURRENT
} from "./types";

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
            payload: err.message
        })
    }
};

// get tasks from server
export const getMainTask = () => async dispatch => {
    try {
        setLoadingMain();
        const userName = localStorage.getItem("userName");
        const token = localStorage.getItem('userToken');
        let mainTask = "";

        const res = await fetch('https://moretask-fatec.herokuapp.com/workflow', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await res.json();
        const filteredTasks = await data.workflows[0].Ls_Tasks.filter(task => ((task.Ob_User.Nm_User === userName) && ((task.Ds_Status_Task !== "Concluido") && (task.Ds_Status_Task !== "Backlog"))));
        
        if (filteredTasks.length <= 1) {
            mainTask = filteredTasks[0];
        } else {
            let filteredDates = [];
            filteredTasks.map(task => filteredDates.push(new Date(task.Dt_Prediction).getTime()));
            //inicialização do teste
            let closestDateInt = filteredDates[0];
            let filteredDatePos = 0;
            let cont = 0;
            filteredDates.forEach(myFunction);
            function myFunction(dateInt) {                
                if (dateInt < closestDateInt) {
                    closestDateInt = dateInt;
                    filteredDatePos = cont;
                }
                cont++;             
            }
            mainTask = filteredTasks[filteredDatePos]
        }

        dispatch({
            type: GET_MAIN_TASK,
            payload: mainTask
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
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
                'Authorization': 'Bearer ' + token
            }
        });
        setTimeout(() => { window.location.reload() }, 1500);
        const data = await res.json();
        dispatch({
            type: ADD_TASK,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
        })
    }
};

// add comment to server
export const addComment = (task) => async dispatch => {
    try {
        setLoading();
        const token = localStorage.getItem('userToken');
        const res = await fetch(`https://moretask-fatec.herokuapp.com/task/${task._id}/comment`, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        });
        setTimeout(() => { window.location.reload() }, 1500);
        const data = await res.json();
        dispatch({
            type: ADD_TASK,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
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
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
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
                'Authorization': 'Bearer ' + token
            }
        });

        setTimeout(() => { window.location.reload() }, 1500);
        const data = await res.json();
        dispatch({
            type: UPDATE_TASK,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.message
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

// Set Loading MAIN to True
export const setLoadingMain = () => {
    return {
        type: SET_LOADING_MAIN
    };
};