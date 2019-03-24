import React from "react";
import PropTypes from "prop-types";
import DropLink from "../droplink";
import './actionable-item.scss';

const options = ["lesson", "replit", "quiz", "assignment"];
const messages = {
	lesson: "React:",	
	quiz: "Answer:",	
	replit: "Practice:",	
	assignment: "Code:"	
};

class ActionableItem extends React.Component {
	
	onClick(force = false) {
		if (this.props.dropdown.length == 0 || force == true) {
			if (this.props.onClick) this.props.onClick(this.props.to);
		}
	}

	render() {
		return (
			<li className="actionable-item" onClick={this.onClick.bind(this)}>
				{this.props.icon && <i className={this.props.icon + " menuicon"} />}
				{messages[this.props.type]}
				<DropLink
					dropdown={this.props.dropdown}
					onSelect={option => this.props.onDropdownSelect(option)}>
					{this.props.label}
				</DropLink>
				{this.props.done ? <i className={"fas fa-check done"} /> : ""}
			</li>
		);
	}
}
ActionableItem.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	dropdown: PropTypes.array,
	isSelected: PropTypes.bool,
	onDropdownSelect: PropTypes.func.isRequired,
	type: PropTypes.oneOf(options)
};
ActionableItem.defaultProps = {
	icon: null,
	onClick: null,
	dropdown: [],
	done: false
};
export default ActionableItem;
