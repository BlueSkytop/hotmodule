import React from 'react';
import User from "./User";
import {IUsersProps} from "./Interfaces";




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