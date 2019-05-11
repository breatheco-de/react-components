import React from "react";
import PropTypes from "prop-types";
const List = ({ ordered, className, children }) => (ordered) ?
        <ol className={className}>
            {children}
        </ol>
        :
        <ul className={className}>
            {children}
        </ul>;
List.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	ordered: PropTypes.bool
};
List.defaultProps = {
	className: "",
	ordered: false,
	children: null
};
export default List;
