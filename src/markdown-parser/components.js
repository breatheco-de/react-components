import React from 'react';
import PropTypes from 'prop-types';

  //props.children[0]
export const Image = (props) => (<span className="d-block text-center"><img src={props.src} alt={props.alt} /></span>);
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
  //props.children[0]
export const Anchor = (props) => (<a target="_blank" rel="noopener noreferrer" href={props.href}>{props.children[0]}</a>);
Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export const Link = ({onClick, slug, children}) => (<a href={"#"+slug}>{children}</a>);
Link.propTypes = {
    children: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
    onClick: PropTypes.func
};