import React, { useContext } from 'react'
import Context from './Context'

export default function Link(props) {
    let { history } = useContext(Context);
    let { to } = props;
    return (
        <a {...props} onClick={() => history.push(to)} >{props.children}</a>
    )
} 