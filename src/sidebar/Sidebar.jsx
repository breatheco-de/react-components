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
        const Brand = this.props.brand;
        return (<div className={"page-wrapper chiller-theme"+((this.state.toggled) ? ' toggled':'')}>
              <button type="button" onClick={() => this.setState({toggled: true })} className="btn btn-dark show-sidebar">
                <i className="fas fa-bars"></i>
              </button>
              <nav className="sidebar-wrapper">
                <div className="sidebar-brand">
                  {Brand ? <Brand/>
                    :
                    <div className="default-brand">
                      <div className="close-sidebar" onClick={() => this.setState({toggled: false})}>
                        <i className="fas fa-times"></i>
                      </div>
                      <a onClick={(e) => { 
                          e.preventDefault();
                          if(this.props.onBrandClick) this.props.onBrandClick(e);
                      }} className="title" href="#">Menu</a>
                    </div>
                  }
                </div>
                <div className={"sidebar-content"+(Footer ? ' with-footer':'')}>
                  <div className="sidebar-menu">
                    {Menu && <Menu />}
                  </div>
                </div>
                {Footer && <Footer onToggle={(value) => this.setState({ toggled: value })} />}
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
	menu: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.function,
  ]),
	onBrandClick: PropTypes.func,
	footer: PropTypes.node
};
Sidebar.defaultProps = {
	deph: 1,
	style: null,
	children: null,
	padding: null,
	onBrandClick: null,
	footer: null,
	menu: null,
	className: ""
};
export default Sidebar;