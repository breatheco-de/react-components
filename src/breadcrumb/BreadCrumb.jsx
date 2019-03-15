import React from "react";
import PropTypes from "prop-types";
import "./breadcrumb.scss";
class BreadCrumb extends React.Component {
	render() {
		if (this.props.collapsed)
			return (
				<ul className="breadcrumb">
					<li
						onClick={() => this.props.onClick(this.props.levels[0])}>
						{ typeof this.props.logoURL !== 'undefined' ?
							<img
								className="logo"
								src={process.env.STATIC_PATH + this.props.logoURL}
							/>:''
						}
					</li>
				</ul>
			);

		const DOMPieces = this.props.levels.map((level, i) => {
			return (
				<li key={i} onClick={() => this.props.onClick(level)}>
					{level.label}
				</li>
			);
		});
		return <ul className="breadcrumb">{DOMPieces}</ul>;
	}
}
BreadCrumb.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	onClick: PropTypes.func,
	logoURL: PropTypes.string,
	mobile: PropTypes.bool,
	levels: PropTypes.array.isRequired
};
BreadCrumb.defaultProps = {
	mobile: false,
	logoURL: '',
	levels: []
};
export default BreadCrumb;
