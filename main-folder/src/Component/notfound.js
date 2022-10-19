import {Component} from 'react';
class NotFound extends Component{
   
    render(){
        const{block} = this.props;
        const unBlock=()=>{
              block();
        }
        return(
            <div className='notfound'>
            <img src='https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'/><br/>
            <button onClick={unBlock}>Unblock URL</button>
           </div>
        )
    }
}
export default NotFound;