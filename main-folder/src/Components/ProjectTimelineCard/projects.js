import { Component } from 'react';

class Project extends Component {
 
  render() {
    const {content} = this.props
    return (
      <div className='container'>
        <img className='project-img' src={content.imageUrl}/>
        <h2>{content.projectTitle}</h2>
        <p>{content.description}</p>
        <a href={content.projectUrl}>Visit</a>
      </div>
    );
  }
}

export default Project;
