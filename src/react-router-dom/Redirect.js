import React, { useContext } from 'react'
import Context from './Context'

export default function (props) {
    let { history } = useContext(Context);
    if (typeof props.to === 'object') {
        let { pathname, state } = props.to;
        history.push({pathname:pathname, state: state});
    } else {
        history.push(props.to);
    }
    
    return null;
}