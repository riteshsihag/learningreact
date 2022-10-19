import { Component } from 'react'
import {TailSpin} from "react-loader-spinner";


class ListItem extends Component {
  state = { listData: {}, isLoading: true }

  componentDidMount() {
    this.getlistItemData()
  }

  getlistItemData = async () => {
    const { match } = this.props
    const { params } = match
    const { id } = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({ listData: updatedData, isLoading: false })
  }

  renderlistItemDetails = () => {
    const { listData } = this.state
    const { title, imageUrl, content, avatarUrl, author } = listData
    console.log(title)

    return (
      <div className="list-info">
        <h2 className="list-title">{title}</h2>
        <div className="list-avatar-container">
          <img className="avatar" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>
        <img className="list-image" src={imageUrl} alt={title} />
        <p className="list-content">{content}</p>
      </div>
    )
  }

  render() {
    const { isLoading } = this.state

    return (
      <div className="list-container">
        {isLoading ? (
            <div className='loader'>
          <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} /></div>
        ) : (
          this.renderlistItemDetails()
        )}
      </div>
    )
  }
}

export default ListItem;