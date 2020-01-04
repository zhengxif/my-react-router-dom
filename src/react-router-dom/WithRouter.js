import React from 'react'
import { Route } from './index'

export default function (Component) {
    return (
        props => (<Route 
            children={
                props => (
                    <Component {...props} />
                )
            }
        />)
    )
}