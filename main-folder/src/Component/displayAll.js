import Card from './card';
import { Component } from 'react';

class DisplayAll extends Component {
   
  render() {
    const {displayView,content} = this.props
    return(

      <div className='card-container'>
        <h1 className='heading'>Events</h1>
        <div className='container'>
          {content.map(item => {
            return (
              <Card key={item.id} displayView={displayView} details={item} />)
          })}
        </div>
      </div>
    )
  }
}

export default DisplayAll;
