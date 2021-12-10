import React from "react";

function CreateUser({username, email, userDispatch}) {
    console.log("create user")

    return (
        <div>
            <input
                name="username"
                placeholder="id"
                onChange={userDispatch({type: 'UPDATE'})}
                value={username}
            />
            <input
                name="email"
                placeholder="email"
                onChange={userDispatch({type: 'UPDATE'})}
                value={email}
            />
            <button onClick={userDispatch({type: 'CREATE', username: username, email: email})}>submit</button>
        </div>
    );
}

export default React.memo(CreateUser);