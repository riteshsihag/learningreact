import { Component } from 'react';
import {Chrono} from 'react-chrono'
import timelineItemsList from '../../constant/timeline';
import Project from '../ProjectTimelineCard/projects';
import Course from '../CourseTimelineCard/course';
class View extends Component {
 
  render() {
    return (
        <div style={{ width: '1200px', height: '950px' }}>
        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING" >
        {timelineItemsList.map((item)=>{
            if(item.categoryId==="PROJECT"){
            return <Project content={item}/>
            }
            if(item.categoryId==="COURSE"){
                console.log(item)
                return <Course content={item}/>
            }
        })}</Chrono>
      </div>
    );
  }
}

export default View;
