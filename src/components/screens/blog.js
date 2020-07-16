import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/blog.css';
import './stylesheets/screens.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import flowers from '../images/flowers.jpg'
import name from '../images/name.png'




export const blog = () => {
    return(
        <div className={"page"}>

            <BrowserView>
                <img src={flowers}
                     className={"background-image"}
                     alt={"flowers"}
                     style={{zIndex: -5}}
                />

                <div className={"nav-bar"}>
                    <img src={name} className={"nav-name"} alt={"aditya tapshalkar"} style={{float:"left"}}/>

                    <div className={"nav-links-container"}>
                        <Link to={"/"} className={"nav-link"}> home </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/about"} className={"nav-link"}> about </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <b style={{'text-shadow': '2px 0 red'}}> blog </b>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/projects"} className={"nav-link"}> projects </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/resume"} className={"nav-link"}> résumé </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/contact"} className={"nav-link"}> contact </Link>
                    </div>











                </div>







                {/*<div className={"aboutContainer animate__animated animate__fadeIn"} >*/}
                {/*    test*/}
                {/*</div>*/}


            </BrowserView>




        </div>



    );
};