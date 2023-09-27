import React, {createContext, useState} from 'react';

const UserContext = createContext(null);

export const UserProvider  = UserContext.Provider;
// @ts-ignore
function Form({children}) {
    const [user, setUser] = useState("Jesse Hall");

    return (
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}!`}</h1>
            {children}
        </UserContext.Provider>
    );
}

export  {Form, UserContext};
