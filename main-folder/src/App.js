import './App.css';
import Card from './Component/card';
import { Component } from 'react';

class App extends Component {
  state = ({
    content: [
      {
        id: "1",
        element: "Complete the below steps to create your development environment",
      },
      {
        id: "2",
        element: "Complete the below steps to create your development environment",
      },
      {
        id: "3",
        element: "Complete the below steps to create your development environment",
      },
      {
        id: "4",
        element: "Complete the below steps to create your development environment",
      },
      {
        id: "5",
        element: "Complete the below steps to create your development environment",
      },
      {
        id: "6",
        element: "Complete the below steps to create your development environment",
      }
    ]
  })
  deleteUser = (id) =>{
   const{content} = this.state;
   const filteredList = content.filter((eachItem) =>{
   return eachItem.id !== id;
   })
   this.setState({content : filteredList});
  }
  render() {
    const {content} = this.state;
    return (
      <div className='container'>
        <h1>Simple Todos</h1>
        {content.map(item=>{
        return <Card key={item.id} content={item} deleteUser={this.deleteUser} para={item.element} />
        })}
     
      </div>
    );
  }
}

export default App;
