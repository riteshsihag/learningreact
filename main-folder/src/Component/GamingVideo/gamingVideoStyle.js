import styled from "styled-components";

export const VideoDetailContainer = styled.div`
max-width: 380px;
padding: 9px;
color: ${props=>(props.darkMode?'white':'black')};


`
export const Thumbnail = styled.img`
width: 100%;
`
export const VideoInfoContainer = styled.div`
display: flex;
justify-content: initial;

`
export const VideoDescription = styled.div`
`
export const VideoParagraph = styled.p`
font-size: 19px;
font-weight: 600;
`
export const ChannelName = styled.p`
margin: 0px;
font-size: 16px;
margin-left: 10px;
`
export const ChannelViews = styled.p`
margin: 0px;
font-size: 16px;
`
export const ViewsContainer = styled.div`
display: flex;
    justify-content: space-between;
`
export const ChannelLogo = styled.img`
width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-right: 15px;
`