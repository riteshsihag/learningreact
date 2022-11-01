import { Component } from 'react';
import './details.css'

class ProductDetail extends Component {

  render() {
   const {allDetails} = this.props
    return(
        <>
         <div className='product-detail'>
          <img src={allDetails.imageUrl}/>
          <div className='alldetails'>
           <h1>{allDetails.title}</h1>
           <p>{allDetails.price}</p>
           <div className='rating-review'>
            <p>{allDetails.rating}</p>
            <p>{allDetails.totalReviews}</p>
           </div>
           <p>{allDetails.description}</p>
          </div>
         </div>
         <div className='similar-product'>

         </div>
        </>
    )
       
   }
   
  }

export default ProductDetail;