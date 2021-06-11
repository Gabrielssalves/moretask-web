import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getMainTask, updateTask } from "../../actions/taskActions";
// import CommentItem from "./CommentItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../layout/Spinner";
import Page from '../Page';

const TaskScreen = ({ getMainTask, task: { tasks, loading }, updateTask }) => {
    const [status, setDs_Status] = useState("");

    const taskUpdatedStatusToast = () => toast(<span>Task Status Updated to {status}</span>, { toastId: "custom-id-success" })

    useEffect(() => {
        getMainTask();
        // eslint-disable-next-line
    }, []);

    const onSubmit = () => {
        const updTask = {
            _id: tasks._id,
            status,
        }
        updateTask(updTask);
        taskUpdatedStatusToast();
    }

    //hardcoded to task[0]
    //no method to add commentary
    //comment_id should also be created for each new comment, to be used as key on props
    if (loading || tasks === null) {
        return <Spinner />
    } else {
        return (
            <Page
                body={
                    <Fragment>
                        <ToastContainer />
                        <ul className="collection with-header w-75 p-0 mt-4 me-5 border border-secondary glass-background ">
                            <li className="collection-header">
                                <i className="fa fa-fw fa-thumbtack ms-1 mt-2" />
                                <span className="h6 mt-2 text-secondary fw-bolder"> Current Task</span>
                            </li>
                            {!loading && tasks.length === 0 ? (
                                <p className="center fw-bolder">
                                    No task to show...
                                </p>
                            ) : (
                                <Fragment>
                                    <div>
                                        <li className="collection-item center text-primary fw-bolder">
                                            <h5 className="fw-bolder">{tasks.Nm_Task}</h5>
                                        </li>

                                        <li className="collection-item">
                                            <span className="h6 ms-1 text-secondary fw-bolder">Task Description</span>
                                            <br />
                                            <div className="comment-textarea ms-1 mt-1 text-secondary">
                                                {tasks.Ds_Task}
                                            </div>
                                        </li>

                                        <li className="collection-item ">
                                            <span className="text-secondary fw-bolder">
                                                <span className="text-dark">Created by: </span>
                                                Gabriel
                                                <br />
                                                <span className="text-dark">Created on: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks.Dt_Create}</Moment>
                                                <br />
                                                <span className="text-dark">Activity Started on: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks.Dt_Start}</Moment>
                                                <br />
                                                <span className="text-dark">Forecast Date: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks.Dt_Prediction}</Moment>
                                            </span>
                                        </li>
                                        <li className="collection-item pb-4">
                                            <span className="h6 ms-1 text-secondary fw-bolder">Task Status</span>
                                            <select
                                                className="form-select mt-1"
                                                name="status"
                                                value={tasks.Ds_Status_Task}
                                                onChange={e => setDs_Status(e.target.value)}
                                            >
                                                <option defaultValue value="" disabled>Set Assignee</option>
                                                <option value="Backlog">Backlog</option>
                                                <option value="Aberto">Aberto</option>
                                                <option value="Andamento">Andamento</option>
                                                <option value="Concluido">Concluido</option>
                                            </select>
                                            <button
                                                type="button"
                                                className="btn btn-primary float-end me-1 my-2 fw-bolder"
                                                onClick={onSubmit}
                                            >
                                                Update Status
                                            </button>
                                            <br />
                                        </li>
                                    </div>

                                </Fragment>
                            )}
                        </ul>
                    </Fragment>
                }>
            </Page >
        )
    }
}

TaskScreen.propTypes = {
    getMainTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(
    mapStateToProps,
    { getMainTask, updateTask }
)(TaskScreen)