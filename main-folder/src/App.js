import './App.css';
import Card from './Component/card';
import { Component } from 'react';

class App extends Component {
  content = [{
    money: "50"
  },
  {
    money: "100"
  },
  {
    money: "200"
  },
  {
    money: "500"
  }
  ]
  state = ({
    balance: "2000"
  })
  ramainingBalance = (no) =>{
   this.setState(prevState => {
    return { balance: prevState.balance - no}
   })
  }
  render() {
    const {balance} = this.state;
    return (
      <div className='container'>
        <div className='account'>
          <h2>S</h2>
          <h1>Sarah Williams</h1>
        </div>
        <div className='bank'>
        <h2 className='balance'>Your Balance</h2>
        <p>{balance}</p>
        </div>
       
        <h3 className='withdraw'>Withdraw</h3>
        <h3>CHOOSE SUM (IN RUPEES)</h3>
        <div className='cash'>
          {this.content.map(item=>{
           return <Card remaining = {this.ramainingBalance} rupees = {item.money} />
          })}
        </div> 
      </div>
    );
  }
}

export default App;
