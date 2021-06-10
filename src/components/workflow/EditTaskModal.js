import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTask } from "../../actions/taskActions"
import StaffSelectOptions from "../staff/StaffSelectOptions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditTaskModal = ({ current, updateTask }) => {
    const [nm_task, setNm_Task] = useState("");
    const [ds_task, setDs_Task] = useState("");
    const [ob_owner, setOb_Owner] = useState("");
    const [dt_start, setDt_Start] = useState(new Date());
    const [dt_prediction, setDt_Prediction] = useState(new Date());
    const [ds_status, setDs_Status] = useState("");

    const validationErrorToast = () => toast("Please Insert a Name and Assignee for the Task.", { progressClassName: "Toastify__progress-bar--dark", toastId: "custom-id-error" });
    const taskUpdatedToast = () => toast("Task Updated Successfully!", {autoClose : 2000, toastId: "custom-id-success"});

    useEffect(() => {
        if (current) {
            setNm_Task(current.nm_task);
            setDs_Task(current.ds_task);
            setOb_Owner(current.ob_owner);
            setDt_Start(current.dt_start);
            setDt_Prediction(current.dt_prediction);
            setDs_Status(current.ds_status);
        }
    }, [current]);

    const onSubmit = () => {
        if (nm_task === "" || ob_owner === "") {
            validationErrorToast();
        } else {
            const updTask = {
                id: current.id,
                nm_task,
                ds_task,
                ob_owner,
                dt_start,
                dt_prediction,
                ds_status
            }
            updateTask(updTask);
            taskUpdatedToast();
        }
    }

    return (
        <div className="modal fade" id="edit-task-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ToastContainer />
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Task</h5>
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
                                name="ds_status"
                                value={ds_status}
                                onChange={e => setDs_Status(e.target.value)}
                            >
                                <option defaultValue value="" disabled>Set Status</option>
                                <option value="On Hold">On Hold</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                            <span className="input-group-text" id="basic-addon1">Task Status</span>
                        </div>
                        <div className="input-group mb-2">
                            <select
                                className="form-select"
                                name="ob_owner"
                                value={ob_owner}
                                onChange={e => setOb_Owner(e.target.value)}
                            >
                                <option value="" disabled>Set Assignee</option>
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
                            onClick={onSubmit}>
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

EditTaskModal.propTypes = {
    current: PropTypes.object,
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.task.current
})

export default connect(mapStateToProps, { updateTask })(EditTaskModal)