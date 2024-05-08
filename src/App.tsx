import React, {FC, useEffect, useState} from 'react';

import './App.css';
import {IUser} from "./model/IUser";
import UserComponent from "./components/user/UserComponent";


const App:FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });


    return () => {
    console.log('start new happy day');
        }
    }, []);

    return (
        <>
            {
                users.map(({ name, id, email, username}, index) =>
                    <UserComponent
                        key={index}
                        id={id}
                        name={name}
                        username={username}
                        email={email}
                    >kkhyjkljyukftfjythkyug</UserComponent>
                )
            }
        </>
    );

};

export {App};

export default App;
