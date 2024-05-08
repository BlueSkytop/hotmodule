import React, {FC, ReactNode} from 'react';


interface IProps{
    name:string;
    image:string
}

type PropsWithChildren<T> = T &{children?: React.ReactNode};

const Character:FC<PropsWithChildren<IProps>> = ({name, image, children}) => {

    return (
            <div id={'block'}>
                <div id={'info'}>
                <h2>{name}</h2>
                <img src={image} alt={name}/>
                    <h5>{children}</h5>
                </div>
            </div>
    );
};

export default Character;