import './App.css';
import {Component} from 'react';
import ButtonContainer from './Components/Buttons/button';
import { MainContainer } from './Components/Buttons/buttonStyle';

class App extends Component {
  state = {
    colorOne: '#76e5dd',
    colorTwo: '#9bd4f8',
  gradientType: 'top'
 }
onGenerate=(color1,color2,gradientType)=>{
  this.setState({colorOne:color1,colorTwo:color2,gradientType:gradientType})
}
render(){
  const {colorOne,colorTwo,gradientType} = this.state
  return(
   <MainContainer colorOne={colorOne} colorTwo={colorTwo} gradientType={gradientType}>
   <ButtonContainer onGenerate={this.onGenerate}/>
   </MainContainer>
  )
}
}

export default App;
