import './App.css';
import { Component } from 'react';
import Display from './Component/displayStatus';
import DisplayAll from './Component/displayAll';
import content from './constant/content';

const status = {
  initial:'initial',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
  notRegistered: 'YET_TO_REGISTER'
}
class App extends Component {
  state = {
    selectItem: {},
    content: content
}

displayView = (details) => {
  this.setState({selectItem:details})
    
}
registerNow=()=>{
 const {selectItem} = this.state
 console.log(selectItem)
  this.setState((prevState)=>({
    content: prevState.content.map((item)=>{
      if(item.id === selectItem.id){
      
        return {...item, status: status.registered}
      }
      return item
    }),
    selectItem:  {...selectItem, status: status.registered}
  }))
}
  render() {
    const {selectItem,content} = this.state
    return(

      <div className='main-container'>
        <DisplayAll content={content} displayView={this.displayView} registrationStatus={selectItem.status}/>
        <Display selectItem={selectItem} registerNow = {this.registerNow} registrationStatus={selectItem.status}/>
      </div>
    )
  }
}

export default App;
