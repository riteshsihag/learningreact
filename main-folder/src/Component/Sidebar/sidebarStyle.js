import styled from "styled-components";

export const SidebarContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
    justify-content: space-between;
    background-color: ${props=>(props.darkMode?'#212121':'white')};
    color: ${props=>(props.darkMode?'white':'black')} !important;
    width: 278px;
`
export const NavLinkContainer = styled.div`
display: flex;
padding: 11px;
margin-top: 5px;
padding-left: 40px;
`
export const NavImg = styled.img`
`
export const NavName = styled.h4`
margin: 0px;
margin-left: 27px;
a{ color :${props=>(props.darkMode?'white':'black')} }

`
export const ContactContainer = styled.div`
padding-left: 40px;
width: 200px;

`
export const SideLinkContainer = styled.div`
margin-top: 20px;
`
export const ContactHeading = styled.h3`
`
export const ContactImgContainer = styled.div`
display: flex;
width: 135px;
    justify-content: space-between;
`
export const ContactParagraph = styled.h4`
`