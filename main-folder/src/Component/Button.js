import { Component } from 'react';
import './button.css';

class Button extends Component {
    
    state = { count: 0 , num: "even"}
    mode = () => {
        const value = this.state.count + Math.floor((Math.random()*50));
        const random = (value%2 == 0)?"even":"odd";
        this.setState({
            count: value,
            num: random
        }   
            
        )
    }

    render() {
        const { count } = this.state;
        const {num} = this.state;
        return (
            <div className='main'>
            <h3>{"Count " + count}</h3>
            <p>{"Count is " + num}</p>
            <div className="container">
                <img src={this.props.link}/>
                        <button onClick={this.mode}>Increment</button>
                </div>
                </div>
        )
    }
}
export default Button