import React from 'react';
import Moment from "react-moment";
import 'moment/locale/pt-br';
import { connect } from "react-redux";
import { deleteTask, setCurrent } from "../../actions/taskActions"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import PropTypes from "prop-types";

const TaskItem = ({ task, deleteTask, setCurrent }) => {

    const onDelete = () => {
        confirmAlert({
            title: 'Confirmação de Deletar Tarefa',
            message: 'Você deseja realmente deletar esta tarefa?',
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => deleteTask(task._id)
                },
                {
                    label: 'Não',
                    onClick: () => console.log("action cancelled")
                }
            ]
        });
    }

    return (

        <div className="card card-content-text">
            <a
                href="#edit-task-modal"
                className="modal-trigger text-decoration-none cardtitle noselect h6 text-primary"
                data-bs-toggle="modal"
                data-bs-target="#edit-task-modal"
                onClick={() => setCurrent(task)}
            >
                {task.Nm_Task}
            </a>
            <span>
                <span className="text-secondary">Responsável{' '}</span>
                <strong className="text-black">{task.Ob_User.Nm_User}</strong>
            </span>
            <span className="text-warning">
                Vence <Moment fromNow>{task.Dt_Prediction}</Moment>
            </span>
            <span className="text-secondary ">
                Criado em{' '}
                <Moment format="D MMMM, h:mm">{task.Dt_Create}</Moment>
            </span>
            <div className="d-flex justify-content-end">
                <a
                    href="#!"
                    className="text-dark"
                    onClick={onDelete}
                >
                    <i className="fa fa-fw fa-trash float-right" style={{ fontSize: '1em' }} />
                </a>
            </div>
        </div>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, { deleteTask, setCurrent })(TaskItem)
