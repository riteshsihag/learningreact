import './App.css';
import Card from './Component/card';
import Card2 from './Component/card2';
import { Component } from 'react';
import content from './constants/content';
import details from './constants/detail';

class App extends Component {
  state = {
    commonId: content[0].id, searchInput: ""
  }

  clickImg = (id) => {
    this.setState({ commonId: id })
  }

  findSimilarImg = () => {
    const { commonId } = this.state;
    const similarImg = content.filter(element => {
      return element.id === commonId
    })
    return similarImg;
  }
  onChangeSearch = event =>{
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    const {commonId} = this.state;
    const similarImg = this.findSimilarImg();

    const {searchInput} = this.state;
    const searchResults = similarImg.filter(eachItem=>{
      return eachItem.name.toLowerCase().includes(searchInput.toLowerCase());
    })
   
    return (
      <>
      <h1>App Store</h1>
      <div className='search'>
        <input placeholder='Search' onChange={this.onChangeSearch} value={searchInput} type="text"/>
      </div>
        <div className='img-container'>
        {details.map(item => {
          return <Card  clickImg={this.clickImg} contentlist ={item.id} name={item.name} isActive={commonId === item.id} />
        })}</div>

<div className='big-container'>
        {searchResults.map(item => {
          return <Card2 key={item.uniqueID} name={item.name} url={item.link} />
        })}
        </div>
      </>
    );
  }
}

export default App;
