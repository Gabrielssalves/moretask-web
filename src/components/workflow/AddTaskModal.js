import React, { useState } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/taskActions"
import StaffSelectOptions from "../staff/StaffSelectOptions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTaskModal = ({ addTask }) => {
    const [nm_task, setNm_Task] = useState("");
    const [ds_task, setDs_Task] = useState("");
    const [ob_owner, setOb_Owner] = useState("");
    const [dt_start, setDt_Start] = useState(new Date());
    const [dt_prediction, setDt_Prediction] = useState(new Date());

    const validationErrorToast = () => toast("Please Insert a Name and Assignee for the Task.", { progressClassName: "Toastify__progress-bar--dark", toastId: "custom-id-error" });

    const taskAddedToast = () => toast("Task Created Successfully!", {autoClose : 2000, toastId: "custom-id-success"});

    const onSubmit = () => {
        if (nm_task === "" || ob_owner === "") {
            validationErrorToast();
        } else {
            const newTask = {
                nm_task,
                ds_task,
                ls_comments: [],
                ob_owner,
                dt_create: new Date(),
                dt_start,
                dt_prediction,
                ds_status: "On Hold"
            }
            addTask(newTask);
            taskAddedToast();

            //clear fields
            setNm_Task("");
            setDs_Task("");
            setOb_Owner("");
            setDt_Start(new Date());
            setDt_Prediction(new Date());
        }
    }

    return (
        <div className="modal fade" id="add-task-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ToastContainer />
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
                                name="nm_task"
                                value={nm_task}
                                onChange={e => setNm_Task(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-2">

                            <select
                                className="form-select"
                                name="ob_owner"
                                value={ob_owner}
                                onChange={e => setOb_Owner(e.target.value)}
                            >
                                <option defaultValue value="" disabled>Set Assignee</option>
                                <StaffSelectOptions />
                            </select>
                            <span className="input-group-text" id="basic-addon1">Task Assignee</span>
                        </div>
                        <div className="form-group mb-2">
                            <div className="col-10 mb-2">
                                <span className="input-group-text" id="basic-addon">Task Starting Date</span>
                                <input
                                    className="form-control"
                                    type="datetime-local"
                                    id="dt_start"
                                    value={dt_start}
                                    onChange={e => setDt_Start(e.target.value)}
                                />
                            </div>
                            <div className="col-10">
                                <span className="input-group-text" id="basic-addon1">Task Forecast Date</span>
                                <input
                                    className="form-control"
                                    type="datetime-local"
                                    id="dt_prediction"
                                    value={dt_prediction}
                                    onChange={e => setDt_Prediction(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="input-group mb-1">
                            <span className="input-group-text" id="basic-addon1">Description</span>
                            <textarea
                                className="form-control"
                                placeholder="Type here a detailed description of the task.."
                                type="text"
                                name="ds_task"
                                value={ds_task}
                                onChange={e => setDs_Task(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onSubmit}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

AddTaskModal.propTypes = {
    addTask: PropTypes.func.isRequired,
}

export default connect(null, { addTask })(AddTaskModal);