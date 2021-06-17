import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import 'moment/locale/pt-br';
import { getMainTask, updateTask, addComment } from "../../actions/taskActions";
import CommentItem from "./CommentItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../layout/Spinner";
import Page from '../layout/Page';

const TaskScreen = ({ getMainTask, task: { mainTask, mainLoading }, updateTask, addComment }) => {
    const [status, setDs_Status] = useState("");
    const [dsComment, setDs_Comment] = useState("");

    const taskUpdatedStatusToast = () => toast(<span>Tarefa atualizada para o status "{status}"</span>, { autoClose: 2000, toastId: "custom-id-success" })
    const commentAddedToast = () => toast("Comentário Adicionado Com Sucesso!", { autoClose: 2000, toastId: "comment-custom-id" })

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
        commentAddedToast();
    }

    if (mainLoading === true || mainTask === null) {
        return <Spinner />
    } else {
        return (
            <Page
                body={
                    <Fragment>
                        <ToastContainer />
                        <ul className="collection with-header w-75 p-0 border border-secondary glass-background ">
                            <li className="collection-header">
                                <i className="fa fa-fw fa-thumbtack ms-1 mt-2" />
                                <span className="h6 mt-2 text-secondary fw-bolder"> Tarefa Atual</span>
                            </li>
                            {!mainLoading && !mainTask ? (
                                <p className="collection-item center fw-bolder">
                                    Você está atualizado!!
                                </p>
                            ) : (
                                <Fragment>
                                    <div>
                                        <li className="collection-item center text-primary fw-bolder">
                                            <h5 className="fw-bolder">{mainTask.Nm_Task}</h5>
                                        </li>

                                        <li className="collection-item">
                                            <span className="h6 ms-1 text-secondary fw-bolder">Descrição da Tarefa</span>
                                            <br />
                                            <div className="comment-textarea ms-1 mt-1 text-secondary">
                                                {mainTask.Ds_Task}
                                            </div>
                                        </li>

                                        <li className="collection-item ">
                                            <span className="text-secondary fw-bolder">
                                                <span className="text-warning">Entrega <Moment fromNow>{mainTask.Dt_Prediction}</Moment>
                                                </span>
                                                <br />
                                                <span className="text-dark">Criado em: </span>
                                                <Moment format="D MMMM, h:mm">{mainTask.Dt_Create}</Moment>
                                                <br />
                                                <span className="text-dark">Início da Tarefa: </span>
                                                <Moment format="D MMMM, h:mm">{mainTask.Dt_Start}</Moment>
                                                <br />
                                                <span className="text-dark">Previsão de Término: </span>
                                                <Moment format="D MMMM, h:mm">{mainTask.Dt_Prediction}</Moment>
                                            </span>
                                        </li>
                                        <li className="collection-item pb-4">
                                            <span className="h6 ms-1 text-secondary fw-bolder">Status atual da Tarefa - <span className="text-primary">{(mainTask.Ds_Status_Task)}</span></span>
                                            <select
                                                className="form-select mt-1"
                                                name="status"
                                                value={status}
                                                onChange={e => setDs_Status(e.target.value)}
                                            >
                                                <option defaultValue value="" disabled>Mudar Status</option>
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
                                                Atualizar Status
                                            </button>
                                            <br />
                                        </li>
                                        <li className="collection-item">
                                            <span className="h6 ms-1 text-secondary fw-bold">Comentários</span>
                                        </li>

                                        {mainLoading ? (
                                            <li className="collection-item">
                                                <p className="center mt-3">
                                                    Sem comentários para mostrar...
                                                </p>
                                            </li>
                                        ) : (
                                            mainTask.Ls_Comments.map(Ls_Comments => <CommentItem Ls_Comments={Ls_Comments} key={Ls_Comments._id} />)
                                        )}

                                        <li className="collection-item">
                                            <div className="mx-1 mt-2 ">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Adicionar novo comentário..."
                                                    type="text"
                                                    name="dsComment"
                                                    value={dsComment}
                                                    onChange={e => setDs_Comment(e.target.value)}
                                                    rows="5"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-primary float-end mt-3 me-2 my-2 fw-bolder"
                                                onClick={CreateComment}
                                            >Enviar</button>
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