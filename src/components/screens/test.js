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
import PlaceholderResume from "../PlaceholderResume.pdf"

import PDFViewer from "../PDFViewer";
import PDFJsBackend from '../backends/pdfjs';





export const test = () => {

    return(
        <div className={"page"}>

            <div id={"content-container-test"}>
                <PDFViewer backend={PDFJsBackend} src={"/ResumePDF/PlaceholderResume.pdf"}/>
            </div>


        </div>


    );

};