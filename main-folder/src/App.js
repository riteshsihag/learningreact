import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialcontent = []

class App extends Component {
  state = ({
    content: initialcontent,
    gmail: "",
    username: "",
    password: "",
    count: 0,

  })

  addItem = () => {
    const { gmail, username, password } = this.state;
    if (gmail !== "" && username !== "") {
      const newContent = {
        id: uuidv4(),
        gmail,
        username,
        password,
        onShow: false,
      }
      this.setState(prevState => {
        return {
          content: [...prevState.content, newContent],
          gmail: "",
          username: "",
          password: "",
          count: prevState.count + 1,

        }
      })
    }
  };

  submitName = (event) => {
    this.setState({
      gmail: event.target.value
    })
  }

  submitusername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  submitPassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  deleteUser = (id) => {
    const { content } = this.state;
    const filteredList = content.filter((eachItem) => {
      return eachItem.id !== id;
    })
    this.setState(prevState => { return { content: filteredList, count: prevState.count - 1 } });
  }
  render() {
    const { content, gmail, username, count, password } = this.state;
    return (
      <div className='container'>
        <div className='main'>
          <div className='write'>
            <form>
              <input placeholder='Your Gmail' value={gmail} onChange={this.submitName} type="gmail" /> <br />
              <input placeholder='Your username' value={username} onChange={this.submitusername} /> <br />
              <input type={'password'} placeholder='Your password' value={password} onChange={this.submitPassword} />
              <button type='button' onClick={this.addItem}>Add</button></form>
          </div>
          <div className='img-container'>
            <img className='img' src="" />
          </div>
        </div>
        <span className='count-container'> <p className='count'>{count}</p> <p className='com'>Passwords</p></span>
        {content.map(item => {
          return <Card key={item.id} password={item.password} content={item} deleteUser={this.deleteUser} gmail={item.gmail} username={item.username} />
        })}

      </div>
    );
  }
}

export default App;
