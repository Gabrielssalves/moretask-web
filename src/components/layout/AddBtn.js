import React from 'react'

const AddBtn = () => {
    return (
        <div className="btn-group dropup btn-modal-workflow position-fixed">
            <button type="button" className="btn btn-danger rounded-circle" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-fw fa-plus" style={{ fontSize: '1.75em' }} />
            </button>
            <ul className="dropdown-menu modal-menu">
                <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staff-list-modal">
                <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} /> <span className="h5 ms-2 fw-bolder">{' '}Ver Staff</span>
                </button>
                <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#add-task-modal">
                <i className="fa fa-fw fa-clipboard-list" style={{ fontSize: '1.75em' }} /> <span className="h5 ms-2 fw-bolder">{' '}Add Tarefa</span>
                </button>
            </ul>
        </div>
    );
};

export default AddBtn