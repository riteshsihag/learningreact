import styled from "styled-components";

export const Button = styled.button`
width: 85px;
padding: 8px;
border: none;
background-color: white;
margin: 10px;
border-radius: 5px;
opacity: ${props=>props.isActive?'':0.5};
`
export const ColorPicker = styled.input`
width: 120px;
height: 50px;
`
export const ColorHeadingContainer = styled.div`
margin-left: 70px;
margin-right: 70px;
`
export const MainContainer = styled.div`
 background-image: linear-gradient(to ${props=> props.gradientType}, ${props=> props.colorOne}, ${props=> props.colorTwo});
 width: 100%;
 height: 100%;
 display: flex;
    flex-direction: column;
    align-items: center;
 
`
export const Heading = styled.h1`
color: white;
text-align: center;
margin: 0px;
padding-top: 165px;
`
export const DirectionHeading = styled.h2`
color: white;
text-align: center;
`
export const ColorValue = styled.p`` 
export const ButtonListContainer = styled.div`
display: flex;
justify-content: center;
`
export const ColorPickerContainer = styled.div`
display: flex;
justify-content: center;
text-align: center;
`