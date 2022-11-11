import styled from "styled-components";
 
export const GamingContainer = styled.div`
width: 100%;
height: 100%;
background-color: ${props=>(props.darkMode?'#000000':'#ebebeb')};
overflow-y: scroll;
-webkit-overflow-scrolling: auto;
`
export const GamingChild = styled.div`
display: block;
grid-template-columns: auto auto auto auto;
grid-gap: 10px;
padding: 51px;
`
export const GamingHeading = styled.h1`
margin: 0px;
margin-left: 25px;
`
export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90%;
`