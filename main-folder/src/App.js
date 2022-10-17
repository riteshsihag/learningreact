import './App.css';
import { Component } from 'react';
import Card from './Component/card';
import { v4 as uuidv4 } from 'uuid';
const content = [
  {
  ques: "Setting up IDE",
  ans: "If you have already finished step-1 before, skip this and continue directly to step-2",
  id: uuidv4()
},
{
  ques: "Setting up a Workspace ",
  ans: "ccbp start RJSCPC7UBX",
  id: uuidv4()
},
{
  ques: "Submit the question after solving it",
  ans: "ccbp submit RJSCPC7UBX",
  id: uuidv4()
},
{
  ques: "Publish your code after solving it",
  ans: "ccbp publish RJSCPC7UBX domain_name.ccbp.tech",
  id: uuidv4()
},
]
class App extends Component {

  render() {
    return (
      <>
      <h1>FAQs</h1>
     {content.map(item=>{
     return <Card key={item.id} ques={item.ques} ans={item.ans}/>
     })}
      </>
    );
  }
}

export default App;
