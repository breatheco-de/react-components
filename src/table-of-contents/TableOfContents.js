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
const getTags = (replaceRegex, source) => ({
    markdown: function(){
        const regex = /(#{1,5})(.*)\n/gm;
        return parse(regex, source).map(t => ({ level: t.level.length, content: t.content.replace(new RegExp(replaceRegex), "") }));
    },
    html: function(){
        const regex = /<[hH](\d)(?:.*)?>(.+)<\/[hH]\1>/gm;
        return parse(regex, source);
    },
});

const TableOfContents = ({source, type, contentType, className, replaceRegex, onClick }) => {
    
    if(!source){
        console.error("Missing source property on table of contents");
        return null;
    } 
        
    let tags = [];
    if(Array.isArray(source)) tags = source;
    else tags = getTags(replaceRegex, source)[contentType]();

    tags = tags.map((t,i) => <li key={i} className={`level${t.level} ml-${t.level} b-${t.level}`}>
            <Anchor onClick={() => onClick && onClick({ ...t, i })}>{t.content}</Anchor>
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
    replaceRegex: PropTypes.string,
    onClick: PropTypes.func,
    contentType: PropTypes.string,
};
TableOfContents.defaultProps = {
	source: null,
	onClick: null,
	type: "ordered",
	replaceRegex: '(:[a-z]+:)*',
	contentType: "markdown",
	className: "",
};
export default TableOfContents;