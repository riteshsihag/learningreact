import { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
            const { listData } = this.props
            const { id, imageUrl, topic, title, avatarUrl, author } = listData
        return (
            <Link to={`/blogs/${id}`} className="item-link">
            <div className='list'>
                <div className='list-child'>
                    <img className='image' src={imageUrl} />
                    <div className='about-img'>
                        <p>{topic}</p>
                        <h3 className='title'>{title}</h3>
                        <div className='avatar-container'>
                        <img className='avatar' src={avatarUrl} />
                        <p>{author}</p>
                    </div>
                    </div>
                   
                </div>
            </div>
            </Link>
        )
    }
}
export default List;