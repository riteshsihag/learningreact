import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialcontent = []

class App extends Component {
  state = ({
    content: initialcontent,
    naam: "",
    comment: "",
    count:0,
    
  })

  addItem = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff'];
const  random_color = colors[Math.floor(Math.random() * colors.length)];
    const { naam, comment } = this.state;
    if(naam!=="" && comment!==""){
    const newContent = {
      id: uuidv4(),
      naam,
      comment,
      isFavorite: false,
      random_color
    }
    this.setState(prevState => {
      return {
        content: [...prevState.content, newContent],
        naam: "",
        comment: "",
        count:prevState.count + 1,
        
      }
    })}
  };

  changeFavorite=(id)=>{
    this.setState(prevState=>({
     content: prevState.content.map(item=>{
       if(id===item.id){
        return{...item, isFavorite: !item.isFavorite}
       } return item;
     })
    }))
   
   }

  submitName = (event) => {
    this.setState({
      naam: event.target.value
    })
  }

  submitComment = (event) => {
    this.setState({
      comment: event.target.value
    })
  }

  deleteUser = (id) => {
    const { content } = this.state;
    const filteredList = content.filter((eachItem) => {
      return eachItem.id !== id;
    })
    this.setState(prevState=>{ return{content: filteredList , count: prevState.count-1}});
  }
  render() {
    const { content, naam, comment, count } = this.state;
    return (
      <div className='container'>
        <div className='main'>
        <div className='write'>
        <h1 className='heading'>Comments</h1>
        <p>Say something about 4.0 Technologies</p>
        <form>
        <input placeholder='Your Name' value={naam} onChange={this.submitName} type="text" required/> <br />
        <textarea ty placeholder='Your Comment' value={comment} onChange={this.submitComment} rows="10" cols="35" required/>
        <button onClick={this.addItem}>Add Comments</button></form>
        </div>
        <div className='img-container'>
          <img className='img' src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"/>
        </div>
        </div>
       <span className='count-container'> <p className='count'>{count}</p> <p className='com'>Comments</p></span>
        {content.map(item => {
          return <Card random_color={item.random_color} changeFavorite={this.changeFavorite} key={item.id} content={item} deleteUser={this.deleteUser} naam={item.naam} comment={item.comment} />
        })}

      </div>
    );
  }
}

export default App;
