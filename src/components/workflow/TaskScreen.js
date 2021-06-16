import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getMainTask, updateTask, addComment } from "../../actions/taskActions";
import CommentItem from "./CommentItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../layout/Spinner";
import Page from '../Page';

const TaskScreen = ({ getMainTask, task: { mainTask, mainLoading }, updateTask, addComment }) => {
    const [status, setDs_Status] = useState("");
    const [dsComment, setDs_Comment] = useState("");
    
    const taskUpdatedStatusToast = () => toast(<span>Task Status Updated to {status}</span>, { toastId: "custom-id-success" })

    useEffect(() => {
        getMainTask();
        // eslint-disable-next-line
    }, []);

    const onSubmit = () => {
        const updTask = {
            _id: mainTask._id,
            status,
        }
        updateTask(updTask);
        taskUpdatedStatusToast();
    }

    const CreateComment = () => {
        const addCmt = {
            _id: mainTask._id,
            dsComment
        }
        addComment(addCmt);
    }

    if (mainLoading === true || mainTask === null) {
        return <Spinner />
    } else {
        return (
            <Page
                body={
                    <Page
                        body={
                            <Fragment>
                                <ToastContainer />
                                <ul className="collection with-header w-75 p-0 border border-secondary glass-background ">
                                    <li className="collection-header">
                                        <i className="fa fa-fw fa-thumbtack ms-1 mt-2" />
                                        <span className="h6 mt-2 text-secondary fw-bolder"> Current Task</span>
                                    </li>
                                    {mainLoading ? (
                                        <p className="center fw-bolder">
                                            No task to show...
                                        </p>
                                    ) : (
                                        <Fragment>
                                            <div>
                                                <li className="collection-item center text-primary fw-bolder">
                                                    <h5 className="fw-bolder">{mainTask.Nm_Task}</h5>
                                                </li>

                                                <li className="collection-item">
                                                    <span className="h6 ms-1 text-secondary fw-bolder">Task Description</span>
                                                    <br />
                                                    <div className="comment-textarea ms-1 mt-1 text-secondary">
                                                        {mainTask.Ds_Task}
                                                    </div>
                                                </li>

                                                <li className="collection-item ">
                                                    <span className="text-secondary fw-bolder">
                                                        <span className="text-dark">Created by: </span>
                                                        Gabriel
                                                        <br />
                                                        <span className="text-dark">Created on: </span>
                                                        <Moment format="MMMM Do YYYY, h:mm A">{mainTask.Dt_Create}</Moment>
                                                        <br />
                                                        <span className="text-dark">Activity Started on: </span>
                                                        <Moment format="MMMM Do YYYY, h:mm A">{mainTask.Dt_Start}</Moment>
                                                        <br />
                                                        <span className="text-dark">Forecast Date: </span>
                                                        <Moment format="MMMM Do YYYY, h:mm A">{mainTask.Dt_Prediction}</Moment>
                                                    </span>
                                                </li>
                                                <li className="collection-item pb-4">
                                                    <span className="h6 ms-1 text-secondary fw-bolder">Task Status</span>
                                                    <select
                                                        className="form-select mt-1"
                                                        name="status"
                                                        value={mainTask.Ds_Status_Task}
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
                                                <li className="collection-item">
                                                    <span className="h6 ms-1 text-secondary">Comments</span>
                                                </li>

                                                { mainLoading ? (
                                                    <li className="collection-item">
                                                        <p className="center mt-3">
                                                            No comments to show...
                                                        </p>
                                                    </li>
                                                ) : (
                                                    mainTask.Ls_Comments.map(Ls_Comments => <CommentItem Ls_Comments={Ls_Comments} key={Ls_Comments._id} />)
                                                )}

                                                <li className="collection-item">
                                                    <div className="mx-1 mt-2 ">
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Add new comment..."
                                                            type="text"
                                                            name="dsComment"
                                                            value={dsComment}
                                                            onChange={e => setDs_Comment(e.target.value)}
                                                            rows="5"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="btn btn-primary float-end me-2 my-2"
                                                        onClick={CreateComment}
                                                    >Send</button>
                                                </li>
                                                <li className="collection-end">
                                                </li>
                                            </div>

                                        </Fragment>
                                    )}
                                </ul>
                            </Fragment>
                        }>
                    </Page >
                }>
            </Page >
        )
    }
}

TaskScreen.propTypes = {
    getMainTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(
    mapStateToProps,
    { getMainTask, updateTask, addComment }
)(TaskScreen)