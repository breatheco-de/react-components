import React from "react";
import PropTypes from "prop-types";
import "./droplink.css";
import { icon } from "../theme/icons";

class DropLink extends React.Component {
	constructor() {
		super();
		this.state = {
			opened: false
		};
		this.beingHovered = false;
		this.dropdown = null;
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
		const styles = {
			marginLeft: this.dropdown ? "-" + this.dropdown.with : "0"
		};
		const menuOptions = this.props.dropdown.map((opt, i) => (
			<a
				key={i}
				className="dropdown-item"
				onClick={() => this.props.onSelect && this.props.onSelect(opt)}>
				{opt.icon && <i className={icon(opt.icon)+" mr-1"} />}
				{opt.label}
			</a>
		));
		return (
			<div
				className={
					"bcdroplink dropdown " +
					this.props.className +
					(this.state.opened ? " show" : "")
				}>
				<a
					className="btn dropdown-toggle"
					data-toggle="dropdown"
					onClick={e => {
						this.setState({ opened: !this.state.opened });
						e.preventDefault();
						return false;
					}}>
					{this.props.children}
				</a>
				{this.props.dropdown.length > 0 && this.state.opened ? (
					<div
						ref={c => (this.dropdown = c)}
						style={styles}
						className={
							"dropdown-menu " +
							this.props.direction +
							(this.state.opened ? " show" : "")
						}
						onMouseOut={() => {
							this.beingHovered = false;
							if (this.state.opened)
								setTimeout(() => {
									if (!this.beingHovered) this.setState({ opened: false });
								}, 1000);
						}}
						onMouseOver={() => (this.beingHovered = true)}>
						{menuOptions}
					</div>
				) : (
					""
				)}
			</div>
		);
	}
}
DropLink.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	dropdown: PropTypes.array,
	className: PropTypes.string,
	onSelect: PropTypes.func.isRequired,
	direction: PropTypes.string,
	icon: PropTypes.string
};
DropLink.defaultProps = {
	dropdown: [],
	className: "",
	direction: "down",
	icon: null,
	onSelect: null
};
export default DropLink;
