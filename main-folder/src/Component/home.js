import { Component } from 'react';
import List from './list';
import {TailSpin} from "react-loader-spinner";
class Home extends Component {
  state = { content: [], isLoading: true }

  componentDidMount() {
    this.getlistsData()
  }

  getlistsData = async () => {
    const response = await fetch('https://apis.ccbp.in/crypto-currency-converter')
    const statusCode = await response.statusCode
    console.log(statusCode)
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({ content: updatedData, isLoading: false })
  }

  render() {
    const { content,isLoading } = this.state;
    return (

      <div className='home'>
        <h1 className='heading'>Cryptocurrency Tracker</h1>
       <img src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'/>
        {isLoading ? 
        <div className='loader'>
          <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
         :
          <div className='list-main'>
            <div className='nav'>
                <h3 className='type '>Coin Type</h3>
                <div className='crypto-price'>
                <h3 className='type'>USD</h3>
                <h3 className='type'>EURO</h3>
                </div>
                </div>
            {content.map(item => {return <List listData={item} />})}
          </div>}
           
      </div>
    )
  }
}
export default Home;