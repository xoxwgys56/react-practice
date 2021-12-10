import React, {useCallback, useMemo, useReducer, useRef} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import "./App.css";

function countActiveUsers(users) {
    console.log('counting active users...');
    return users.filter(user => user.active).length;
}

const initialState = {
    inputs: {
        username: '',
        email: ''
    },
    users: [
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
    ]
};

function reducer(state, action) {
    return state
}

function App() {

    const inputReducer = useCallback(
        (state, action) => {
            switch (action.type) {
                case 'UPDATE':
                    userDispatch({type: 'UPDATE', user: state.user});
                    return state;
                case 'RESET':
                    return {
                        username: '',
                        email: ''
                    };
                default:
                    break;
            }
        }, [])
    const userReducer = useCallback(
        (state, action) => {
            console.log(state, action);

            switch (action.type) {
                case 'CREATE':
                    // const user = {
                    //     id: nextId.current,
                    //     username: action.username,
                    //     email: action.email,
                    // };
                    // inputDispatch({type: 'RESET'});
                    // nextId.current += 1;
                    // return state.concat(user);
                    return state;
                case 'UPDATE':
                    // 모르겠다.
                    return;
                case 'REMOVE':
                    return state.filter(user => user.id !== action.id);
                case 'TOGGLE':
                    return state.map(user => user.id === action.id ? {...user, active: !user.active} : user)
                default:
                    break;
            }
        }, [])

    const [users, userDispatch] = useReducer(userReducer, initialState.users);
    const [inputs, inputDispatch] = useReducer(inputReducer, initialState.inputs);
    const {username, email} = inputs;

    // const onChange = useCallback(
    //     e => {
    //         const {name, value} = e.target;
    //         setInputs(inputs => ({
    //             ...inputs,
    //             [name]: value
    //         }));
    //     }, []);
    const nextId = useRef(4);

    // const onCreate = useCallback((username, email) => {
    //
    //     // 아래 2개 같음.
    //     setUsers(users => [...users, user]);
    //     // setUsers(users => users.concat(user));
    //
    // }, [username, email]);
    // const onRemove = useCallback(
    //     id => {
    //         setUsers(users => users.filter(user => user.id !== id));
    //     },
    //     []
    // );
    // const onToggle = useCallback(id => {
    //     setUsers(users =>
    //         users.map(user =>
    //             user.id === id ? {...user, active: !user.active} : user
    //         )
    //     );
    // }, []);
    // use memoization
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                inputDispatch={inputDispatch}
                userDispatch={userDispatch}
            />
            <br/>
            <UserList
                users={users}
                userDispatch={userDispatch}
            />
            <br/>
            <div>count of active user : {count}</div>
            {/*<Counter/>*/}
        </>
    );
}

export default App;
