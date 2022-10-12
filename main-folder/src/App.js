import './App.css';
import Card from './Component/card';
import { Component } from 'react';

class App extends Component {
  state = ({
    content: [
      {
        id: "1",
        element: "Instagram",
        website: "instagram.com",
        time: "04:00 PM"
      },
      {
        id: "2",
        element: "Twitter. It's what's happening/Twitter ",
        website: "twitter.com",
        time: "03:25 PM"
      },
      {
        id: "3",
        element: "Facebook-log in or sign up ",
        website: "facebook.com",
        time: "02:45 PM"
      },
      {
        id: "4",
        element: "Linkedin: Log In or Sign Up ",
        website: "linkedin.com",
        time: "01:25 PM"
      },
      {
        id: "5",
        element: "Hashnode: Everything you need to start blogging as a developer! ",
        website: "hashnode.com",
        time: "07:45 PM"
      },
      {
        id: "6",
        element: "GitHub: Where the world builds software GitHub ",
        website: "github.com",
        time: "05:45 PM"
      },
      {
        id: "7",
        element: "React - A JavaScript library for building user interfaces ",
        website: "reactjs.org",
        time: "04:35 PM"
      },
      {
        id: "8",
        element: "Stack Overflow-Where Developers Learn, Share, & Build Careers  ",
        website: "stackoverflow.com",
        time: "04:25 PM"
      }
    ], searchInput: ""
  })
  onChangeSearch = event =>{
    this.setState({
      searchInput: event.target.value
    })
  }
 
  deleteUser = (id) =>{
   const{content} = this.state;
   const filteredList = content.filter((eachItem) =>{
   return eachItem.id !== id;
   })
   this.setState({content : filteredList});
  }
  render() {
    const {content,searchInput} = this.state;
    const searchResults = content.filter(eachItem=>{
      return eachItem.element.toLowerCase().includes(searchInput.toLowerCase());
    })
   const isEmpty = searchResults.length===0;
    return (
      <div className='container'>
        <div className='nav'>
          <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"/>
          <div className='searchbar'>
        <img id='img' src="https://assets.ccbp.in/frontend/react-js/search-img.png "/>
        <input placeholder='Search History' type="text" onChange={this.onChangeSearch} value={searchInput}/>
        </div>
        </div>
        {isEmpty ?"There is no History to show"
        :
        <>
        {searchResults.map(item=>{
        return <Card key={item.id} time={item.time} web={item.website} content={item} deleteUser={this.deleteUser} para={item.element} />
        })}</>}
        
     
      </div>
    );
  }
}

export default App;
