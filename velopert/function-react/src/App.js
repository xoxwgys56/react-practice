import React, {useMemo, useReducer} from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import "./App.css";
import produce from "immer";

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
    switch (action.type) {
        case 'CHANGE_INPUT':
            return produce(state, draft => draft.inputs[action.name] = action.value)
        // return {
        //     ...state,
        //     inputs: {
        //         ...state.inputs,
        //         [action.name]: action.value
        //     }
        // };
        case 'CREATE_USER':
            return produce(state, draft => {
                draft.users.push(action.user)
                // null 반환시 에러발생.
                return;
            })
        case 'TOGGLE_USER':
            return produce(state, draft => {
                const user = draft.users.find(user => user.id === action.id);
                user.active = !user.active;
            })
        case 'REMOVE_USER':
            return produce(state, draft => {
                const index = draft.users.findIndex(user => user.id === action.id);
                draft.users.splice(index, 1);
            })
        default:
            return state;
    }
}

export const UserDispatch = React.createContext(null);

function App() {


    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;

    const count = useMemo(() => countActiveUsers(users), [users])

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser
                initialInput={initialState.inputs}
            />
            <br/>
            <UserList
                users={users}
            />
            <br/>
            <div>count of active user : {count}</div>
            {/*<Counter/>*/}
        </UserDispatch.Provider>
    );
}

export default App;
