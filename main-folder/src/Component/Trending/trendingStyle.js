import styled from "styled-components";
 
export const TrendingContainer = styled.div`
width: 100%;
height: 100%;
background-color: ${props=>(props.darkMode?'#000000':'#f9f9f9')};
overflow-y: scroll;
-webkit-overflow-scrolling: auto;

`
export const TrendingChild = styled.div`
display: block;
grid-template-columns: auto auto auto;
grid-gap: 10px;
padding: 51px;
`
export const TrendingHeading = styled.h1`
margin: 0px;
margin-left: 25px;
color: ${props=>(props.darkMode?'white':'black')};
`
export const HeadingContainer = styled.div`
display: flex;
padding: 40px;
    background-color: ${props=>(props.darkMode?'#181818':'#ebebeb')};
    padding-left: 80px;
`