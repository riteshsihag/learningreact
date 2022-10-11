import { Component } from 'react';
import './button.css';

class Button extends Component {
    
    state = { count: 0 }
    mode = () => {
        this.setState(prevState => {
            return {count: prevState.count+1}
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div className='main'>
            <h3>{count + this.props.fruit}</h3>
            <div className="container">
                <img src={this.props.link}/>
                        <button onClick={this.mode}>{this.props.btn}</button>
                </div>
                </div>
        )
    }
}
export default Button