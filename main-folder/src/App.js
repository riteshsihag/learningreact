import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialcontent = []

class App extends Component {
state = {
  content: initialcontent,
  id: uuidv4(),
  title:"",
  amount:"",
  selectValue:"Income"
}
changeTitle = (event) =>{
  this.setState({
    title: event.target.value
  })
}
changeAmount = (event) =>{
  this.setState({
    amount: event.target.value
  })
}
changeSelectValue = (event) =>{
  this.setState({
    selectValue: event.target.value
  
  })
}
addItem=()=>{
  const {id,title,amount,selectValue} = this.state
  const newContent = [{
    id:uuidv4(),
    title,
    amount,
    selectValue
  }]
  this.setState(prevState=>({
    content:[...prevState.content, newContent],
    title:"",
  amount:"",
  selectValue:"Income"
  }))
}


  render() {
  const {content,title,amount,selectValue} = this.state;
  console.log(content)
    return (
      <div className='money-container'>
        <div className='balance-container'>

        </div>
        <div className='transaction-container'>
          <form>
            <input value={title} onChange={this.changeTitle} placeholder='Title'  type="text" />
            <input value={amount} onChange={this.changeAmount} placeholder='Amount' type="text" />
            <select defaultValue={selectValue} onChange={this.changeSelectValue}>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
            <button type={'button'} onClick={this.addItem}>Add</button>
          </form> 
        </div>
        <table>
          <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
          </thead>
          <tbody>
          {content.map(item=>{
            // console.log(item)
              return <Card key={item.id} title={item.title} select={item.selectValue} amount={item.amount}/>
          })}
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
