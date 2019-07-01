import React from "react";
import PropTypes from "prop-types";
import { icon } from '../theme/icons';

const types = (name) => {
	const _typeNames = {
		light: "btn btn-outline-light",
		secondary: "btn btn-outline-secondary",
		success: "btn btn-outline-success",
		danger: "btn btn-outline-danger",
		warning: "btn btn-outline-warning",
		dark: "btn btn-outline-dark",
		primary: "btn btn-outline-primary"
	};
	if(typeof _typeNames[name] == 'undefined') throw new Error('Invalid button type: '+name);
	return _typeNames[name];
};
const Button = ({ type, className, onClick, iconName, label, children }) => (
    <button
        className={`${types(type)} ${className ? className : ''}`}
        onClick={() => onClick()}>
        {icon && <i className={icon(iconName) + " btnicon"} />}
        {" "}
        {label || children}
    </button>
);
Button.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	onClick: PropTypes.func.isRequired,
	iconName: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string
};
Button.defaultProps = {
	iconName: null,
	type: 'secondary',
	className: null,
	label: null
};
export default Button;
