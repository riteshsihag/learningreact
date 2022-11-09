import './App.css';
import {Component} from 'react';
import MainPage from './Components/MainPage/main';
import ReactPopUp from './Components/PopUp/popup';


class App extends Component {
 
render(){
  return(
  <>
  <MainPage/>
  <ReactPopUp/>
  </>
  )
}
}

export default App;
