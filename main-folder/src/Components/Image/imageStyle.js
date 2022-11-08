import styled from "styled-components";
export const ImageContainer = styled.div`
background-image: url(${props=> props.imgUrl});
width: 500px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-top: 50px;
margin-left: 100px;
`
export const Img = styled.img`
`
export const ImgText = styled.p`
font-size: ${(props)=> props.fontSize}px;
color: white;
`