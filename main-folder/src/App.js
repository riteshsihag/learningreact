import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import content from './constants/content';
class App extends Component {
  state = ({
   count:0
  })
  back = () =>{
    if(this.state.count!==0){
    this.setState(prevState=>{
     return {count: prevState.count-1}
    })}
  }
  forward = () =>{
    if(this.state.count!==content.length-1){
      this.setState(prevState=>{
        return {count: prevState.count+1}
       })
    }
   
   
  }
  render() {
   const {count} = this.state;
   const filterElement = content[count];
    return (
      <div className='container'>
        <img className='arrow' onClick={this.back} src='https://assets.ccbp.in/frontend/react-js/left-arrow-img.png '/>
        
       <Card key={filterElement.id} url={filterElement.link} para={filterElement.element} />
       
     <img className='arrow' onClick={this.forward} src='https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'/>
      </div>
    );
  }
}

export default App;
