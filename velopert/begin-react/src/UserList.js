import React, {useContext} from "react";
import {UserDispatch} from "./App";

function User({user}) {
    // console.log(`update user ${user.id}`)
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{cursor: 'pointer', color: user.active ? 'green' : 'red'}}
                onClick={() => dispatch({type: 'TOGGLE_USER', id: user.id})}
            >
                {user.username}
            </b>
            <span>({user.email}</span>
            <button onClick={() => dispatch({type: 'REMOVE_USER', id: user.id})}>remove</button>
        </div>
    )
}

React.memo(User, ((prevProps, nextProps) => {
    // 호출이 안됨.
    return prevProps.user.active !== nextProps.user.active
}));

function UserList({users}) {
    return (
        <div>
            {
                users.map((user, index) => (
                    <User
                        user={user}
                        key={index}
                    />
                ))
            }
        </div>
    );
}


export default React.memo(UserList,
    ((prevProps,
      nextProps) =>
        prevProps.users === nextProps.users));

