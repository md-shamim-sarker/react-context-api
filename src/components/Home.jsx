import React, {useContext} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const Home = () => {
    const {myName, count} = useContext(GeneralContext);
    return (
        <div>
            <h2>{count}</h2>
            <h2>My name is {myName}</h2>
        </div>
    );
};

export default Home;