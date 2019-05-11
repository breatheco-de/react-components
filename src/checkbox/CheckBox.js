import React from "react";
import PropTypes from "prop-types";
import fontawesome from "@fortawesome/fontawesome";
import faCheckSquare from "@fortawesome/fontawesome-free-regular/faCheckSquare";
import faSquare from "@fortawesome/fontawesome-free-regular/faSquare";
fontawesome.library.add(faCheckSquare);
fontawesome.library.add(faSquare);

import "./checkbox.css";
class CheckBox extends React.Component {
	constructor() {
		super();
		this.state = {
			checked: false,
			mirroredChecked: false
		};
	}

	static getDerivedStateFromProps(props, state) {
		if (props.checked !== state.checked) {
			const checked = state.mirroredChecked == state.checked ? props.checked : state.checked;
			return {
				checked,
				mirroredChecked: checked,
				withToggler: props.withToggler
			};
		}
		return {
			checked: state.checked,
			mirroredChecked: state.checked,
			withToggler: props.withToggler
		};
	}
	setChecked(checked){
		this.setState({ checked });
		if(this.props.onClick) this.props.onClick(checked);
	}
	componentDidMount() {
		this.setChecked(this.props.checked);
	}

	render() {
		const { checked } = this.state;
		const { className, withToggler } = this.props;
		return (
			<div className={"bc-checkbox "+className}>
				{ !withToggler ?
					<i
						className={`far fa${checked ? `-check` : ''}-square`}
						onClick={() => this.setChecked(!checked)}
					/>
					:
					<div className="btn-group btn-group-toggle float-right" data-toggle="buttons">
						<button type="button" onClick={() => this.setChecked(false)} className={`btn btn-sm ${!checked ? 'btn-default active' : 'btn-light'}`}>
							<i className="fas fa-times" />
						</button>
						<button type="button" onClick={() => this.setChecked(true)} className={`btn btn-sm ${checked ? 'btn-default active' : 'btn-light'}`}>
							<i className="fas fa-check" />
						</button>
					</div>
				}
				<label htmlFor="checkbox">{this.props.label}</label>
			</div>
		);
	}
}
CheckBox.propTypes = {
	onClick: PropTypes.func,
	withToggler: PropTypes.bool,
	checked: PropTypes.bool,
	label: PropTypes.string,
	className: PropTypes.string
};
CheckBox.defaultProps = {
	withToggler: false,
	label: "<No label defined>",
	className: "",
	checked: null,
};
export default CheckBox;
