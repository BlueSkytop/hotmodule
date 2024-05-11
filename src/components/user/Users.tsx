import React from 'react';
import User from "./User";

interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface IUsersProps {
    users: IUser[];
}

const Users: React.FC<IUsersProps> = ({ users }) => {
    return (
        <div id={'mainBlock'}>
            {users.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};



export default Users;