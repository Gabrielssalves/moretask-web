import React, { useEffect, Fragment } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTasks } from "../../actions/taskActions"
import TaskItem from "./TaskItem"
import AddBtn from "../layout/AddBtn";
import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import StaffListModal from "../staff/StaffListModal";

const Workflow = ({ task: { tasks, loading }, getTasks}) => {

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line
    }, []);


    if (loading || tasks === null) {
        return <h4>Loading...</h4>
    }

    return (
        <Fragment>
            <ul className="collection width-header mt-4 p-0">
                <li className="collection-header mt-4">
                    <h3 className="center">Workflow</h3>
                </li>
                {!loading && tasks.length === 0 ? (
                    <p className="center">No task to show...</p>
                ) : (
                    tasks.map(task => <TaskItem task={task} key={task.id} />)
                )}
            </ul>
            <AddBtn />
            <AddTaskModal />
            <EditTaskModal />
            <StaffListModal />
        </Fragment>
    )

    

}

Workflow.propTypes = {
    task: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    task: state.task
});

export default connect(mapStateToProps, { getTasks })(Workflow);