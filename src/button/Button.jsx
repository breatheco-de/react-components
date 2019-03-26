import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { icon } from '../theme/icons';

const types = (name) => {
	const _typeNames = {
		light: "btn btn-light",
		success: "btn btn-success",
		danger: "btn btn-danger",
		warning: "btn btn-warning",
		info: "btn btn-info"
	};
	if(typeof _typeNames[name] == 'undefined') throw new Error('Invalid button type: '+name);
	return _typeNames[name];
};
class Button extends React.Component {

	render() {
		return (
			<button
				className={"bcbutton " + types(this.props.type)+ (this.props.className ? ' '+this.props.className : '')}
				onClick={() => this.props.onClick()}>
				{this.props.icon && <i className={icon(this.props.icon) + " btnicon"} />}
				{" "}
				{this.props.label || this.props.children}
			</button>
		);
	}
}
Button.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	onClick: PropTypes.func.isRequired,
	icon: PropTypes.string,
	type: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string
};
Button.defaultProps = {
	icon: null,
	type: 'light',
	className: null,
	label: null
};
export default Button;
