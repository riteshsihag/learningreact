import Cookies from 'js-cookie';
import { Component } from 'react';
import Product from './product';
import { ThreeDots } from 'react-loader-spinner';
import './product.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class PrimeDeal extends Component {
    state = {
        primeDeal: [],
        apiStatus: apiStatusConstants.initial
    }

    componentDidMount() {
        this.getProducts()
    }
    getProducts = async () => {
        this.setState({
            apiStatus: apiStatusConstants.inProgress,
          })
      
        const url = "https://apis.ccbp.in/prime-deals"
        const jwtToken = Cookies.get('jwt_token')
        const options = {
            method: 'GET',
            headers: { Authorization: `Bearer ${jwtToken}`, }
        }
        const response = await fetch(url, options)
        if (response.ok === true) {
            const data = await response.json()
            const updatedData = data.prime_deals.map((product) => ({
                title: product.title,
                brand: product.brand,
                price: product.price,
                id: product.id,
                imageUrl: product.image_url,
                rating: product.rating,
            }))
            this.setState({ primeDeal: updatedData ,
                apiStatus: apiStatusConstants.success,})
        }
        if(response.status === 401){
            this.setState({
                apiStatus: apiStatusConstants.failure,})
        }
        }
    
   
    render() {
        const { primeDeal, apiStatus } = this.state
        switch (apiStatus) {
            case apiStatusConstants.success:
                return (
                    <>
                        <h1 className='prime-heading'>Prime Deal</h1>
                        <div className='prime-products'>
                            {primeDeal.map(product => {
                                return <Product key={product.id} productList={product} />
                            })}
                        </div>
                    </>
                )
            case apiStatusConstants.failure:
                return <div className='non-prime'>
                  <img src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png" alt=""/>
                </div>
            case apiStatusConstants.inProgress:
                return <div className="loader">
                    <ThreeDots color="#0b69ff" height="50" width="50" />
                </div>
            default:
                return null
        }

    }
}
export default PrimeDeal;