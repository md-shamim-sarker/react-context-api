import React, {createContext, useState} from 'react';

export const GeneralContext = createContext();

const UserContext = ({children}) => {
    const [count, setCount] = useState(0);
    const myName = 'Shamim Sarker';
    const addFunction = (a, b) => {
        return a + b;
    };

    const generalInfo = {myName, count, setCount, addFunction};

    return (
        <GeneralContext.Provider value={generalInfo}>
            {children}
        </GeneralContext.Provider>
    );
};

export default UserContext;