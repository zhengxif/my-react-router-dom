import React from 'react'
import { Route, Redirect } from '../react-router-dom'

export default function (props) {
    let { component: Component, ...rest } = props;
    let logined = localStorage.getItem('logined');
    return (
        <Route 
            {...rest}
            render={
                props => (
                    logined ? <Component {...props} /> : <Redirect to={{pathname: '/login', state:{from:props.location.pathname}}} />
                )
            }
        />
    )
}