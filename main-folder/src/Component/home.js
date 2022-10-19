import { Component } from 'react';
import List from './list';
import {TailSpin} from "react-loader-spinner";
class Home extends Component {
  state = { content: [], isLoading: true }

  componentDidMount() {
    this.getlistsData()
  }

  getlistsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({ content: updatedData, isLoading: false })
  }

  render() {
    const { content,isLoading } = this.state;
    return (

      <div className='home'>
        <div className='home-child'>
          <img className='home-img' src='https://assets.ccbp.in/frontend/react-js/profile-img.png' />
          <h2>Ritesh Sihag</h2>
          <p className='home-para'>Software Developer at Nxtwave</p>
        </div>
       
        {isLoading ? 
        <div className='loader'>
          <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
         :
          <div className='list-main'>
            {content.map(item => {return <List listData={item} />})}
          </div>}
           
      </div>
    )
  }
}
export default Home;