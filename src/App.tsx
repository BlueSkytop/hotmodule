import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from "./components/user/Users";
import Posts from './components/user/Posts';
import UserDetail from './components/user/UserDetail';


interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

const App: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then((response: { data: { users: IUser[] } }) => {
                setUsers(response.data.users);
            })
            .catch((error: any) => console.error('Error fetching users:', error));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Users users={users} />} />
                <Route path="/posts/:userId" element={<Posts />} />
                <Route path="/user/:userId" element={<UserDetail />} />
            </Routes>
        </Router>
    );
};



export default App;
