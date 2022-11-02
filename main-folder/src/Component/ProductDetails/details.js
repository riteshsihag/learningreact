import Cookies from 'js-cookie';
import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import Similar from '../SimilarProduct/similar';
import { ThreeDots } from 'react-loader-spinner';
import './display.css'
import ProductDetail from './displayDetails';

const apiStatusConstants = {
    initial: 'INITIAL',
    failure: 'FAILURE',
    success: 'SUCCESS',
    inProgress: 'INPROGRESS'
  }
  

class Details extends Component {
 state = {
    allDetails : [],
    isLoading : false,
    apiStatus : apiStatusConstants.initial
 }

 componentDidMount(){
   this.getProducts()
 }
 getProducts= async()=>{
  this.setState({apiStatus: apiStatusConstants.inProgress})
  const { match } = this.props
  const { params } = match
  const { id } = params
    const url = `https://apis.ccbp.in/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers :  {Authorization: `Bearer ${jwtToken}`,}
    }
    const response = await fetch(url,options)
    if(response.ok === true){
        const data = await response.json()
    
        const updatedData = {
            title: data.title,
            brand: data.brand,
            price: data.price,
            id: data.id,
            imageUrl: data.image_url,
            rating: data.rating,
            totalReviews: data.total_reviews,
            availability: data.availability,
            description: data.description,
            similarProducts: data.similar_products
        }  
        
        this.setState({allDetails: updatedData, apiStatus: apiStatusConstants.success})
    } 
    else{
        this.setState({apiStatus:apiStatusConstants.failure})
    } 
 }
 renderSimilarProducts=()=>{
    const {allDetails} = this.state
    return allDetails.similarProducts.map((item)=>{
        return (<Similar key={item.id} productList={item}/>)
        })
 }
 renderAllDetails=()=>{
    const {allDetails} = this.state
    return(
        <>
        <Navbar/>
        <ProductDetail allDetails={allDetails}/>
        <div>
        <h1 id='product-heading'>Similar Products</h1>

        <div className='similar-container'>
        {this.renderSimilarProducts()}

        </div>
        </div>

        </>
    )
 }
  render() {
   const {apiStatus} = this.state
   switch(apiStatus){
    case apiStatusConstants.success:
       return (this.renderAllDetails())

    case apiStatusConstants.failure:
        return <div>
            <h1>Failed</h1>
        </div>
    case apiStatusConstants.inProgress:
        return <div className='loader'>
        <ThreeDots color="#0b69ff" height="50" width="50" />
        </div>
   }
       
   }
   
  }

export default Details