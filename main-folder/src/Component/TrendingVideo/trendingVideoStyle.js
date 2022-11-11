import styled from "styled-components";

export const VideoDetailContainer = styled.div`
max-width: 1170px;
display: flex;
padding: 30px;
color: ${props=>(props.darkMode?'white':'black')};
`
export const Thumbnail = styled.img`
width: 40%;
`
export const VideoInfoContainer = styled.div`
display: flex;
justify-content: center;
margin-left: 30px;

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