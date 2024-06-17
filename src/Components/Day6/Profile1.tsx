import React, { useContext } from 'react';
import UserContext from './Context/UserContext';

const Profile1 = () => {
    const userContext = useContext(UserContext);

    return (
        <>
            {userContext  && (
                <>
                    <h1>UserName: {userContext.user?.userName}</h1>
                    <h1>Password: {userContext.user?.password}</h1>
                </>
            )}
            {userContext === null && (
                <>
                    <h1>No user logged in</h1>
                </>
            )}
        </>
    );
};

export default Profile1;
