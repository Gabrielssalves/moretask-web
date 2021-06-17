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

    const validationErrorToast = () => toast("Preencha todos os campos.", { progressClassName: "Toastify__progress-bar--dark", toastId: "custom-id-error" });
    const taskUpdatedToast = () => toast("Tarefa atualizada com sucesso!", { autoClose: 2000, toastId: "custom-id-success" });

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
    }

    const onSubmit = () => {
        if (name === "" || userName === "" || dtStart === "" || dtPrediction === "") {
            validationErrorToast();
        } else {
            const updTask = {
                _id: current._id,
                name,
                user,
                description,
                status,
                dtPrediction
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
                        <h5 className="modal-title" id="staticBackdropLabel">Editar Tarefa</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-2">
                            <span className="input-group-text" id="basic-addon1">Nome da Tarefa</span>
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
                                <option defaultValue value="" disabled>Mudar Status</option>
                                <option value="Backlog">Backlog</option>
                                <option value="Aberto">Aberto</option>
                                <option value="Andamento">Andamento</option>
                                <option value="Concluido">Concluido</option>
                            </select>
                            <span className="input-group-text" id="basic-addon1">Status da Tarefa</span>
                        </div>
                        <div className="input-group mb-2">
                            <select
                                className="form-select"
                                name="userName"
                                value={userName}
                                onChange={e => { setUserName(e.target.key); browseUsers(e.target.value) }}
                            >
                                <option value="" disabled>Apontar Responsável</option>
                                <StaffSelectOptions />
                            </select>
                            <span className="input-group-text" id="basic-addon1">Responsável</span>
                        </div>
                        <div className="form-group mb-2">
                            <div className="col-10 mb-2">
                                <span className="input-group-text" id="basic-addon">Início da Tarefa</span>
                                <input
                                    className="form-control"
                                    type="datetime-local"
                                    id="dtStart"
                                    value={dtStart}
                                    onChange={e => setDt_Start(e.target.value)}
                                    disabled
                                />
                            </div>
                            <div className="col-10">
                                <span className="input-group-text" id="basic-addon1">Previsão Final da Tarefa</span>
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
                            <span className="input-group-text" id="basic-addon1">Descrição</span>
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
                            Cancelar
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onSubmit}>
                            Atualizar
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