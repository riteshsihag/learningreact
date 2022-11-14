import styled from 'styled-components'

export const LightContainer = styled.div`
background-color: ${props=>(props.color)};
padding: 40px;
width: 100px;
height: 100px;
border: 1px solid;
opacity: ${props=>(props.isActive?1:0.5)};
`