import { Component } from 'react';
import './card.css';
class Finished extends Component {

    render() {
       const {getrandomEmoji,id} = this.props;
       const changeImg = () =>{
        getrandomEmoji(id)
       }
        return (
           <div className='emoji' >
            <img onClick={changeImg} src={this.props.url}/>
           </div>
        )
    }
}
export default Card;