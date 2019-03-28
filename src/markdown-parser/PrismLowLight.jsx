import React from 'react';
import PropTypes from 'prop-types';
import Refractor from 'refractor/core.js';
import jsx from 'refractor/lang/jsx.js';
const h = React.createElement;

export default (props) => {
  //use jsx
  Refractor.register(jsx);

  const nodes = Refractor.highlight(props.children[0],'jsx');
  const value = nodes.map(mapWithDepth(0));
  const code = h('code', { className: props.className || 'language-jsx' }, value);
  return (typeof props.className == 'undefined') ? code : h('pre', { className: props.className }, code);
            
};


function mapChild (child, i, depth) {
  if (child.tagName) {
    if(Array.isArray(child.properties.className)) child.properties.className = child.properties.className.join(' ');
    return React.createElement(
      child.tagName,
      assign({key: 'lo-' + depth + '-' + i}, child.properties),
      child.children && child.children.map(mapWithDepth(depth + 1))
    );
  }

  return child.value;
}

function mapWithDepth (depth) {
  return function mapChildrenWithDepth (child, i) {
    return mapChild(child, i, depth);
  };
}

function assign (dst, src) {
  for (var key in src) {
    dst[key] = src[key];
  }
  return dst;
}