import styled from "styled-components";
 
export const GamingContainer = styled.div`
width: 100%;
height: 100%;
background-color: ${props=>(props.darkMode?'#000000':'#f9f9f9')};
overflow-y: scroll;
-webkit-overflow-scrolling: auto;
`
export const GamingChild = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 10px;
padding: 20px;
@media screen and (max-width:1150px) {
    grid-template-columns: auto auto auto;
}
@media screen and (max-width:900px) {
    grid-template-columns: auto auto;
}
`
export const GamingHeading = styled.h1`
margin: 0px;
margin-left: 25px;
color: ${props=>(props.darkMode?'white':'black')};

`
