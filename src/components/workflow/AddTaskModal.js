import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
// import 'bootstrap/dist/css/bootstrap.css';

const AddTaskModal = () => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [attention, setAttention] = useState(false);
    const [user, setUser] = useState("");
    const [show, setShow] = useState(false);

    const onSubmit = () => {
        if (taskName === "" || user === "") {
            console.log("vazio");
            setShow(true);
        }
        console.log(taskName, user, taskDescription, attention)
    }

    return (
        <div className="modal fade" id="add-task-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Create New Task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-2">
                            <span className="input-group-text" id="basic-addon1">Task Name</span>
                            <input
                                className="form-control"
                                placeholder="Eg: Deploy Last Version.."
                                type="text"
                                name="taskName"
                                value={taskName}
                                onChange={e => setTaskName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-2">
                            <div className="input-group-text">
                                <input
                                    className="form-check-input mt-0"
                                    type="checkbox"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                            </div>
                            <input
                                disabled
                                type="text"
                                className="form-control"
                                value="Set As Main Task"
                            />
                        </div>
                        <div className="input-group mb-2">
                            <select
                                className="form-select"
                                name="user"
                                value={user}
                                onChange={e => setUser(e.target.value)}
                            >
                                <option defaultValue value="" disabled>Set Assignee</option>
                                <option value="Jane Doe">Jane Doe</option>
                                <option value="Adam Smith">Adam Smith</option>
                            </select>
                        </div>
                        <div class="form-group mb-2">
                            <div class="col-10 mb-2">
                                <span className="input-group-text" id="basic-addon">Task Starting Date</span>
                                <input class="form-control" type="datetime-local" id="dt_start" />
                            </div>
                            <div class="col-10">
                                <span className="input-group-text" id="basic-addon1">Task Forecast Date</span>
                                <input class="form-control" type="datetime-local" id="dt_prediction" />
                            </div>
                        </div>
                        <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">Description</span>
                            <textarea
                                className="form-control"
                                placeholder="Type here a detailed description of the task.."
                                type="text"
                                name="taskDescription"
                                value={taskDescription}
                                onChange={e => setTaskDescription(e.target.value)}
                            />
                        </div>
                        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="me-2">Validation Error {' '}</strong>
                            </Toast.Header>
                            <Toast.Body>Please Insert a Name and Assignee for the Task</Toast.Body>
                        </Toast>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onSubmit}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskModal