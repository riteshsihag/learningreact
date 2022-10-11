import './App.css';
import Button from './Component/Button';

function App() {
 const content = [{
    heading: "Eat Mango",
    url: "https://assets.ccbp.in/frontend/react-js/mango-img.png ",
    fruits : " Mangoes"
   
}, {
    heading: "Eat Banana",
    url: "https://assets.ccbp.in/frontend/react-js/banana-img.png",
    fruits : " Bananas"
}]
  return (
    <div>
      <div className="names"> 
      {content.map(item =>{
        return(
        <Button fruit={item.fruits} btn ={item.heading} link={item.url} />)
      })} </div>
   </div>
  );
}

export default App;
