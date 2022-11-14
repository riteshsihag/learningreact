import {useState} from 'react'

const CreditCard = () =>{
 const [cardNumber, setCardNumber] = useState('')
 const [name, setName] = useState('')
const changeCardNumber=(event)=>{
    setCardNumber(event.target.value)
}
const changeName=(event)=>{
    setName(event.target.value)
}
    return(
        <div className='main-container'>
         <div className='credit-card-container'>
           <h2>Credit Card</h2>
           <div className='card'>
            <div className='info'>
            <h1>{cardNumber}</h1>
             <p>CARDHOLDER NAME</p>
             <h3>{name.toUpperCase()}</h3>
           </div>
            
           </div>
         </div>
         <div className='input-container'>
            <div className='content'>
            <h4>Payment Method</h4>
         <input placeholder='Card Number' value={cardNumber} onChange={changeCardNumber}/><br/>
         <input placeholder='Cardholder Name' value={name} onChange={changeName}/>
            </div>
            
         </div>
        </div>
    )
}
export default CreditCard