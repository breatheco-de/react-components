import React from "react";
import PropTypes from "prop-types";
import DropLink from "../droplink";

const options = ["lesson", "replit", "quiz", "assignment"];
const messages = {
	lesson: "Read:",
	quiz: "Answer:",
	replit: "Practice:",
	assignment: "Code:"
};

const ActionableItem = ({ label, done, onClick, dropdown, className, to, icon, type, onDropdownSelect }) => (
    <div className={className} onClick={(force = false) => {
            if (dropdown.length == 0 || force == true) {
                if (onClick) onClick(to);
            }
        }}>
        {icon && <i className={icon + " menuicon"} />}
        {messages[type]}
        <DropLink
            dropdown={dropdown}
            onSelect={option => onDropdownSelect(option)}>
            {label}
        </DropLink>
        {done ? <i className={"fas fa-check text-success"} /> : ""}
    </div>
);
ActionableItem.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	className: PropTypes.string,
	dropdown: PropTypes.array,
	isSelected: PropTypes.bool,
	onDropdownSelect: PropTypes.func.isRequired,
	type: PropTypes.oneOf(options)
};
ActionableItem.defaultProps = {
	icon: null,
	className: '',
	onClick: null,
	dropdown: [],
	done: false
};
export default ActionableItem;
