import './App.css';
import Description from './Components/Description/description';
import Dropdown from './Components/Dropdown/dropdown';
import Name from './Components/Name/name';

function App() {
  return (
    <div className="App">
     <Dropdown/>
     <Name/>
     <Description/>
    </div>
  );
}

export default App;
