import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { getTasks, updateTask } from "../../actions/taskActions";
// import CommentItem from "./CommentItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../layout/Spinner";
import Page from '../Page';

const TaskScreen = ({ getTasks, task: { tasks, loading }, updateTask }) => {
    const [ds_status, setDs_Status] = useState("");

    const taskUpdatedStatusToast = () => toast(<span>Task Status Updated to {ds_status}</span>, { toastId: "custom-id-success" })

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line
    }, []);

    const onSubmit = () => {
        const updTask = {
            id: tasks[0]._id,
            ds_status
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
                        <ul className="collection with-header w-75 p-0 mt-4 me-5 border border-secondary glass-background">
                            <li className="collection-header">
                                <i className="fa fa-fw fa-thumbtack ms-1 mt-2" />
                                <span className="h6 mt-2 text-secondary"> Current Task</span>
                            </li>
                            {!loading && tasks.length === 0 ? (
                                <p className="center">
                                    No task to show...
                                </p>
                            ) : (
                                <Fragment>
                                    <div>
                                        <li className="collection-item center">
                                            <h5>{tasks[0].Nm_Task}</h5>
                                        </li>

                                        <li className="collection-item">
                                            <span className="h6 ms-1 text-secondary">Task Description</span>
                                            <br />
                                            <div className="comment-textarea ms-1 mt-1 text-secondary">
                                                {tasks[0].Ds_Task}
                                            </div>
                                        </li>

                                        <li className="collection-item ms-2 ">
                                            <span className="text-secondary">
                                                <span className="text-dark">Created by: </span>
                                                Gabriel
                                                <br />
                                                <span className="text-dark">Created on: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks[0].Dt_Create}</Moment>
                                                <br />
                                                <span className="text-dark">Activity Started on: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks[0].Dt_Start}</Moment>
                                                <br />
                                                <span className="text-dark">Forecast Date: </span>
                                                <Moment format="MMMM Do YYYY, h:mm A">{tasks[0].Dt_Prediction}</Moment>
                                            </span>
                                        </li>
                                        <li className="collection-item pb-4">
                                            <span className="h6 ms-1 text-secondary">Task Status</span>
                                            <select
                                                className="form-select mt-1"
                                                name="ds_status"
                                                value={tasks[0].Ob_Status.Ds_status}
                                                onChange={e => setDs_Status(e.target.value)}
                                            >
                                                <option defaultValue value="" disabled>Set Assignee</option>
                                                <option value="On Hold">On Hold</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Completed">Completed</option>
                                            </select>
                                            <button
                                                type="button"
                                                className="btn btn-primary float-end me-1 my-2"
                                                onClick={onSubmit}
                                            >
                                                Update Status
                                            </button>
                                            <br />
                                        </li>
                                        <li className="collection-item">
                                            <span className="h6 ms-1 text-secondary">Comments</span>
                                        </li>

                                        {/* {!loading && tasks[0].Ls_Comments.length === 0 ? (
                                            <p className="center mt-3">No comments to show...</p>
                                        ) : (
                                            tasks[0].Ls_Comments.map(Ls_Comments => <CommentItem Ls_Comments={Ls_Comments} key={Ls_Comments.comment_id} />)
                                        )} */}

                                        <li className="collection-item">
                                            <div className="mx-1 mt-2 ">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Add new comment..."
                                                    type="text"
                                                    name="taskDescription"
                                                    rows="5"
                                                />
                                            </div>
                                            <button type="button" className="btn btn-primary float-end me-2 my-2">Send</button>
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
    getTasks: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(
    mapStateToProps,
    { getTasks, updateTask }
)(TaskScreen)