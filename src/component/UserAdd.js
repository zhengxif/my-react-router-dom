import React, { useRef } from 'react'

export default function UserAdd(props) {
    let usernameRef = useRef();
    function handleSubmit() {
        let username = usernameRef.current.value;
        let usersStr = localStorage.getItem('users');
        let users = usersStr ? JSON.parse(usersStr) : [];
        users.push({id: Date.now(), username});
        localStorage.setItem('users',JSON.stringify(users));
        props.history.push('/user/list');
    }   
    return (
        <form onSubmit={handleSubmit}>
            <input className="form-control" type="text" ref={usernameRef}/>
            <button type="submit" className="btn btn-primary">提交</button>
        </form>
    )
}