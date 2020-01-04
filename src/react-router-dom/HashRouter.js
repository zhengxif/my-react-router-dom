import React, { useState, useEffect } from 'react'
import Context from './Context'

let stateCopy;
let initialState = {
    location: {
        pathname: window.location.hash.slice('1')
    },
    history: {
        push(to) {
            if (typeof to === 'object') {
                let { pathname, state } = to;
                stateCopy = state;
                window.location.hash = pathname;
            } else {
                window.location.hash = to;
            }
        }
    }
}
export default function HashRouter(props) {
    const [routeState, setRouteState] = useState(initialState);
    useEffect(() => {
        window.location.hash = window.location.hash || '/';
        window.addEventListener('hashchange', () => {
            setRouteState((routeState) => (
                {
                    ...routeState,
                    location: {
                        ...routeState.location,
                        pathname: window.location.hash.slice('1'),
                        state: stateCopy
                    }
                }
            ))
        });
    }, [])
    return(
        <Context.Provider value={routeState}>
            { props.children }
        </Context.Provider>
    )
}