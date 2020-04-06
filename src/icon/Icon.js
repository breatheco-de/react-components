import React from 'react';
import PropTypes from 'prop-types';
import { icon } from '../theme/icons.js';
import "./icon.css";

const Icon = ({type, size, className}) => {
    const style = {
        width: size,
        height: size
    };
    if(type.indexOf("https://") > -1) return <i className={`bc-icon ${className}`} style={{ ...style, backgroundImage: `url(${type})` }} />;
    else return <i className={`${icon(type)} ${className}`} />
}
Icon.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
};
Icon.defaultProps = {
	type: null,
	className: "",
	size: "25px",
};
export default Icon;