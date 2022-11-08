import {Component} from 'react';
import { ImageContainer, Img, ImgText } from './imageStyle';
class ImageComponent extends Component {
render(){
    const {imgUrl,topText,bottomText,fontSize} = this.props
    console.log(fontSize)
  return(
  <ImageContainer imgUrl={imgUrl}>
    <ImgText fontSize={fontSize}>{topText}</ImgText>
    <ImgText fontSize={fontSize}>{bottomText}</ImgText>
  </ImageContainer>
  )
}
}

export default ImageComponent;
