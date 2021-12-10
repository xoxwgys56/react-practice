import React from "react";

function User({user, userDispatch}) {
    return (
        <div>
            <b
                style={{cursor: 'pointer', color: user.active ? 'green' : 'red'}}
                onClick={() => userDispatch({type: 'TOGGLE', id: user.id})}
            >
                {user.username}
            </b>
            <span>({user.email}</span>
            <button onClick={() => userDispatch(({type: 'REMOVE', id: user.id}))}>remove</button>
        </div>
    )
}

function UserList({users, userDispatch}) {
    return (
        <div>
            {
                users.map((user, index) => (
                    <User
                        user={user}
                        key={index}
                        userDispatch={userDispatch}
                    />
                ))
            }
        </div>
    );
}

export default React.memo(UserList,
    ((prevProps, nextProps) => prevProps.users === nextProps.users));