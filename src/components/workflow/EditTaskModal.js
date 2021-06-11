import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateTask } from "../../actions/taskActions";
import { getStaff } from "../../actions/staffActions";
import StaffSelectOptions from "../staff/StaffSelectOptions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditTaskModal = ({ current, updateTask, getStaff, staff: { staff, loading } }) => {
    const [name, setNm_Task] = useState("");
    const [description, setDs_Task] = useState("");
    const [userName, setUserName] = useState("");
    const [user, setUser] = useState(""); // user id
    const [dtStart, setDt_Start] = useState(new Date());
    const [dtPrediction, setDt_Prediction] = useState(new Date());
    const [status, setDs_Status] = useState("");

    const validationErrorToast = () => toast("Please Insert a Name and Assignee for the Task.", { progressClassName: "Toastify__progress-bar--dark", toastId: "custom-id-error" });
    const taskUpdatedToast = () => toast("Task Updated Successfully!", { autoClose: 2000, toastId: "custom-id-success" });

    useEffect(() => {
        getStaff();
        if (current) {
            setNm_Task(current.Nm_Task);
            setDs_Task(current.Ds_Task);
            setUserName(current.Ob_User.Nm_User);
            setDt_Start((current.Dt_Start).substring(0, 16));
            setDt_Prediction((current.Dt_Prediction).substring(0, 16));
            setDs_Status(current.Ds_Status_Task);
        }
        // eslint-disable-next-line
    }, [current]);

    const browseUsers = (userName) => {
        staff.filter(staff => staff.Nm_User === userName).map(filteredStaff => (setUser(filteredStaff._id)));
        console.log(userName);
        console.log(user);
    }

    const onSubmit = () => {
        if (name === "" || userName === "") {
            validationErrorToast();
        } else {
            const updTask = {
                _id: current._id,
                name,
                user,
                description,
                status,
                dtStart,
                dtPrediction
            }
            console.log(userName)
            console.log(user)
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
                                name="name"
                                value={name}
                                onChange={e => setNm_Task(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-2">
                            <select
                                className="form-select"
                                name="status"
                                value={status}
                                onChange={e => setDs_Status(e.target.value)}
                            >
                                <option defaultValue value="" disabled>Set Status</option>
                                <option value="Backlog">Backlog</option>
                                <option value="Aberto">Aberto</option>
                                <option value="Andamento">Andamento</option>
                                <option value="Concluido">Concluido</option>
                            </select>
                            <span className="input-group-text" id="basic-addon1">Task Status</span>
                        </div>
                        <div className="input-group mb-2">
                            <select
                                className="form-select"
                                name="userName"
                                value={userName}
                                onChange={e => { setUserName(e.target.key); browseUsers(e.target.value) }}
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
                                    id="dtStart"
                                    value={dtStart}
                                    onChange={e => setDt_Start(e.target.value)}
                                />
                            </div>
                            <div className="col-10">
                                <span className="input-group-text" id="basic-addon1">Task Forecast Date</span>
                                <input
                                    className="form-control"
                                    type="datetime-local"
                                    id="dtPrediction"
                                    value={dtPrediction}
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
                                value={description}
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
    updateTask: PropTypes.func.isRequired,
    staff: PropTypes.object.isRequired,
    getStaff: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.task.current,
    staff: state.staff
})

export default connect(mapStateToProps, { getStaff, updateTask })(EditTaskModal)