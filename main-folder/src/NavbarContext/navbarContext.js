import React from "react";

const NavbarContext = React.createContext({
 isContentActive : true,
 isLeftActive : true,
 isRightActive : true,
 changeContent : () =>{},
  changeLeftNav : () =>{},
  changeRightNav : () =>{}
})

export default NavbarContext;