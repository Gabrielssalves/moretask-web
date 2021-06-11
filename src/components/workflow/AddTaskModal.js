import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../../actions/taskActions";
import { getStaff } from "../../actions/staffActions";
import StaffSelectOptions from "../staff/StaffSelectOptions"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTaskModal = ({ addTask, getStaff, staff: { staff, loading } }) => {
    const [name, setNm_Task] = useState("");
    const [description, setDs_Task] = useState("");
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(""); //user id
    const [dtStart, setDt_Start] = useState(new Date());
    const [dtPrediction, setDt_Prediction] = useState(new Date());
    const idWorkflow = "60c2ce63e514c20004ce378f";
    const status = "Backlog"

    const validationErrorToast = () => toast("Please Insert a Name and Assignee for the Task.", { progressClassName: "Toastify__progress-bar--dark", toastId: "custom-id-error" });

    // const taskAddedToast = () => toast("Task Created Successfully!", {autoClose : 2000, toastId: "custom-id-success"}); // não invocavel mais

    useEffect(() => {
        getStaff();
        // eslint-disable-next-line
    }, []);

    const browseUsers = (userName) => {
        staff.filter(staff => staff.Nm_User === userName).map(filteredStaff => (setUser(filteredStaff._id)));
    }

    const onSubmit = () => {
        if (name === "" || userName === "") {
            validationErrorToast();
        } else {

            const newTask = {
                name,
                description,
                user,
                status,
                idWorkflow,
                dtStart,
                dtPrediction
            }
            addTask(newTask);
            
            //clear fields
            setNm_Task("");
            setDs_Task("");
            setUserName("");
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
                                name="name"
                                value={name} //Nm_Task
                                onChange={e => setNm_Task(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-2">

                            <select
                                className="form-select"
                                name="userName"
                                value={userName} //ob_owner
                                onChange={e => {setUserName(e.target.key); browseUsers(e.target.value)}  }
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
                                    id="dtStart"
                                    value={dtStart} //Dt_Start
                                    onChange={e => setDt_Start(e.target.value)}
                                />
                            </div>
                            <div className="col-10">
                                <span className="input-group-text" id="basic-addon1">Task Forecast Date</span>
                                <input
                                    className="form-control"
                                    type="datetime-local"
                                    id="dtPrediction"
                                    value={dtPrediction} // Dt_Prediction
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
                                name="description"
                                value={description} //ds_task
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
    staff: PropTypes.object.isRequired,
    getStaff: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    staff: state.staff
});

export default connect(mapStateToProps, { getStaff, addTask })(AddTaskModal);