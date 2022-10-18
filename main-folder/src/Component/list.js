import {Component} from 'react';
class List extends Component{
   
    render(){
       
        return(
            <div className='list'>
             <div className='list-child'>
                <h3>{this.props.ques}</h3>
                <p>{this.props.time}</p>
             </div>
             <p>{this.props.ans}</p>
            </div>
        )
    }
}
export default List;