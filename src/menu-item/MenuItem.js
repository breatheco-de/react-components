import React from "react";
import PropTypes from "prop-types";
import { icon } from "../theme/icons";
import './menu-item.css';

const MenuItem = ({ onClick, collapsed, slug, label, iconName }) => (
	<li
		onClick={() => (onClick) && onClick(slug)}
		className={"bc-menu-item "+(collapsed ? "collapsed" : "")}>
			<i id={slug} className={icon(iconName) + " menuicon"} />
			<span>{label}</span>
	</li>
);
MenuItem.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	mobile: PropTypes.bool,
	collapsed: PropTypes.bool,
	label: PropTypes.string.isRequired,
	icon: PropTypes.string,
	slug: PropTypes.string.isRequired,
	to: PropTypes.string,
	onClick: PropTypes.func.isRequired
};
MenuItem.defaultProps = {
	icon: "",
	slug: null,
	onClick: null,
	collapsed: false,
	to: null,
	mobile: false
};
export default MenuItem;
