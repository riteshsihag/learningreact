import { Component } from 'react';

class Course extends Component {
 
  render() {
    const {content} = this.props
    return (
      <div className='container'>
        <h1>{content.title}</h1>
        <p>{content.duration}</p>
        <p>{content.description}</p>
        <div className='tags'>
        {content.tagsList.map((item)=>{
          return <p>{item.name}</p>
        })}</div>
      </div>
    );
  }
}

export default Course;
