import React, {useCallback, useMemo, useRef, useState} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import "./App.css";

function countActiveUsers(users) {
    console.log('counting active users...');
    return users.filter(user => user.active).length;
}

function App() {
    const [inputs, setInputs] = useState({
        username: '',
        email: ""
    });
    const {username, email} = inputs;

    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: false
        },
        {
            id: 2,
            username: 'tester',
            email: 'public.tester@gmail.com',
            active: true,
        },
        {
            id: 3,
            username: 'liz',
            email: 'public.liz@gmail.com',
            active: true
        },
    ]);

    const onChange = useCallback(
        e => {
            const {name, value} = e.target;
            setInputs(inputs => ({
                ...inputs,
                [name]: value
            }));
        }, []);
    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // 아래 2개 같음.
        setUsers(users => [...users, user]);
        // setUsers(users => users.concat(user));

        // 입력을 비움
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    }, [username, email]);
    const onRemove = useCallback(
        id => {
            setUsers(users => users.filter(user => user.id !== id));
        },
        []
    );
    const onToggle = useCallback(id => {
        setUsers(users =>
            users.map(user =>
                user.id === id ? {...user, active: !user.active} : user
            )
        );
    }, []);
    // use memoization
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <br/>
            <UserList
                users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            />
            <br/>
            <div>count of active user : {count}</div>
            {/*<Counter/>*/}
        </>
    );
}

export default App;
