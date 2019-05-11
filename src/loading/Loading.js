import React from "react";
import PropTypes from "prop-types";

const getColor = (name) => {
	const _typeNames = {
		light: "#BFBFBF",
		secondary: "#5b5b5b",
		success: "#28a745",
		danger: "#D34F56",
		warning: "#darkYellow",
		dark: "#4d4d4d",
		primary: "#004085"
	};
	if(typeof _typeNames[name] == 'undefined') throw new Error('Invalid button type: '+name);
	return _typeNames[name];
};


const Loading = ({ show, className, color }) => (!show) ?  null :
			<div className={className}>
				<svg width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-dual-ring">
                    <circle cx="50" cy="50" ng-attr-r="{{config.radius}}" ng-attr-stroke-width="{{config.width}}" ng-attr-stroke="{{config.stroke}}" ng-attr-stroke-dasharray="{{config.dasharray}}" fill="none" stroke-linecap="round" r="40" stroke-width="4" stroke={getColor(color)} stroke-dasharray="62.83185307179586 62.83185307179586" transform="rotate(32.9432 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="2.7s" begin="0s" repeatCount="indefinite"></animateTransform>
                    </circle>
                </svg>
			</div>;
Loading.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	show: PropTypes.bool,
    color: PropTypes.string,
	className: PropTypes.string,
};
Loading.defaultProps = {
	className: "",
	color: "light",
	show: true
};
export default Loading;
