import {Component} from 'react';
import './button.css';
class Button extends Component{
    state = {isLight: true}
    mode = () =>{
       this.setState(prevState => ({
        isLight: !prevState.isLight
      }))
    }
    render(){
       const {isLight} = this.state;
        return(
            <div className={isLight?"light":"light dark"}>
                <h2>Click to change mode</h2>
                <button onClick={this.mode}>{isLight?"Dark Mode":"Light Mode"}</button>
            </div>
        )
    }
}
export default Button