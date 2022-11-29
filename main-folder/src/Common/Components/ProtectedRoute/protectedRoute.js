import React from 'react'
import Cookies from 'js-cookie';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import { OmitNative } from 'react-router';
const ProtectedRoute = (props) => {
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken===undefined){
     return <Redirect to={'/login'}/>
    }
    return <Route {...props}/>
}


export default ProtectedRoute;
