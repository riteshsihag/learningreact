import { Component } from 'react';
import List from './list';
import { TailSpin } from "react-loader-spinner";
import NotFound from './notfound';

class Home extends Component {
  state = { content: [], status: "loading" }

  componentDidMount() {
    this.getlistsData()
  }

  getlistsData = async () => {
    try {
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
      this.setState({ content: updatedData, status: "done" })
    }
    catch {
      this.setState({ status: "failed" })
    }
  }
  displayContent = () => {
    const { status, content } = this.state;
    if (status === "loading") {
      return (<div className='loader'>
        <TailSpin type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>)
    }
    else if (status === "done") {
      return (<div className='list-main'>
        <div className='nav'>
          <h3 className='type '>Coin Type</h3>
          <div className='crypto-price'>
            <h3 className='type'>USD</h3>
            <h3 className='type'>EURO</h3>
          </div>
        </div>
        {content.map(item => { return <List listData={item} /> })}
      </div>)
    }
    else {
      return (
        <NotFound />
      )
    }
  }
  render() {
    const { content, status } = this.state;
    const loader = status === "loading"
    return (
      <div className='home'>
        <h1 className='heading'>Cryptocurrency Tracker</h1>
        <img src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' />
        {this.displayContent()}
      </div>
    )
  }
}
export default Home;