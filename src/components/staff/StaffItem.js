import React from 'react'
import PropTypes from 'prop-types'

const StaffItem = ({ staff }) => {
    return (
        <li className="collection-item">
            <div>
                {staff.Nm_User}
            </div>
        </li>
    )
}

StaffItem.propTypes = {
    staff: PropTypes.object.isRequired,
}

export default StaffItem
