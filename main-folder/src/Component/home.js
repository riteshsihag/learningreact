import {Component} from 'react';
import List from './list';
import {v4 as uuidv4} from 'uuid'

class Home extends Component{
    state = {content: [] }

    componentDidMount() {
      this.getBlogsData()
    }
  
    getBlogsData = async () => {
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
      this.setState({ content: updatedData})
    }
   
    render(){
        const {content} = this.state;
        return(

            <div className='home'>
                <div className='home-child'>
                    <img className='home-img' src='https://assets.ccbp.in/frontend/react-js/profile-img.png'/>
                    <h2>Ritesh Sihag</h2>
                    <p className='home-para'>Software Developer at Nxtwave</p>
                </div>
                <div className='list-main'>
                {content.map(item=>{
                    return <List title={item.title} author={item.author} avatarUrl={item.avatarUrl} imageUrl={item.imageUrl} topic={item.topic}/>
                })}</div>
            </div>
        )
    }
}
export default Home;