import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import StaffItem from "./StaffItem";
import { getStaff } from "../../actions/staffActions";

const StaffListModal = ({ getStaff, staff: { staff, loading}}) => {
    useEffect(() => {
        getStaff();
        // eslint-disable-next-line
    }, []);

    if (loading || staff === null) {
        return <h4>Loading...</h4>
    }

    return (
        <div className="modal fade" id="staff-list-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Staff List</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul className="collection p-0">
                            {!loading &&
                                staff.map(staff => (
                                    <StaffItem staff={staff} key={staff.id}/>
                                ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

StaffListModal.propTypes = {
    staff: PropTypes.object.isRequired,
    getStaff: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    staff: state.staff
});


export default connect(
    mapStateToProps,
    { getStaff }
)(StaffListModal);