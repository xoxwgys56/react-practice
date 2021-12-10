import React, {useCallback, useContext, useRef} from "react";
import useInputs from "./hooks/useInputs";
import {UserDispatch} from "./App";

function CreateUser({initialInput}) {
    const [{username, email}, onChange, reset] = useInputs(initialInput);
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        if (!username || !email) {
            console.log("invalid input")
            return;
        }

        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current += 1;
    }, [username, email])

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

export default React.memo(CreateUser);