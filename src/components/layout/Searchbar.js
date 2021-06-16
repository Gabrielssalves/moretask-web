import React, { useRef, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchTasks } from "../../actions/taskActions";

const SearchBar = ({ searchTasks }) => {
    const text = useRef('');

    const onChange = e => {
        searchTasks(text.current.value);
    }

    return (
        <Fragment>
            <form className="d-flex input-customsize">
                <input
                    className="form-control  me-2"
                    type="search"
                    placeholder="Search for any task here..."
                    ref={text}
                    onChange={onChange}
                    aria-label="Search"
                />
                <button
                    className="btn btn-outline-success me-5"
                    type="submit"
                >
                    Search
                </button>
            </form>
        </Fragment>
    );
};

SearchBar.propTypes = {
    searchTasks: PropTypes.func.isRequired
};

export default connect(null, { searchTasks })(SearchBar);
