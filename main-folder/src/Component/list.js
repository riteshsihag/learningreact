import { Component } from 'react';
class List extends Component {

    render() {

        return (
            <div className='list'>
                <div className='list-child'>
                    <img className='image' src={this.props.imageUrl} />
                    <div className='about-img'>
                        <p>{this.props.topic}</p>
                        <h3 className='title'>{this.props.title}</h3>
                        <div className='avatar-container'>
                        <img className='avatar' src={this.props.avatarUrl} />
                        <p>{this.props.author}</p>
                    </div>
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default List;