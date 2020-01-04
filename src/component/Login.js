import React from 'react'

export default function Login(props) {
    function handleClick() {
        localStorage.setItem('logined', 'true');
        if (props.location.state) {
            props.history.push(props.location.state.from);
        }
    }
    return (
        <button className="btn btn-primary" onClick={handleClick}>登录</button>
    )
}