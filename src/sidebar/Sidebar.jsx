import React from "react";
import PropTypes from "prop-types";
import MenuItem from "../menu-item";
import "./sidebar.scss";

export const Menu = props => {
	const htmlItems = props.items.map((item, i) => (
		<MenuItem
			key={i}
			icon={item.icon}
			label={item.label}
			slug={item.slug}
			collapsed={props.collapsed}
			onClick={() => props.onClick(item)}
		/>
	));

	return (
		<div className="main-menu">
			<ul>{htmlItems}</ul>
		</div>
	);
};
Menu.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	items: PropTypes.array.isRequired,
	collapsed: PropTypes.bool,
	onClick: PropTypes.func
};
Menu.defaultProps = {
	collapsed: true,
	onClick: null,
	items: []
};

const Sidebar = props => {
	if (!props.selectedOption) return <small>No option recognized</small>;
	const collapsedClass = props.collapsed ? "collapsed" : "";
	const MenuComponent = props.selectedOption.component
		? props.selectedOption.component
		: Menu;
	return (
		<div className={"navbar bc-sidebar " + collapsedClass}>
			{MenuComponent ? (
				<MenuComponent
					collapsed={props.collapsed}
					onClick={option => {
						window.location.hash = "menu=" + option.slug;
						props.onSelect(option);
					}}
					items={
						props.selectedOption ? props.selectedOption.items : null
					}
					data={
						props.selectedOption ? props.selectedOption.data : null
					}
				/>
			) : (
				""
			)}
		</div>
	);
};
Sidebar.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	onSelect: PropTypes.func.isRequired,
	onToggle: PropTypes.func,
	collapsed: PropTypes.bool,
	selectedOption: PropTypes.object.isRequired,
	menuItems: PropTypes.array.isRequired
};
Sidebar.defaultProps = {
	onToggle: null,
	onSelect: null,
	collapsed: true,
	menuItems: [],
	selectedOption: null
};
export default Sidebar;
