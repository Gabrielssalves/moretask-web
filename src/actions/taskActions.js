import { GET_TASKS, SET_LOADING, TASKS_ERROR } from "./types";

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

        console.log(data.workflows[0].Ls_Tasks)

        dispatch({
            type: GET_TASKS,
            payload: data.workflows[0].Ls_Tasks
        });
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.data
        })
    }
};



// Set Loading to True
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};