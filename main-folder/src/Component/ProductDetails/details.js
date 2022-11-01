import Cookies from 'js-cookie';
import { Component } from 'react';
import Navbar from '../NavBar/navbar';
import Similar from '../SimilarProduct/similar';
// import './details.css'
import { withRouter } from 'react-router-dom';
import ProductDetail from './displayDetails';

class Details extends Component {
 state = {
    allDetails : [],
    isLoading : false,
    similarProducts: []
 }

 componentDidMount(){
    console.log("mounting")
   this.getProducts()
 }
 getProducts= async()=>{
  this.setState({isLoading:true})
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
        const updateSimilarData = updatedData.similarProducts.map((item=>({
            title: item.title,
            brand: item.brand,
            price: item.price,
            id: item.id,
            imageUrl: item.image_url,
            rating: item.rating,
            totalReviews: item.total_reviews
        })))
            
        
        this.setState({allDetails: updatedData, similarProducts: updateSimilarData, isLoading: false})
    }  
 }
 
  render() {
   const {allDetails,similarProducts} = this.state
    return(
        <>
        <Navbar/>
        <ProductDetail allDetails={allDetails}/>
        {similarProducts.map((item)=>{
        return <Similar key={item.id} productList={item}/>
        })}
        </>
    )
       
   }
   
  }

export default withRouter(Details)