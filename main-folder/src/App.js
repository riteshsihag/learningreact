import './App.css';
import Card from './Component/card';
import { Component } from 'react';

class App extends Component {
  content = [
    {
    id: "1",
    info: "Follow these instructions"
  },
  {
    id: "2",
    info: "Run the below command "
  },
  {
    id: "3",
    info: "Submit the question"
  },
  {
    id: "4",
    info: "Publish the code"
  },
  {
    id: "5",
    info: "Functionality to be added"
  },
  {
    id: "6",
    info: "Things to Keep in Mind"
  }
]
state = {searchInput: ""}
onChangeSearch = event => {
  this.setState({
    searchInput : event.target.value
  })
}
onClickButton = (text) =>{
  this.setState({
    searchInput : text
  })
}
  render() {
    const {searchInput} = this.state;
    const searchResults = this.content.filter(item=>{
      return item.info.toLowerCase().includes(searchInput.toLowerCase())
    })
    return (
      <div>
         <img className='google' src='https://assets.ccbp.in/frontend/react-js/google-logo.png'/>
     
      <div className='main'>
       
        <div className='search'>
          <img className='searchimg' src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"/>
          <input type="text" value={searchInput} onChange={this.onChangeSearch} placeholder='Search Google'/>
        </div>
        <div className='list'>
          {searchResults.map(item=>{
            return <Card onClickButton={this.onClickButton} secondState={this.state} element={item.info}/>
          })}
       </div>
      </div>
      </div>
    );
  }
}

export default App;
onClick={onSearch}