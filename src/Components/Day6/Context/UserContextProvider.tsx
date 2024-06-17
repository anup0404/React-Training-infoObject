import React, { useState, ReactNode } from 'react';
import UserContext from './UserContext';
import { User } from '../Login';

type Props = {
    children: ReactNode;
};

const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User>({ userName: '', password: '' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
