import styled from "styled-components";

export const BannerContainer = styled.div`
background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
height: 245px;
    background-size: cover;
    background-repeat: no-repeat;
    padding-left: 50px;
    padding-top: 22px;
    display: ${props=>(props.remove)};
    justify-content: space-between;
`
export const BannerParagraph = styled.p`
font-size: 20px;
`
export const BannerButton = styled.button`
padding: 11px;
    width: 129px;
    background-color: white;
    font-weight: 600;
    border-radius: 4px;
    font-size: 15px;
    margin-top: 15px;
`
export const BannerContentContainer = styled.div`
`