import React from 'react';
import {NavLink} from 'react-router-dom';

const style = {
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
};

const Navbar = () => {
    return (
        <div style={style}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Navbar;