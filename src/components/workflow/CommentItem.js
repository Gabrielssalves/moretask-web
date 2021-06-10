import React from 'react';
import Moment from "react-moment";
import PropTypes from "prop-types";

const CommentItem = ({ ls_comments }) => {
    return (
        <li className="collection-item">
            <strong className="ms-1">{ls_comments.ob_user}</strong>
            <span>{" - "}<Moment format="MMMM Do YYYY, h:mm A">{ls_comments.dt_created}</Moment></span>
            <div className="comment-textarea ms-1 text-secondary">
                {ls_comments.ds_comment}
            </div>
        </li>
    )
}

CommentItem.propTypes = {
    ls_comments: PropTypes.object.isRequired
}

export default CommentItem
