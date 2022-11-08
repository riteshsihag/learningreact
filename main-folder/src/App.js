import './App.css';
import {Component} from 'react';
import InputComponent from './Components/Input/input';
import ImageComponent from './Components/Image/image';
import { MainInputContainer } from './Components/Input/styledComponent';
class App extends Component {
  state = {
    imgUrl : '',
    topText : '',
    bottomText : '',
    fontSize : 8,
}
onGenerate=(imgUrl,topText,bottomText,fontSize)=>{
   this.setState({
    imgUrl : imgUrl,
    topText : topText,
    bottomText : bottomText,
    fontSize : fontSize,
   })
}

render(){
  const {imgUrl,topText,bottomText,fontSize} = this.state

  return(
    <MainInputContainer>
   <InputComponent onGenerate={this.onGenerate}/>
   <ImageComponent imgUrl={imgUrl} topText={topText} bottomText={bottomText} fontSize={fontSize}/>
   </MainInputContainer>
  )
}
}

export default App;
