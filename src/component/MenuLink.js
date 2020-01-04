import React from 'react'
import { Link, Route } from '../react-router-dom'
import './MenuLink.css'

export default function MenuLink(props) {
    let { to, exact, children } = props;
    return (
        <Route 
            path={to}
            exact={exact}
            children = {
                props => (
                    <Link className={props.match ? 'active' : ''} to={to}>{children}</Link>
                )
            }
        />
    )
}