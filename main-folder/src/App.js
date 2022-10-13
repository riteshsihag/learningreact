import './App.css';
import Card from './Component/card';
import Card2 from './Component/card2';
import { Component } from 'react';
import content from './constants/content';
import details from './constants/detail';

class App extends Component {
  state = {
    commonId: content[0].id
  }

  clickImg = (id) => {
    this.setState({ commonId: id })
  }

  findSimilarImg = () => {
    const { commonId } = this.state;
    const similarImg = details.filter(element => {
      return element.id === commonId
    })
    return similarImg;
  }

  render() {
    const {commonId} = this.state;
    const similarImg = this.findSimilarImg();

    return (
      <>
      <div className='big-container'>
        {similarImg.map(item => {
          return <Card2 key={item.id} url={item.link} />
        })}
        <h2>Nature Photography</h2>
        <p>Nature Photography by Rahul</p>
        </div>
        <div className='img-container'>
        {content.map(item => {
          return <Card key={item.id} clickImg={this.clickImg} contentlist ={item.id} url={item.link} isActive={commonId === item.id} />
        })}</div>
      </>
    );
  }
}

export default App;
