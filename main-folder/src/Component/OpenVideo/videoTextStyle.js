import styled from "styled-components";

export const VideoTitle = styled.p`
 `
export const VideoTextContainer = styled.div`
background-color: ${props=>(props.darkMode?'#000000':'#ebebeb')};
color: ${props=>(props.darkMode?'white':'black')};
`
export const TitleContainer = styled.div`
border-bottom: 1px solid gray;
padding-top: 20px;
padding-bottom: 20px;
`
export const ViewsLikesContainer = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width:650px) {
   display: block;
}
`
export const LikeDislikeContainer = styled.div`
display: flex;
justify-content: space-between;
width: 230px;
`
export const LikeContainer = styled.div`
display: flex;

`
export const DislikeContainer = styled.div`
display: flex;
`
export const Like = styled.p`
margin-left: 5px;
`
export const Dislike = styled.p`
margin-left: 5px;

`

export const SaveContainer = styled.div`
display: flex;
`
export const Save = styled.p`
margin-left: 5px;

`
export const ChannelContainer = styled.div`
padding-top: 40px;
`
export const ChannelDetail = styled.div`
`
export const ChannelLogo = styled.img`
width: 60px;
height: 60px;
margin-top: 15px;
margin-right: 15px;
`
export const SubscriptionContainer = styled.div`
`
export const ChannelTitle = styled.h4`
`
export const Subscriber = styled.p`
line-height: 0px;
`
export const Description = styled.p`
margin-left: 75px;
margin-top: 35px;
`
export const ProfileContainer = styled.div`
display: flex;
`