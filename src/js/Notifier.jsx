import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Notifications from './stores/NotificationStore';

let Message = (props) => { 
  const Msg = props.noti.msg;
  return (
    <li className={`alert ${props.typeClass}`}
      style={{
        height: (confirm) ? 'inherit' : '0'
      }}
    >
      { (typeof Msg !== 'string') ? <Msg onConfirm={props.noti.onConfirm} /> : props.noti.msg }
      { (props.confirm && typeof Msg === 'string') ? 
          (<p>
            <button className="btn btn-light" onClick={() => props.noti.onConfirm(false)}>Cancel</button>
            <button className="btn btn-success ml-2" onClick={() => props.noti.onConfirm(true)}>Confirm</button>
          </p>)
          : ''
      }
    </li>
  );
};

class Notifier extends React.Component{

    constructor(){
      super();
      this.state = {
        notifications: [],
        typeClasses: {
          error: 'alert-danger',
          success: 'alert-success',
          info: 'alert-info',
          warning: 'alert-warning'
        }
      };
    }
    
    componentDidMount(){
        this.notiSubs = Notifications.subscribe("notifications", 
            (notifications) => this.setState({ notifications })
        );
    }
    
    componentWillUnmount(){
      this.notiSubs.unsubscribe();
    }
    
    render(){
        const notifications = this.state.notifications.map((noti, i) => {
          if(typeof noti.msg === 'undefined') return '';
          if(typeof noti.onConfirm === 'function') return <Message key={i} noti={noti} confirm={true} typeClass={this.state.typeClasses[noti.type]} />;
          return (<CSSTransitionGroup key={i}
            transitionName="bcnotification"
            transitionAppear={true}
            transitionAppearTimeout={noti.timout}
            transitionEnter={false}
            transitionLeave={false}>
              <Message key={i} noti={noti} confirm={false} typeClass={this.state.typeClasses[noti.type]} />
          </CSSTransitionGroup>);
        });
        
        return(<ul className={"bcnotifier "+this.props.className}>{notifications}</ul>);
    }
}
Notifier.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  className: PropTypes.string
};
Notifier.defaultProps = {
  className: ''
};
export default Notifier;