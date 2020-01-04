import React from 'react'
import { WithRouter } from "../react-router-dom"

function NavHeader(props) {
    return(
        <div className="navbar-heading">
            <div className="navbar-brand" onClick={()=>props.history.push('/')}>Logo</div>
        </div>
    )
}
export default WithRouter(NavHeader)