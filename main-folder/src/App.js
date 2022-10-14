import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialcontent = []

class App extends Component {
  state = ({
    content: initialcontent,
    naam: "",
    date: "",

  })

  addItem = () => {
    const { naam, date } = this.state;
    if (naam !== "" && date !== "") {
      const newContent = {
        id: uuidv4(),
        naam,
        date,
        isFavorite: false,
      }
      this.setState(prevState => {
        return {
          content: [...prevState.content, newContent],
          naam: "",
          date: ""
        }
      })
    }
  };

  changeFavorite = (id) => {
    this.setState(prevState => ({
      content: prevState.content.map(item => {
        if (id === item.id) {
          return { ...item, isFavorite: !item.isFavorite }
        } return item;
      })
    }))

  }

  submitName = (event) => {
    this.setState({
      naam: event.target.value
    })
  }

  submitdate = (event) => {
    this.setState({
      date: event.target.value
    })
  }
 
  render() {
   
    const { content, naam, date} = this.state;
   const starredElement = () =>{
      const star = content.map(item=>{
        if(item.isFavorite){
         content.filter(item=>{
          
         })
        }
      })
     }
    return (
      <div className='container'>
        <div className='main'>
          <div className='write'>
            <h1 className='heading'>Add Appointment</h1>
            <form>
              <p>Title</p>
              <input placeholder='Title' value={naam} onChange={this.submitName} type="text" required /> <br />
              <p>Date</p>
              <input value={date} onChange={this.submitdate} className="inputdate" type="date" rows="10" cols="35" required />
              <button onClick={this.addItem}>Add</button></form>
          </div>
          <div className='img-container'>
            <img className='img' src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" />
          </div>
        </div>
        <div className='star'>
        <h2>Appointments</h2>
        <p className='starred' onClick={starredElement}>Starred</p>
        </div>
        <div className='flex-container'>
        {content.map(item => {
          return <Card changeFavorite={this.changeFavorite} key={item.id} content={item} naam={item.naam} date={item.date} />
        })}</div>

      </div>
    );
  }
}

export default App;
