import styled from "styled-components";

export const VideoDetailContainer = styled.div`
max-width:480px;
color: ${props=>(props.darkMode?'white':'black')} !important;

`
export const Thumbnail = styled.img`
width: 100%;
`
export const VideoInfoContainer = styled.div`
display: flex;
justify-content: center;
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
    width: 206px;
`
export const ChannelLogo = styled.img`
width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-right: 15px;
`