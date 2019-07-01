import React from "react";
import PropTypes from "prop-types";
import "./filter.css";
import Anchor from '../anchor';

class Filter extends React.Component {
	constructor(){
		super();
		this.state = {
			selectedValues: [],
			opened: false
		};
	}
	changeSelectedValues(selectedValues){
		this.setState({ selectedValues });
		if(this.props.onChange) this.props.onChange(selectedValues);
	}
	render() {
		const { label, className, options, placeholder, multiselect, optionComponent } = this.props;
		const Option = optionComponent ? optionComponent : ({data, onSelect, selected, onDeselect}) => <li
			className={selected ? 'selected' : ''}
			onClick={() => onSelect(data)}>
                {data.label}
                {selected &&  <span className="icon"><i
                        className={"fas fa-times fa-xs"}
                        onClick={(e) => {
                            e.stopPropagation();
                            onDeselect(data);
                        }}
                    /></span>
                }
		</li>;
		return (
			<div className={`bcfilter ${className}  ${this.state.opened ? 'open' : ''}`}>
				<div className={"display-component bcbox"}>
					<div className={"placeholder"} onClick={() => this.setState({ opened: !this.state.opened })}>
						{!this.state.selectedValues || this.state.selectedValues.length == 0 ?
							placeholder
							:
							`${label}: ${!multiselect ? this.state.selectedValues.label : this.state.selectedValues.map(v => v.label).join(', ')}`
						}
					</div>
					<div className={"options-component bcbox"}>
						{multiselect && <p><Anchor onClick={() => this.setState({ selectedValues: [] })}>Unselect all</Anchor></p>}
						<ul style={{ flexDirection: this.props.direction, width: this.props.width }}>
							{options.map((opt, i) => <Option className="bcbox" key={i}
								data={opt}
								selected={multiselect ?
									typeof this.state.selectedValues.find(o => o.value === opt.value) === 'undefined' ? false : true
									:
									!this.state.selectedValues ? false : this.state.selectedValues.value === opt.value
								}
								onSelect={() => this.changeSelectedValues(!multiselect ? opt : this.state.selectedValues.filter(o => o.value != opt.value).concat([opt]))}
								onDeselect={() => this.changeSelectedValues(!multiselect ? null : this.state.selectedValues.filter(o => o.value != opt.value)) }
							/>)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
Filter.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	className: PropTypes.string,
	label: PropTypes.string.isRequired,
	optionComponent: PropTypes.node,
	multiselect: PropTypes.bool,
    direction: PropTypes.string,
    width: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func
};
Filter.defaultProps = {
	label: "Label",
	placeholder: "Select a gender",
	className: "",
	direction: "row",
	width: "500px",
	optionComponent: null,
	multiselect: true,
	onChange: null,
	options: null,
};
export default Filter;
