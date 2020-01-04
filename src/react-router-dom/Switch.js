import React, { useContext } from 'react'
import Context from './Context'
import { pathToRegexp } from 'path-to-regexp'

export default function Switch(props) {
    const { location: {pathname} } = useContext(Context);
    for (let i = 0; i < props.children.length; i++) {
        let child = props.children[i]; // 拿到组件虚拟dom
        let { path = '/', exact = false } = child.props;
        let regexp = pathToRegexp(path, [], {end: exact});
        let result = pathname.match(regexp);
        if (result) {
            return child;
        }
    }
    return null;
}