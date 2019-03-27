import React from "react";
import PropTypes from "prop-types";
import "./theme.scss";
import Typography from 'typography';
import doelgerTheme from 'typography-theme-doelger';

doelgerTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    backgroundImage: "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, #7ab3ff 1px, #7ab3ff 2px, rgba(0, 0, 0, 0) 2px)",
    textShadow: "none"
  }
});

const typography = new Typography(doelgerTheme);

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles();

const Theme = ({ children }) => {
	return <div className="theme">{children}</div>;
};
Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

const _Context = React.createContext({
	bar: {}
});
export default {
	Theme: Theme,
	Provider: _Context.Provider,
	Consumer: _Context.Consumer
};
