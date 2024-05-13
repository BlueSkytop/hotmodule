import React from 'react';
import User from "../user/User";
import { IUser} from "../../models/IUserModel";

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