import React from "react";
import PropTypes from "prop-types";
import "./theme.css";
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

const Context = React.createContext(null);

const Theme = ({ children }) => {
	return <Context.Provider context={null}>{children}</Context.Provider>;
};
Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default {
	Theme: Theme,
	Consumer: Context.Consumer
};
