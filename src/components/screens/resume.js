import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/resume.css';
import './stylesheets/screens.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css';
import flowers from '../images/flowers.jpg';
import name from '../images/name.png';
import PDFViewer from "../PDFViewer";
import PDFJsBackend from "../backends/pdfjs";
import Sidebar from "../sidebar";
import Typist from "react-typist";



export const resume = () => {
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
                        <Link to={"/projects"} className={"nav-link"}> projects </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <b style={{'text-shadow': '2px 0 crimson'}}> résumé </b>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/contact"} className={"nav-link"}> contact </Link>
                    </div>

                </div>

                <div id={"content-container-resume"}>
                    <Typist cursor={{blink: true, element: '|'}} className={"typist-resume"}>
                        <Typist.Delay ms={500} />
                        &gt;&gt;&gt; print("
                        <b style={{color: 'crimson'}}>
                            my curriculum vitae
                        </b>
                        ")






                    </Typist>

                    <a href={"/ResumePDF/PlaceholderResume.pdf"} style={{"margin-top": "-50px", "float": "right", "font-family": "\"Lora\", serif", "font-size": "50px", "text-decoration": "none"}} download>
                        📎
                        {/*Can't see it? No worries. Click here to download.*/}
                    </a>

                    <div style={{height: "400px"}}>
                        <PDFViewer backend={PDFJsBackend} src={"/ResumePDF/PlaceholderResume.pdf"}/>
                    </div>

                </div>

            </BrowserView>

            <MobileView>

                <Sidebar />

                <div style={{position: "absolute"}}>
                    <div className={"mobile-container"} style={{width: "90%", height: "90%", "position": "fixed", "margin-left": "5%", "margin-top": "20%"}}>

                        <div style={{"text-align": "center"}}>
                            <Typist cursor={{blink: true, element: '|'}} className={"typist-resume-mobile"}>
                                <Typist.Delay ms={500} />
                                &gt;&gt;&gt; print("
                                <b style={{color: 'crimson'}}>
                                    my curriculum vitae
                                </b>
                                ")

                            </Typist>
                        </div>

                        <a href={"/ResumePDF/PlaceholderResume.pdf"} style={{"margin-left": "30px", "font-family": "\"Lora\", serif", "font-size": "12px"}}download>
                            📎 Can't see it? No worries. Click here to download.
                        </a>


                        <div style={{height: "75%"}}>
                            <PDFViewer backend={PDFJsBackend} src={"/ResumePDF/PlaceholderResume.pdf"}/>
                        </div>



                    </div>
                </div>




            </MobileView>



        </div>



    );
};