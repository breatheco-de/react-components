import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import "./tableofcontents.css";
import { Anchor } from '../';

const parse = (regex, source) => {
    let tags = [];
    let m;
    // console.log("Match", regex.exec(source));
    while ((m = regex.exec(source)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        tags.push({ level: m[1], content: m[2].trim() });
    }
    
    return tags;
}
const hierarchyNode = (node, sanitize) => {
    const content = sanitize(node.content);
    return {
        content,
        level: node.level.length,
        to: content.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
    }
};
const getTags = (source, sanitize) => ({
    markdown: function(){
        const regex = /(#{1,5})(.*)\n/gm;
        return parse(regex, source).map((n) => hierarchyNode(n, sanitize));
    },
    html: function(){
        const regex = /<[hH](\d)(?:.*)?>(.+)<\/[hH]\1>/gm;
        return parse(regex, source).map((n) => hierarchyNode(n, sanitize))
    },
});

const defaultSanitize = (innerHTML) => {
    return innerHTML.replace(new RegExp('(:[a-z]+:)*'), "");
};
const TableOfContents = ({source, type, contentType, className, sanitizeHeading, onClick }) => {
    
    if(!source){
        console.error("Missing source property on table of contents");
        return null;
    } 
        
    let tags = [];
    console.log(contentType);
    if(Array.isArray(source)) tags = source;
    else tags = getTags(source, sanitizeHeading ? sanitizeHeading : defaultSanitize)[contentType]();

    tags = tags.map((t,i) => <li key={i} className={`level${t.level} ml-${t.level} b-${t.level}`}>
            <Anchor to={t.to} onClick={() => onClick && onClick({ ...t, i })}>{t.content}</Anchor>
        </li>);
    return <ol className={`bc_tableofcontents ${type} ${className}`}>{tags}</ol>; 

};

TableOfContents.propTypes = {
	source: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    type: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    sanitizeHeading: PropTypes.func,
    contentType: PropTypes.string,
};
TableOfContents.defaultProps = {
	source: null,
	onClick: null,
	sanitizeHeading: null,
	type: "ordered",
	contentType: "markdown",
	className: "",
};
export default TableOfContents;