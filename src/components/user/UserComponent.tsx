import React, {FC, ReactNode} from 'react';
import {IUser} from "../../model/IUser";

type UserComponentWithChildren<T> = T & {children?:ReactNode};
const UserComponent:FC<UserComponentWithChildren<IUser>> = ({id, name, children}) => {
    return (
        <div>
            {id} {name} - {children}
        </div>
    );
};

export default UserComponent;