import React, {useContext, useState} from 'react';
import {GeneralContext} from '../contexts/UserContext';

const About = () => {
    const [add, setAdd] = useState(null);
    const {addFunction} = useContext(GeneralContext);
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const n1 = Number(form.num1.value);
        const n2 = Number(form.num2.value);
        const add = addFunction(n1, n2);
        setAdd(add);
    };
    return (
        <div>
            <h2>Add two numbers</h2>
            <form onSubmit={onSubmitHandler}>
                <input type="number" name="num1" id="num1" /><br />
                <input type="number" name="num2" id="num2" /><br />
                <input type="submit" value="Submit" /><br />
            </form>
            <h3>Result is {add}</h3>
        </div>
    );
};

export default About;