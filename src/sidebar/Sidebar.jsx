import React from 'react';
import './sidebar.scss';
import PropTypes from 'prop-types';
class Sidebar extends React.Component{
    constructor(){
        super();
        this.state = {
            toggled: true
        };
    }
    render(){
        const Footer = this.props.footer;
        const Menu = this.props.menu;
        return (<div className={"page-wrapper chiller-theme"+((this.state.toggled) ? ' toggled':'')}>
              <button type="button" onClick={() => this.setState({toggled: true })} className="btn btn-sm btn-dark show-sidebar">
                <i className="fas fa-bars"></i>
              </button>
              <nav className="sidebar-wrapper">
                <div className="sidebar-brand">
                  <a onClick={(e) => { 
                      e.preventDefault();
                      this.props.onBrandClick(e);
                  }} className="title" href="#">BreatheCode</a>
                  <div className="close-sidebar">
                    <i onClick={() => this.setState({toggled: false})} className="fas fa-times"></i>
                  </div>
                </div>
                <div className={"sidebar-content"+(Footer ? ' with-footer':'')}>
                  <div className="sidebar-menu">
                    {Menu && <Menu />}
                  </div>
                </div>
                {Footer && <Footer />}
              </nav>
              <main className="page-content">
                {this.props.children}
              </main>
            </div>);
    }
}
Sidebar.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	deph: PropTypes.number,
	style: PropTypes.object,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	menu: PropTypes.node.isRequired,
	footer: PropTypes.node
};
Sidebar.defaultProps = {
	deph: 1,
	style: null,
	children: null,
	padding: null,
	footer: null,
	menu: null,
	className: ""
};
export default Sidebar;