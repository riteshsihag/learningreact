import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
const initialcontent = []
class App extends Component {
  state = {
    content: initialcontent,
    id: uuidv4(),
    title: "",
    amount: Number(),
    selectValue: "Income",
    balance: 0,
    income: 0,
    expenses: 0
  }
  changeTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  changeAmount = (event) => {
    this.setState({
      amount: Number(event.target.value)
    })
  }
  changeSelectValue = (event) => {
    this.setState({
      selectValue: event.target.value

    })
  }
  addItem = () => {
    const { title, amount, selectValue } = this.state

    const newContent = {
      id: uuidv4(),
      title,
      amount,
      selectValue
    }
    if (selectValue === "Income") {
      this.setState(prevState => ({
        content: [...prevState.content, newContent],
        title: "",
        amount: Number(),
        selectValue: "Income",
        balance: prevState.balance + amount,
        income: prevState.income + amount,
        expenses: prevState.expenses
      }))
    }
    else {
      this.setState(prevState => ({
        content: [...prevState.content, newContent],
        title: "",
        amount: Number(),
        selectValue: "Income",
        balance: prevState.balance - amount,
        income: prevState.income,
        expenses: prevState.expenses + amount
      }))
    }
  }
  deleteElement = (id,amount,select) => {
    const {content} = this.state;
    const filteredList = content.filter(eachItem => {
      return eachItem.id !== id;
    })

    
    if(select == "Income"){
      this.setState(prevState=>{
        return {
          income: prevState.income - amount,
          balance: prevState.balance - amount,
          expenses: prevState.expenses
        }
      })
    }
    else{
      this.setState(prevState=>{
        return {
          balance: prevState.balance + amount,
          expenses: prevState.expenses - amount,
          income: prevState.income
        }
      })
    }
    
    this.setState({
      content: filteredList
    })
  }

  render() {
    const { content, title, amount, selectValue, balance, expenses, income } = this.state;
    return (
      <div className='money-container'>
        <div className='person-details'>
          <h1>Hi, Ritesh</h1>
         <span><p>Welcome to your <span className='manager'>Money Manager</span></p></span>
        </div>
        <div className='balance-container'>
          <div className='balance bal'>
            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"/>
            <div className='balance-details'>
              <h3>Your Balance</h3>
              <p>Rs {balance}</p>
            </div>
          </div>
          <div className='balance income'>
            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"/>
            <div className='balance-details'>
              <h3>Your Income</h3>
              <p>Rs {income}</p>
            </div>
          </div>
          <div className='balance expenses'>
            <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" />
            <div className='balance-details'>
              <h3>Your Expenses</h3>
              <p>Rs {expenses}</p>
            </div>
          </div>
        </div>
        <div className='history-container'>
        <div className='transaction-container'>
          <h2>Add Transaction</h2>
          <form>
            <p>TITLE</p>
            <input value={title} onChange={this.changeTitle} placeholder='TITLE' type="text" required/>
            <p>AMOUNT</p>
            <input value={amount} onChange={this.changeAmount} placeholder='Amount' type="text" required/>
            <p>TYPE</p>
            <select value={selectValue} onChange={this.changeSelectValue}>
              <option value="Income">Income</option>
              <option value="Expenses">Expenses</option>
            </select>
            <button type={'button'} onClick={this.addItem}>Add</button>
          </form>
        </div>
        <div className='list'>
          <h2>History</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
         
            {content.map(item => {
              return <Card key={item.id} id={item.id} deleteElement={this.deleteElement} title={item.title} select={item.selectValue} amount={item.amount} />
            })}
          </tbody>
        </table>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
