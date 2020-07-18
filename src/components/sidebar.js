import React from 'react';
import { slide as Menu } from 'react-burger-menu';


export default props => {
    return (

        <Menu>
            <a className={"menu-item"} href={"/"}>
                home
            </a>

            <a className={"menu-item"} href={"/about"}>
                about
            </a>

            <a className={"menu-item"} href={"/blog"}>
                blog
            </a>

            <a className={"menu-item"} href={"/projects"}>
                projects
            </a>

            <a className={"menu-item"} href={"/resume"}>
                résumé
            </a>

            <a className={"menu-item"} href={"/contact"}>
                contact
            </a>
        </Menu>



    );
};