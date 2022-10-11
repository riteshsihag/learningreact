import { Component } from 'react';
import './button.css';

class Button extends Component {
    
    state = { isShowing: true }
    mode = () => {
        this.setState(prevState => ({
            isShowing: !prevState.isShowing
        }))
    }

    render() {
        const { isShowing } = this.state;
        return (
            <div className="container">
                
                        <button onClick={this.mode}>{this.props.btn}</button>
                        { isShowing ? <div className='name'>{this.props.txt}</div> : null }
                </div>
           
        )
    }
}
export default Button