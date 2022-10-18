import {Component} from 'react';
import List from './list';
import {v4 as uuidv4} from 'uuid'
const content = [
    {
    ques: "Setting up IDE",
    ans: "If you have already finished step-1 before, skip this and continue directly to step-2",
    time: "Aug 2nd",
    id: uuidv4()
  },
  {
    ques: "Setting up a Workspace ",
    ans: "ccbp start RJSCPC7UBX",
    time: "Aug 2nd",
    id: uuidv4()
  },
  {
    ques: "Submit the question after solving it",
    ans: "ccbp submit RJSCPC7UBX",
    time: "Aug 2nd",
    id: uuidv4()
  },
  {
    ques: "Publish your code after solving it",
    ans: "ccbp publish RJSCPC7UBX domain_name.ccbp.tech",
    time: "Aug 2nd",
    id: uuidv4()
  },
  ]
class Home extends Component{
   
    render(){
        return(

            <div className='home'>
                <div className='home-child'>
                    <img className='home-img' src='https://assets.ccbp.in/frontend/react-js/profile-img.png'/>
                    <h2>Ritesh Sihag</h2>
                    <p className='home-para'>Software Developer at Nxtwave</p>
                </div>
                <div className='list-main'>
                {content.map(item=>{
                    return <List ques={item.ques} ans={item.ans} time={item.time}/>
                })}</div>
            </div>
        )
    }
}
export default Home;