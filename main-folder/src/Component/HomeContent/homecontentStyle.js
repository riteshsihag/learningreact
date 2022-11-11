import styled from "styled-components";

export const HomeContentContainer = styled.div`
width: 100%;
height: 100%;
background-color: ${props=>(props.darkMode?'#000000':'#ebebeb')};
overflow-y: scroll;
-webkit-overflow-scrolling: auto;
`
export const VideoGridContainer = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-gap: 10px;
padding: 51px;
@media screen and (max-width: 1130px) {
grid-template-columns: auto auto ;
    
}
@media screen and (max-width: 700px){
grid-template-columns: auto  ;
justify-content: center;
}
`
export const NoResultContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
export const NoResultImg = styled.img`
margin-top: 70px;
width: 420px;
height: 333px;
`
export const NoResultHeading = styled.h3`
color: ${props=>(props.darkMode?'white':'black')};
`
export const NoResultPara = styled.p`
margin: 0px;
color: ${props=>(props.darkMode?'white':'black')};

`
export const RetryButton = styled.button`
padding: 8px;
    width: 90px;
    background-color: #4f46e5;
    color: white ;
    border: 1px solid #4f46e5;
    font-weight: 600;
    border-radius: 4px;
    font-size: 15px;
    margin-top: 20px;
`
