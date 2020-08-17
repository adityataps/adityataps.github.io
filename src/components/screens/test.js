import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './stylesheets/test.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import name from '../images/name.png'
import bubblesFiltered from '../videos/bubblesFiltered.mov'
import Typist from 'react-typist';
import {home} from "./home";
import {about} from "./about";
import {projects} from "./projects";
import {resume} from "./resume";
import {contact} from "./contact";
import {notFound} from "./notFound";
import SideBar from "../sidebar";




export const test = () => {
    return(
        <div className={"page"}>


            <SideBar />


        </div>



    );
};