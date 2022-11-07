import './App.css';
import {Component} from 'react';
import AllContent from './Components/AllContent/all';
import Navbar from './Components/MainNavbar/navbar';
import NavbarContext from './NavbarContext/navbarContext';
class App extends Component {
  state = {isContentActive: true,isLeftActive : true, isRightActive : true,}
  changeContent = () =>{
    this.setState((prevState)=>({
      isContentActive : !prevState.isContentActive,
    }))
  }
  changeLeftNav = () =>{
    this.setState((prevState)=>({
      isLeftActive : !prevState.isLeftActive,
    }))
  }
  changeRightNav = () =>{
    this.setState((prevState)=>({
      isRightActive : !prevState.isRightActive
    }))
  }
render(){
  const {isContentActive, isLeftActive, isRightActive} = this.state
  return(
    <NavbarContext.Provider   value={{isContentActive, isLeftActive, isRightActive, changeContent: this.changeContent, changeLeftNav: this.changeLeftNav, changeRightNav:this.changeRightNav}}>
    <div className='App'>
      <Navbar/>
   <AllContent/>
    </div>
    </NavbarContext.Provider>
  )
}
}

export default App;