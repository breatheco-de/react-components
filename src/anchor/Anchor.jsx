import React from "react";
import PropTypes from "prop-types";
const Anchor = ({className, children, onClick}) => (<a href="#" className={className && className} onClick={(e) => { e.preventDefault(); onClick && onClick(e); }}>{children}</a>);
Anchor.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	className: PropTypes.string,
	onClick: PropTypes.function,
	children: PropTypes.node.isRequired,
};
Anchor.defaultProps = {
	className: "",
	onClick: null,
	children: null
};
export default Anchor;
