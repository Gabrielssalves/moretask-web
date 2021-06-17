import React from 'react';
import Moment from "react-moment";
import PropTypes from "prop-types";

const CommentItem = ({ Ls_Comments }) => {
    return (
        <li className="collection-item">
            <strong className="ms-1">{Ls_Comments.Ob_User.Nm_User}</strong>
            <span>{" - "}<Moment format="MMMM Do YYYY, h:mm A">{Ls_Comments.Dt_Created}</Moment></span>
            <div className="comment-textarea ms-1 text-secondary">
                {Ls_Comments.Ds_Comment}
            </div>
        </li>
    )
}

CommentItem.propTypes = {
    Ls_Comments: PropTypes.object.isRequired
}

export default CommentItem
