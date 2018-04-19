import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

class MenuItem extends React.Component{
    constructor(){
        super();
        this.state = {
            mobile: false
        }
    }
    onClick(){
        if(this.props.to) this.props.history.push(this.props.to);
        if(this.props.onClick) this.props.onClick();
    }
    render(){
        return(
            <li onClick={this.onClick.bind(this)} className={'nav-item '+(this.props.mobile) ? 'mobile':''}>
                <a className="nav-link" href="#">
                    <i id={this.props.slug} className={this.props.icon+" menuicon"}></i>
                    <span className="ml-2">{this.props.label}</span>
                </a>
            </li>
        )
    }
}
MenuItem.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  mobile: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func
}
MenuItem.defaultProps = {
    icon: '',
    onClick: null,
    to: null,
    mobile: false
};
export default withRouter(MenuItem);