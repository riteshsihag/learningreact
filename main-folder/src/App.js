import './App.css';
import Button from './Component/Button';

function App() {
 const content = [{
    heading: "Show/Hide Firstname",
    name: "Joe"
   
}, {
    heading: "Show/Hide Secondname",
    name: "Jones"
}]
  return (
    <div>
      <h1>Show/Hide</h1>
      <div className="names"> 
      {content.map(item =>{
        return(
        <Button btn ={item.heading} txt={item.name} />)
      })} </div>
   </div>
  );
}

export default App;
