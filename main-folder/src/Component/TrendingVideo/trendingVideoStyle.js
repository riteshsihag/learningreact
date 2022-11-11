import styled from "styled-components";

export const VideoDetailContainer = styled.div`
max-width: 1170px;
display: flex;
padding: 30px;
color: ${props=>(props.darkMode?'white':'black')};
@media screen and (max-width:700px){
    display: block;
    padding: 0px;
    }
`
export const Thumbnail = styled.img`
width: 40%;
@media screen and (max-width:1200px){
    width: 56%;
    }
@media screen and (max-width:700px){
    width: 100%;
    }
`
export const VideoInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-left: 30px;
@media screen and (max-width:700px){
    display: block;
    margin-left: 0px;

    }

`
export const VideoDescription = styled.div`
`
export const VideoParagraph = styled.p`
`
export const ChannelName = styled.p`
`
export const ViewsContainer = styled.div`
display: flex;
    justify-content: space-between;
    width: 220px;
   
`
export const ChannelLogo = styled.img`
width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-right: 15px;
`