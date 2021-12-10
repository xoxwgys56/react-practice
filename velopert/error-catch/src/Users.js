import React from "react";

function Users({users, onToggle}) {
    // if (!users) return null;
    return (
        <ul>
            {users.map( user => (
                <li key={user.id} onClick={() => onToggle(user.id)}>{user.username}</li>
            ))}
        </ul>
    )
}

Users.defaultProps = {
    onToggle: () => {
        console.log('on toggle is missing.')
    }
}

export default Users;