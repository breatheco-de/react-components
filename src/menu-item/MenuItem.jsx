import React from "react";
import PropTypes from "prop-types";

const MenuItem = () => (
	<li
		onClick={() => {
			if (this.props.onClick) this.props.onClick();
		}}
		className={this.props.collapsed ? "collapsed" : ""}>
		<i id={this.props.slug} className={this.props.icon + " menuicon"} />
		<span>{this.props.label}</span>
	</li>
);
MenuItem.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	mobile: PropTypes.bool,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string,
	history: PropTypes.object.isRequired,
	to: PropTypes.string,
	onClick: PropTypes.func.isRequired
};
MenuItem.defaultProps = {
	icon: "",
	onClick: null,
	history: null,
	to: null,
	mobile: false
};
export default MenuItem;
