import React, { useEffect, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions"
import TaskItem from "./TaskItem"
import AddBtn from "../layout/AddBtn";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import StaffListModal from "../staff/StaffListModal";
import Spinner from "../layout/Spinner";
import Page from '../layout/Page';



const Workflow = ({ task: { tasks, loading }, getTasks }) => {

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line
    }, []);


    if (loading === true) {
        return <Spinner />
    } else {
        return (
            <Page
                body={
                    <Fragment>
                        <div id="kanban">
                            <div id="scroller">
                                <div id="boards">
                                    <div className="board" id="board1">
                                        <header className="text-center">Backlog</header>
                                        <div className="cards" id="b1">
                                            {!loading && tasks.filter(task => task.Ds_Status_Task === "Backlog").length === 0 ? (
                                                <p className="center">Sem tarefas para mostrar...</p>
                                            ) : (
                                                tasks.filter(task => task.Ds_Status_Task === "Backlog").map(task => <TaskItem task={task} key={task._id} />)
                                            )}

                                        </div>
                                    </div>

                                    <div className="board" id="board2">
                                        <header className="text-center">Aberto</header>
                                        <div className="cards" id="b2">
                                            {!loading && tasks.filter(task => task.Ds_Status_Task === "Aberto").length === 0 ? (
                                                <p className="center">Sem tarefas para mostrar...</p>
                                            ) : (
                                                tasks.filter(task => task.Ds_Status_Task === "Aberto").map(task => <TaskItem task={task} key={task._id} />)
                                            )}
                                        </div>
                                    </div>

                                    <div className="board" id="board3">
                                        <header className="text-center">Em Andamento</header>
                                        <div className="cards" id="b3">
                                            {!loading && tasks.filter(task => task.Ds_Status_Task === "Andamento").length === 0 ? (
                                                <p className="center">Sem tarefas para mostrar...</p>
                                            ) : (
                                                tasks.filter(task => task.Ds_Status_Task === "Andamento").map(task => <TaskItem task={task} key={task._id} />)
                                            )}
                                        </div>
                                    </div>

                                    <div className="board" id="board4">
                                        <header className="text-center">Concluído</header>
                                        <div className="cards" id="b4">
                                            {!loading && tasks.filter(task => task.Ds_Status_Task === "Concluido").length === 0 ? (
                                                <p className="center">Sem tarefas para mostrar...</p>
                                            ) : (
                                                tasks.filter(task => task.Ds_Status_Task === "Concluido").map(task => <TaskItem task={task} key={task._id} />)
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AddBtn />
                        <AddTaskModal />
                        <EditTaskModal />
                        <StaffListModal />
                    </Fragment>
                }>
            </Page >
        )
    }


}


Workflow.propTypes = {
    task: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    task: state.task
});

export default connect(mapStateToProps, { getTasks })(Workflow);