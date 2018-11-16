import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
class Button extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: "checked"
		};
	}

	buttonType() {
		switch (this.props.type) {
			case "light":
				return "btn btn-light";
				break;
			default:
				return "btn btn-light";
				break;
		}
	}

	render() {
		return (
			<button
				className={"bcbutton " + this.buttonType()}
				onClick={() => this.props.onClick()}>
				<i className={this.props.icon + " btnicon"} />{" "}
				{this.props.label}
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
	label: PropTypes.string
};
Button.defaultProps = {
	icon: '',
	type: 'light',
	label: ''
};
export default Button;
