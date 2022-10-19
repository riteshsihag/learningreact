import { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
        const { listData } = this.props
        const { id, currencyName, usdValue, euroValue, currencyLogo } = listData
        return (
            <div className='list'>
                <div className='list-child'>
                    <div className='crypto-name'>
                        <img className='image' src={currencyLogo} />
                        <p className='name'>{currencyName}</p>
                    </div>
                    <div className='crypto-price'>
                        <p className='usd'>{usdValue}</p>
                        <p>{euroValue}</p>
                    </div>

                </div>
            </div>
        )
    }
}
export default List;