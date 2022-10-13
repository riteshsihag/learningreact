import './App.css';
import Card from './Component/card';
import Card2 from './Component/card2';
import { Component } from 'react';
import content from './constants/content';

class App extends Component {
  state = {
    commonId: content[0].id
  }

  
 clickCapital = (event)=> {
    content.find((item)=>{
    if(item.name === event.target.value){
    this.setState({ commonId: item.id }) 
    }
   })
  }

  findSimilarID = () => {
    const { commonId } = this.state;
    const similarID = content.find(element => {
      return element.id === commonId
    })
    return similarID;
  }
 

  render() {
    const similarID = this.findSimilarID();
   
    return (
      <>
      <div className='country-container'>
       
         <Card2 key={similarID.id} name={similarID.name1} />
       
        </div>
        <div className='capital-container'>
          <select onChange={this.clickCapital}>
        {content.map(item => {
          return <Card key={item.id}  name={item.name} />
        })}</select></div>
      </>
    );
  }
}

export default App;
