import React from 'react';
import TimeLineDay from './TimeLineDay.js';
import PropTypes from 'prop-types';
import './timeline.css';

class TimeLine extends React.Component{

    constructor(){
        super();
        this.state = {
            layout: "one-column",
            side: "left",
            selected: null,
            course: "web-development",
        };
        this.timeline = null;
    }

    componentDidMount(){
        this.setState({ selected: this.props.daySelected  });
    }

    render(){
        const timelineStyles = {
           // width: (this.state.layout === "one-column") ? "330px" : "660px"
           height: this.props.height
        };
        const aditionalLineClasses = () => { return this.state.side; };
        const days = this.props.days.map((day, i)=>{
            if(typeof day.dayNumber === 'undefined') throw new Error('Days must have a dayNumber property');
           return <TimeLineDay key={i}
                    label={day.label}
                    description={day.description}
                    technologies={day.technologies}
                    isSelected={this.state.selected && (this.state.selected == day.dayNumber)}
                    onClick={()=>{
                        day.course = this.state.course;
                        this.setState({ selected: day.dayNumber });
                        this.props.onClick(day);
                    }}
                />;
        });
        const collapsedClass = (this.props.collapsed) ? 'collapsed':'';

        return (
            <div className={"timeline "+collapsedClass}>
                <span className={"line "+aditionalLineClasses()}></span>
                <ul style={timelineStyles}
                    onWheel = {(e) => {
                        this.timeline.scrollTo(0,this.timeline.scrollTop + e.deltaY);
                    }}
                    ref={(elm) => this.timeline = elm}>
                	{days}
                </ul>
            </div>
        );
    }
}
TimeLine.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  daySelected: PropTypes.number,
  height: PropTypes.string,
  days: PropTypes.array.isRequired,
  collapsed: PropTypes.bool
};
TimeLine.defaultProps = {
  daySelected: null,
  collapsed: false,
  height: "400px",
  days: []
};
export default TimeLine;