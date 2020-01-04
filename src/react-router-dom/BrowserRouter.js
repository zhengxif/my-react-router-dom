import React, {useState, useEffect} from 'react'
import Context from './Context'

(function (history) {
    let pushState = history.pushState;
    history.pushState = function (state, title, pathname) {
        if (typeof window.onpushstate === 'function') {
            window.onpushstate(state, pathname);
        }
        pushState.apply(history, arguments);
    }
})(window.history);

export default function BrowserRouter(props) {
    let [stateData, setStateData] = useState({
        location: {
            pathname: '/'
        }
    })
    useEffect(() => {
        window.onpopstate = function(event) {
            setStateData(stateData => ({
                location: {
                    ...stateData.location,
                    pathname: document.location.pathname,
                    state: event.state
                }
            }))
        };
        window.onpushstate = function (state, pathname) {
            setStateData(stateData => ({
                location: {
                    ...stateData.location,
                    pathname,
                    state
                }
            }))
        }
    }, [])
    let value = {
        location: stateData.location,
        history: {
            push(to) {
                if (typeof to === 'object') {
                    let { pathname, state } = to;
                    window.history.pushState(state, '', pathname);
                } else {
                    window.history.pushState('', '', to)
                }
            }
        }
    }
    return (
        <Context.Provider value={value}>
            { props.children}
        </Context.Provider>
    )
}