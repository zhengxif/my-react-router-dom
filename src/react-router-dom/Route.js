import React, { useContext } from 'react';
import Context from './Context';
import { pathToRegexp } from 'path-to-regexp';


export default function Route(props) {
    let { component: Component, render, children, path = '/', exact = false } = props;
    let context = useContext(Context);
    let { location: {pathname} } = context;
    let keys = [];
    let regexp = pathToRegexp(path, keys, {end: exact});
    let result = pathname.match(regexp);
    let propsAll = {
        location: context.location,
        history: context.history,
    }
    if (result) { // 匹配到了路径
        let [url, ...values] = result;
        keys = keys.map(item => item.name);
        let params = values.reduce((memo, val, index) => {
            memo[keys[index]] = val;
            return memo;
        }, {});
        let match = {
            url: pathname,
            isExact: pathname === url,
            path,
            params
        }
        // 只有匹配到的路径，props里才有match属性
        propsAll.match = match;
        if (Component) {
            return <Component {...propsAll} />
        } else if (render) {
            return render(propsAll);
        } else if (children) {
            return children(propsAll);
        }else {
            return null;
        }
    }else if (children){
        return children(propsAll);
    } else {
        return null;
    }
}