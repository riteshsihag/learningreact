import { Component } from 'react';

class Child extends Component {
 
  render() {

    return (
      <div className='child'>
       {this.props.children}
      </div>
    );
  }
}

export default Child;
