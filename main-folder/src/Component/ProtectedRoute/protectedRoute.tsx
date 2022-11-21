import React from 'react'
import Cookies from 'js-cookie';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import { OmitNative } from 'react-router';
const ProtectedRoute = (props: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<Route<{}, string>> & Readonly<RouteProps<string, { [x: string]: string | undefined; }> & OmitNative<{}, keyof RouteProps<string, { [x: string]: string | undefined; }>>>) => {
    const jwtToken = Cookies.get('jwt_token')
    if(jwtToken===undefined){
     return <Redirect to={'/login'}/>
    }
    return <Route {...props}/>
}


export default ProtectedRoute;
