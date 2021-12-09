import React, {useRef, useState} from "react";
import "./App.css";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

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
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'public.tester@gmail.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'public.liz@gmail.com'
        },
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        // 아래 2개 같음.
        setUsers([...users, user]);
        // setUsers(users.concat(user));

        // 입력을 비움
        setInputs({
            username: '',
            email: ''
        });
        nextId.current += 1;
    };
    const onChange = e => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users}/>
        </>
    )
        ;
}

export default App;
