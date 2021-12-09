import React from "react";

function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input
                name="username"
                placeholder="id"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>submit</button>
        </div>
    );
}

export default CreateUser;