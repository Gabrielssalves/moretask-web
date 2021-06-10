import React from 'react';
import Moment from "react-moment";
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-task-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-task-modal"
                    className={`modal-trigger text-decoration-none h5 ${task.attention ? 'text-danger' : 'text-primary'
                        }`}
                >
                    {task.nm_task}
                </a>
                <br />
                <span className="text-secondary">
                    <span className="text-dark">
                        Id #{task.id} </span>
                         created by [
                    <span className="text-dark">
                        {task.ob_owner}]
                    </span>
                    {' '}on{' '} [<Moment format="MMMM Do YYYY, h:mm A">{task.dt_create}</Moment>]
                </span>
                <a href="#!" className="text-dark">
                    <i className="fa fa-fw fa-trash float-right" style={{ fontSize: '1em' }} />
                </a>
            </div>
        </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
}

export default TaskItem
