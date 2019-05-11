import React from "react";
import PropTypes from "prop-types";
import "./panel-navbar.css";

const PanelNavbar = ({
	day,
	previous,
	next,
	current,
	collapsed,
	onClick,
	onCollapse
}) => {
	const styles = {
		height: collapsed ? "7px" : "initial",
		overflow: collapsed ? "hidden" : "initial"
	};
	return (
		<div className="panel-navbar">
			<nav className="nav" style={styles}>
				<div className="btn-container mr-auto">
					{previous ? (
						<button
							className="btn btn-light text-right"
							onClick={() => onClick(previous)}>
							<p className="m-0">
								<small>Previous</small>
							</p>
							<i className="fas fa-arrow-left" />
							&nbsp;
							{previous.title}
						</button>
					) : (
						""
					)}
				</div>
				{day ? (
					<div className="mx-auto text-center">
						<p className="mt-2 mb-0">{current.title}</p>
						<p className="day-label">{day.label}</p>
					</div>
				) : (
					""
				)}
				<div className="ml-auto btn-container">
					{next ? (
						<button
							className="btn btn-light text-left"
							onClick={() => onClick(next)}>
							<p className="m-0">
								<small>Up Next:</small>
							</p>
							{next.title} &nbsp;
							<i className="fas fa-arrow-right" />
						</button>
					) : (
						""
					)}
				</div>
			</nav>
			<button className="btn-collapse" onClick={() => onCollapse()}>
				{collapsed ? (
					<i className="fas fa-angle-double-down" />
				) : (
					<i className="fas fa-angle-double-up" />
				)}
			</button>
		</div>
	);
};
PanelNavbar.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	onClick: PropTypes.func,
	onCollapse: PropTypes.func,
	previous: PropTypes.object,
	next: PropTypes.object,
	day: PropTypes.object.isRequired,
	collapsed: PropTypes.bool,
	current: PropTypes.object,
	className: PropTypes.string
};
PanelNavbar.defaultProps = {
	previous: null,
	current: null,
	next: null,
	collapsed: false,
	className: ""
};
export default PanelNavbar;
