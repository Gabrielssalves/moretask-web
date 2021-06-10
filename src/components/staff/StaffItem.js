import React from 'react'
import PropTypes from 'prop-types'

const StaffItem = ({ staff }) => {
    return (
        <li className="collection-item">
            <div>
                {staff.name}
            </div>
        </li>
    )
}

StaffItem.propTypes = {
    staff: PropTypes.object.isRequired,
}

export default StaffItem
