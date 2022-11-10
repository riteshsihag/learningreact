import styled from "styled-components";

export const HomeContentContainer = styled.div`
width: 100%;
height: 100%;
background-color: ${props=>(props.darkMode?'#0f0f0f':'#ebebeb')};
overflow-y: scroll;
-webkit-overflow-scrolling: auto;
`
export const VideoGridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 10px;
padding: 51px;
`