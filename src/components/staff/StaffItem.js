import React from 'react'
import PropTypes from 'prop-types'

const StaffItem = ({ staff }) => {
    console.log(staff.Fg_Admin)
    return (
        <tr>
            <td>
                {staff.Nm_User}
            </td>
            <td>
                {staff.Fg_Admin === true ? (<p>Admin</p>) : (<p>Usuário</p>)}
            </td>
        </tr>
    )
}

StaffItem.propTypes = {
    staff: PropTypes.object.isRequired,
}

export default StaffItem
