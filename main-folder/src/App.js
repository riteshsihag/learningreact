import './App.css';
import Card from './Component/card';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Finished from './Component/finished';
import Navbar from './Component/navbar';

const initialcontent = [
  {
    id: uuidv4(),
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: uuidv4(),
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]
class App extends Component {

  state = {
    content: initialcontent,
    clickedEmojis: [],
    topScore: 0,
    gameStopped: false
  }

  getrandomEmoji = (id) => {
    const { clickedEmojis } = this.state
    if (clickedEmojis.includes(id)) {
      this.setState(prevState => { return { gameStopped: !prevState.gameStopped } })
    }
    this.setState(prevState => {
      return {
        content: prevState.content.sort(() => Math.random() - 0.5),
        clickedEmojis: [...prevState.clickedEmojis, id]
      }
    })
  }

  playAgain = () => {
    const { topScore, clickedEmojis } = this.state;
    if (topScore < clickedEmojis.length) {
      this.setState(prevState => {
        return {
          topScore: prevState.clickedEmojis.length-1
        }
      })
    }
<<<<<<< HEAD
    this.setState(prevState => {
      return {
        gameStopped: !prevState.gameStopped,
        clickedEmojis: [],
      }
=======
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
>>>>>>> b530803c4d277184cf77080f67c80c99406563b7
    })
  }

  render() {
    const { content, clickedEmojis, gameStopped, topScore } = this.state
    var score = clickedEmojis.length;
    if(gameStopped){
      score = clickedEmojis.length-1
    }
    return (
<<<<<<< HEAD
      <>
        <Navbar score={score} topScore={topScore}/>
        <div className='emoji-container'>
          {gameStopped ?
            <>
              <Finished score={score} playAgain={this.playAgain} />
            </>
            :
            <>
              {content.map(item => {
                return <Card id={item.id} getrandomEmoji={this.getrandomEmoji} url={item.emojiUrl} />
              })}
            </>
          }

=======
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
>>>>>>> b530803c4d277184cf77080f67c80c99406563b7
        </div>
      </>
    );
  }
}

export default App;
