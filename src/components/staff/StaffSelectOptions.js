import React, { useEffect } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getStaff } from "../../actions/staffActions";

const StaffSelectOptions = ({ getStaff, staff: { staff, loading } }) => {
    useEffect(() => {
        getStaff();
        // eslint-disable-next-line
    }, []);


    return (
        !loading && staff !== null && staff.map(staff => <option key={staff._id} value={`${staff.Nm_User}`}>
            {staff.Nm_User}
        </option>)
    )
}

StaffSelectOptions.propTypes = {
    staff: PropTypes.object.isRequired,
    getStaff: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    staff: state.staff
});

export default connect(mapStateToProps, { getStaff })(StaffSelectOptions)
