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
    searchInput: "",
    onShow: false

  })

  addItem = () => {
    const { gmail, username, password } = this.state;
    if (gmail !== "" && username !== "") {
      const newContent = {
        id: uuidv4(),
        gmail,
        username,
        password,
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
  onChangeSearch = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  onChecked = () => {
    this.setState(prevState => {
      return { onShow: !prevState.onShow }
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
    const { content, gmail, username, count, password, searchInput, onShow } = this.state;
    const searchResults = content.filter(item => {
      return item.gmail.toLowerCase().includes(searchInput.toLowerCase())
    })
    const emptyContainer = searchResults.length===0;
    return (
      <div className='container'>
        <img className='app-logo' src='https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png'/>
        <div className='main'>
          <div className='write'>
            <h2 className='add'>Add New Password</h2>
            <form>
              <div className='website'>
                <img className='website-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png'/>
              <input placeholder='Enter Website' value={gmail} onChange={this.submitName} type="gmail" /> 
              </div>
              <div className='website'>
                <img className='website-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png'/>
              <input placeholder='Enter Username' value={username} onChange={this.submitusername} />
              </div>
              <div className='website'>
                <img className='website-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png'/>
              <input type={'password'} placeholder='Enter Password' value={password} onChange={this.submitPassword} />
              </div>
              <button type='button' onClick={this.addItem}>Add</button></form>
          </div>
          <div className='img-container'>
            <img className='img' src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png" />
          </div>
        </div>
        <div className='password-container'>
          <div className='flex-container'>
        <span className='count-container'> <p className='count'>{count}</p> <p className='com'>Your Passwords</p></span>
        <div className='website'>
                <img className='search-img' src='https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png'/>
        <input placeholder='Search' className='search' onChange={this.onChangeSearch} type="text" value={searchInput} />
        </div>
        </div>
        <span className='check-span'><input className='check' onChange={this.onChecked} type={'checkbox'} /> Show Passwords</span>
        <div className='card-container'>
          {emptyContainer?  <>
          
          <img className='no-password' src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png'/><br/>
          <h2 className='no'>No Passwords</h2>
          </>
          :
          <>
          {searchResults.map(item => {
          return <Card key={item.id} onShow={onShow} password={item.password} content={item} deleteUser={this.deleteUser} gmail={item.gmail} username={item.username} />
        })}
          </>
          }
        </div>
          </div>
      </div>
    );
  }
}

export default App;
