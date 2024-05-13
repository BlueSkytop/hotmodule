import React from 'react';
import { IUser} from "../../models/IUserModel";
import {Link} from "react-router-dom";

interface IUserProps {
    user: IUser;
}

const User: React.FC<IUserProps> = ({ user }) => {
    return (
        <div id={'box'}>
            <p id={'userList'}>{user.id}: {user.firstName} {user.lastName}</p>
            <Link to={`/posts/${user.id}`}>
                <button id={'buttonPost'}>Post</button>
            </Link>
            <Link  to={`/user/${user.id}`}>
                <button id={'buttonPost2'}>User Information</button>
            </Link>
        </div>
    );
};

export default User;