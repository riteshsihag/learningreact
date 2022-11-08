import {Component} from 'react';
import { Button, Heading, Input, InputContainer, InputHeading, MainInputContainer, Select } from './styledComponent';
class InputComponent extends Component {

    state = {
        imgUrl : '',
        topText : '',
        bottomText : '',
        fontSize : 8,

    }
   

    onChangeImgUrl=(event)=>{
       this.setState({imgUrl: event.target.value})
    }
    onChangeTopText=(event)=>{
        this.setState({topText: event.target.value})
     }
     onChangeBottomText=(event)=>{
        this.setState({bottomText: event.target.value})
     }
     onChangeFontSize=(event)=>{
        this.setState({fontSize: event.target.value})
     }

render(){
    const {imgUrl,topText,bottomText,fontSize} = this.state
    const {onGenerate} = this.props
    const generate=()=>{
        onGenerate(imgUrl,topText,bottomText,fontSize)
    }
  return(

   
        <InputContainer>
        <Heading>Meme Generator</Heading>
        <InputHeading>Image URL</InputHeading>
        <Input placeholder='Enter the image Url' value={imgUrl} onChange={this.onChangeImgUrl} type={'text'}/>
        <InputHeading>Top Text</InputHeading>
        <Input placeholder='Enter the Top text' value={topText} onChange={this.onChangeTopText} type={'text'}/>
        <InputHeading>Bottom Text</InputHeading>
        <Input placeholder='Enter the Bottom text' value={bottomText} onChange={this.onChangeBottomText} type={'text'}/>
        <InputHeading>Font Size</InputHeading>
        <Select value={fontSize} onChange={this.onChangeFontSize}>
            <option value={'8'}>8</option>
            <option value={'12'}>12</option>
            <option value={'16'}>16</option>
            <option value={'20'}>20</option>
            <option value={'24'}>24</option>
            <option value={'28'}>28</option>
            <option value={'32'}>32</option>
            <option value={'36'}>36</option>
        </Select>
        <Button onClick={generate}>Generate</Button>
        </InputContainer>
   
  )
}
}

export default InputComponent;
