import React from 'react';
import remark from 'remark';
import './markdown-parser.scss';

import './prism-okaidia.scss';

//import 'prismjs/themes/prism.css';
import PropTypes from 'prop-types';
import reactRenderer from 'remark-react';
import emoji from 'remark-emoji';
import PrismRenderer from './PrismLowLight.jsx';
import { Image, Anchor, Link } from './components.jsx';

const MarkdownParser = ({ source }) => (<div className="bc-readme">
    {
        remark().use(emoji).use(reactRenderer, {
            remarkReactComponents: {
                img: Image,
                a: Anchor,
                code: PrismRenderer,
                pre: (props) => (typeof props.children[0] != 'string') ? 
                                    PrismRenderer(props.children[0].props) : PrismRenderer(props)
            },
            sanitize: false
        }).processSync(text).contents
        
    }
</div>);

MarkdownParser.propTypes = {
    source: PropTypes.string.isRequired,
};

MarkdownParser.defaultProps = {
    source: null
};
export default MarkdownParser;
