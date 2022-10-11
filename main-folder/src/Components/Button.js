import {Component} from 'react';
class Button extends Component{
    state = {isRight: true}
    subscribe = () =>{
       this.setState(prevState => ({
        isRight: !prevState.isRight
      }))
    }
    render(){
       const {isRight} = this.state;
        return(
            <div className='btn-container'>
                <button className='button' onClick={this.subscribe}>{isRight?"Subscribe":"Subscribed"}</button>
            </div>
        )
    }
}
export default Button