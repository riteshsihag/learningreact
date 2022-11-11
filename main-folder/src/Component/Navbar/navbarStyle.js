import styled from "styled-components";

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 22px;
padding-left: 40px;
padding-right: 45px;
background-color: ${props=>(props.darkMode?'#212121':'white')};

`
export const Logo = styled.img`
width: 170px;
    height: 41px;
`
export const LogoutContainer = styled.div`
display: flex;
align-items: center;
width: 240px;
justify-content: space-between;
@media screen and (max-width: 860px) {
    width: 137px;
}
`
export const LogoutButton = styled.button`
padding: 7px;
    width: 90px;
    background-color: ${props=>(props.darkMode?'black':'white')};
    color: ${props=>(props.darkMode?'white':'#3b82f6')} ;
    border: 1px solid  ${props=>(props.darkMode?'white':'#3b82f6')};
    font-weight: 600;
    border-radius: 4px;
    font-size: 15px;
    @media screen and (max-width: 860px) {
    display: none;
}
`
export const CancelButton = styled.button`
padding: 12px;
    width: 90px;
    background-color: ${props=>(props.darkMode?'#232323':'white')};
    color: ${props=>(props.darkMode?'white':'#3b82f6')} ;
    border: 1px solid  ${props=>(props.darkMode?'white':'#3b82f6')};
    font-weight: 600;
    border-radius: 4px;
    font-size: 15px;
`
export const ConfirmButton = styled.button`
padding: 12px;
    width: 90px;
    background-color: #3b82f6;
    color: white ;
    border: 1px solid #3b82f6;
    font-weight: 600;
    border-radius: 4px;
    font-size: 15px;
`
export const Img = styled.img`
width: 35px;
@media screen and (max-width: 860px) {
    display: none;
}
`