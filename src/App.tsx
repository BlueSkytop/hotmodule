import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetail from "./components/users/UserDetail";
import {IUser} from "./models/IUserModel";


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
