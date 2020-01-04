import React, { useState, useEffect } from 'react'
import { Link } from '../react-router-dom'

export default function UserList() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        let usersStr = localStorage.getItem('users');
        let users = usersStr?JSON.parse(usersStr):[];
        setUsers(users); 
    }, [])
    return (
        <div>
            UserList
            <ul className="list-group">
                {
                    users.map((user, index) => (
                        <li className="list-group-item" key={index}>
                            <Link to={{ pathname: `/user/detail/${user.id}`, state: user }}>{user.username}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}