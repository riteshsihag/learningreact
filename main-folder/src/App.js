import './App.css';
import Description from './Components/Description/description';
import Dropdown from './Components/Dropdown/dropdown';
import Name from './Components/Name/name';

function App() {
  return (
    <div className="App">
     <Dropdown/>
     <div className='content-container'>
      <div className='name'>
        <h2>Course Name Container</h2>
      <Name/>
      </div>
      <div className='description'>
      <h2>Course Description Container</h2>
      <Description/>
      </div>
     </div>
    
    </div>
  );
}

export default App;
