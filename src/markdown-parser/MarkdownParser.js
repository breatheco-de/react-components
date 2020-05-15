import React from 'react';
import remark from 'remark';
import './markdown-parser.css';

import './prism-okaidia.css';

//import 'prismjs/themes/prism.css';
import PropTypes from 'prop-types';
import reactRenderer from 'remark-react';
import emoji from 'remark-emoji';
import toc from 'remark-toc';
import PrismRenderer from './PrismLowLight.js';
import { Image, Anchor, Link } from './components.js';
import remarkComments from 'remark-comments';
// import twemoji from 'remark-twemoji';
import variables from 'remark-variables';

const MarkdownParser = ({ source, commentMarker, context }) => {
    let processor = remark().use(emoji).use(toc)
        .use(remarkComments, {
            beginMarker: commentMarker,
            endMarker: commentMarker
        })
        //.use(twemoji)
        .use(reactRenderer, {
            remarkReactComponents: {
                img: Image,
                a: Anchor,
                code: PrismRenderer,
                pre: (props) => (typeof props.children[0] != 'string') ?
                PrismRenderer(props.children[0].props) : PrismRenderer(props)
            },
            sanitize: false
        })
        .use(variables);

    if(context) for(let key in context) processor = processor.data(key, context[key]);

    return (<div className="bc-readme">
        {processor.processSync(source).contents}
    </div>);
};

MarkdownParser.propTypes = {
    source: PropTypes.string.isRequired,
    commentMarker: PropTypes.string,
    context: PropTypes.object
};

MarkdownParser.defaultProps = {
    source: null,
    context: null,
    commentMarker: ''
};
export default MarkdownParser;
