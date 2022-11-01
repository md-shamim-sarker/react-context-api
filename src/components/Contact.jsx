import React, {useContext} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const Contact = () => {
    const {count, setCount} = useContext(GeneralContext);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Count + 1</button>
        </div>
    );
};

export default Contact;