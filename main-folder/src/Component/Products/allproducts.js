import Cookies from 'js-cookie';
import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import Filter from '../FilterProducts/filter';
import Sorting from '../SortingProducts/sorting';
import Product from './product';
import './product.css'

const sortList = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]
const categoryList = [
  {
    categoryId : 1,
    categoryName : 'Clothing'
  },
  {
    categoryId : 2,
    categoryName : 'Electronics'
  },
  {
    categoryId : 3,
    categoryName : 'Appliances'
  },
  {
    categoryId : 4,
    categoryName : 'Grocery'
  },
  {
    categoryId : 5,
    categoryName : 'Toys'
  },
]
const apiStatusConstants = {
  initial: 'INITIAL',
  noProduct: 'NOPRODUCT',
  failure: 'FAILURE',
  success: 'SUCCESS'
}

class AllProduct extends Component {
 state = {
    allProducts : [],
    activeId : sortList[0].optionId,
    isLoading : false,
    categoryId : categoryList[0].categoryId,
    searchTitle : '',
    rating: '',
    apiStatus: apiStatusConstants.initial
 }

 componentDidMount(){
   this.getProducts()
 }
 getProducts= async()=>{
  this.setState({isLoading:true})

  const {activeId,categoryId,searchTitle,rating} = this.state
    const url = `https://apis.ccbp.in/products?sort_by=${activeId}&category=${categoryId}&title_search=${searchTitle}&rating=${rating}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
        method: 'GET',
        headers :  {Authorization: `Bearer ${jwtToken}`,}
    }
    const response = await fetch(url,options)
    console.log(response)
    if(response.ok === true){
        this.setState({apiStatus: apiStatusConstants.success})
        const data = await response.json()

        const updatedData = data.products.map((product)=>({
            title: product.title,
            brand: product.brand,
            price: product.price,
            id: product.id,
            imageUrl: product.image_url,
            rating: product.rating,
        }))
        if(updatedData.length===0){
          this.setState({apiStatus: apiStatusConstants.noProduct})
        }
        this.setState({allProducts: updatedData, isLoading: false})
    }
    else{
      this.setState({apiStatus:apiStatusConstants.failure})
    }

 }
 updateActiveId = (id) => {
  this.setState({activeId:id}, this.getProducts)
 }
 updateCategoryId=(id)=>{
  this.setState({categoryId:id}, this.getProducts)
 }
 updateSearch = (value) =>{
  this.setState({searchTitle: value},this.getProducts)
 }
 updateRating = (value) =>{
  this.setState({rating:value},this.getProducts)
 }
 ClearFilter=()=>{
  this.setState({
    activeId : sortList[0].optionId,
    isLoading : false,
    categoryId : categoryList[0].categoryId,
    searchTitle : '',
    rating: ''
  },this.getProducts)
 }
  render() {
   const {allProducts,activeId,isLoading,apiStatus} = this.state
   switch(apiStatus){
    case apiStatusConstants.success:
      return (
        <>
        <div className='allFilter-container'>
         <Filter ClearFilter={this.ClearFilter} updateRating={this.updateRating} updateSearch={this.updateSearch} updateCategoryId={this.updateCategoryId} categoryList={categoryList}/>
        <div>
        <div className='product-header'>
        <h1 className='product-heading'>All Products</h1>
        <Sorting updateActiveId={this.updateActiveId} activeId={activeId} sortList={sortList}/>
        </div>
        {isLoading?
        <div className='loader'>
        <ThreeDots color="#0b69ff" height="50" width="50" />
        </div>
        :
        <div className='all-products'>
        {allProducts.map(product=>{
        return <Product key={product.id} productList = {product} />
        })}
        </div>
       }
        </div>
        </div>
       
        </>
       )
       case apiStatusConstants.noProduct:
        return(
          <div className='allFilter-container'>
         <Filter ClearFilter={this.ClearFilter} updateRating={this.updateRating} updateSearch={this.updateSearch} updateCategoryId={this.updateCategoryId} categoryList={categoryList}/>
           <div className='no-product'> <img  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"/>
           <h2>No Products Found</h2>
           <p>We could not find any products. Please try other filters</p>
           </div>
          </div>
        )
        case apiStatusConstants.failure:
          return(
            <div className='allFilter-container'>
            <Filter ClearFilter={this.ClearFilter} updateRating={this.updateRating} updateSearch={this.updateSearch} updateCategoryId={this.updateCategoryId} categoryList={categoryList}/>
              <div className='no-product'><img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"/>
              <h2>Oops! Something Went Wrong</h2>
              <p>We are having some trouble processing your request. Please try again.</p>
              </div>
             </div>
          )
   }
   
  }
}
export default AllProduct;