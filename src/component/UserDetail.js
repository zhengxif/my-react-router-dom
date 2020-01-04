import React,{ useState, useEffect} from 'react'

export default function UserDetail(props) {
    let [user, setUser] = useState({});
    useEffect(() => {
        let userOld = props.location.state;
        if (!userOld) {
            let usersStr = localStorage.getItem('users');
            let users = usersStr?JSON.parse(usersStr):[];
            let { id } = props.match.params;
            userOld = users.find( item => item.id == id);
        }
        setUser(userOld);
    }, [])
    return (
        <div>
           {
               user.id
           }
           :
           {
               user.username
           }
        </div>
    )
}