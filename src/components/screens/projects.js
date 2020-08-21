import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/projects.css';
import './stylesheets/screens.css';
import SideBar from '../sidebar';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import flowers from '../images/flowers.jpg'
import name from '../images/name.png'
import Typist from "react-typist";
import me from "../images/me.png";



export const projects = () => {

    return(
        <div className={"page"} style={{height: '100%', overflow: 'hidden'}}>

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
                        <b style={{'text-shadow': '2px 0 red'}}> projects </b>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/resume"} className={"nav-link"}> résumé </Link>
                        <b style={{'user-select': 'none'}}>//</b>
                        <Link to={"/contact"} className={"nav-link"}> contact </Link>
                    </div>



                </div>






                <div className={"content-container"}>
                    
                    <div style={{"padding": "20px"}}>

                        <Typist cursor={{blink: true, element: '|'}} className={"typist-projects"}>
                            <Typist.Delay ms={500} />
                            &lt;div&gt;&nbsp;
                            <b style={{color: 'red'}}>
                                past works and collaborations
                            </b>
                            &nbsp;&lt;/div&gt;
                        </Typist>
                    </div>

                    <div className={"projects-container"} style={{overflow: "auto"}}>

                        <a href={"https://github.com/adityataps/adityataps.github.io"} target={"_blank"} style={{"text-decoration": "none"}}>
                            <div className={"project-cell"}>
                                <b> The Website </b>
                                <i style={{float: "right"}}> Summer 2020 </i>
                                <div style={{"margin-top": "8px"}}> This very website. Made from scratch with ReactJS. </div>
                            </div>
                        </a>

                        <a href={"https://github.com/adityataps/covid-events"} target={"_blank"} style={{"text-decoration": "none"}}>
                            <div className={"project-cell"}>
                                <b> COVID-Events </b>
                                <i style={{float: "right"}}> Summer 2020 </i>
                                <div style={{"margin-top": "8px"}}> COVID-19 Event planning application. Made from scratch with ReactJS for CS 6795.</div>
                            </div>
                        </a>

                        <a href={"https://dev.azure.com/elavon-ashburn/VonGo/_git/VonGo-App"} target={"_blank"} style={{"text-decoration": "none"}}>
                            <div className={"project-cell"}>
                                <b> VonGo </b>
                                <i style={{float: "right"}}> Spring 2020 </i>
                                <div style={{"margin-top": "8px"}}> Cryptocurrency-backed vending machine interface, made with Ethereum and Ionic React for Elavon. </div>
                            </div>
                        </a>

                        <a href={"https://github.com/adityataps/Audiovisual-Localization"} target={"_blank"} style={{"text-decoration": "none"}}>
                            <div className={"project-cell"}>
                                <b> Audiovisual Localization </b>
                                <i style={{float: "right"}}> Fall 2019 </i>
                                <div style={{"margin-top": "8px"}}> VR data visualization tool of participants' localization of auditory stimuli. Made with C# and Unity for PURA. </div>
                            </div>
                        </a>

                        <a href={"https://github.com/Ermy99/space-trader"} target={"_blank"} style={{"text-decoration": "none"}}>
                            <div className={"project-cell"}>
                                <b> Space Traders </b>
                                <i style={{float: "right"}}> Spring 2019 </i>
                                <div style={{"margin-top": "8px"}}> Android port of original PalmOS game. Made with Android Studio, Java, and Kotlin for CS 2340. </div>
                            </div>
                        </a>


                    </div>

                </div>

            </BrowserView>

            <MobileView>

                <SideBar />

                <div style={{position: "absolute"}}>
                    <div className={"mobile-container"}>

                        <Typist cursor={{blink: true, element: '|'}} className={"typist-projects-mobile"}>
                            <Typist.Delay ms={500} />
                            &lt;div&gt;&nbsp;
                            <b style={{color: 'red'}}>
                                projects
                            </b>
                            &nbsp;&lt;/div&gt;
                        </Typist>


                        <div className={"projects-container"} style={{overflow: "auto", "text-align": "left", height: "450px"}}>

                            <a href={"https://github.com/adityataps/adityataps.github.io"} target={"_blank"} style={{"text-decoration": "none"}}>
                                <div className={"project-cell-mobile"}>
                                    <b> The Website </b>
                                    <i style={{float: "right"}}> Summer 2020 </i>
                                    <div style={{"margin-top": "8px"}}> This very website. Made from scratch with ReactJS. </div>
                                </div>
                            </a>

                            <a href={"https://github.com/adityataps/covid-events"} target={"_blank"} style={{"text-decoration": "none"}}>
                                <div className={"project-cell-mobile"}>
                                    <b> COVID-Events </b>
                                    <i style={{float: "right"}}> Summer 2020 </i>
                                    <div style={{"margin-top": "8px"}}> COVID-19 Event planning application. Made from scratch with ReactJS for CS 6795.</div>
                                </div>
                            </a>

                            <a href={"https://dev.azure.com/elavon-ashburn/VonGo/_git/VonGo-App"} target={"_blank"} style={{"text-decoration": "none"}}>
                                <div className={"project-cell-mobile"}>
                                    <b> VonGo </b>
                                    <i style={{float: "right"}}> Spring 2020 </i>
                                    <div style={{"margin-top": "8px"}}> Cryptocurrency-backed vending machine interface, made with Ethereum and Ionic React for Elavon. </div>
                                </div>
                            </a>

                            <a href={"https://github.com/adityataps/Audiovisual-Localization"} target={"_blank"} style={{"text-decoration": "none"}}>
                                <div className={"project-cell-mobile"}>
                                    <b> Audiovisual Localization </b>
                                    <i style={{float: "right"}}> Fall 2019 </i>
                                    <div style={{"margin-top": "8px"}}> VR data visualization tool of participants' localization of auditory stimuli. Made with C# and Unity for PURA. </div>
                                </div>
                            </a>

                            <a href={"https://github.com/Ermy99/space-trader"} target={"_blank"} style={{"text-decoration": "none"}}>
                                <div className={"project-cell-mobile"}>
                                    <b> Space Traders </b>
                                    <i style={{float: "right"}}> Spring 2019 </i>
                                    <div style={{"margin-top": "8px"}}> Android port of original PalmOS game. Made with Android Studio, Java, and Kotlin for CS 2340. </div>
                                </div>
                            </a>



                        </div>






                    </div>
                </div>



            </MobileView>




        </div>



    );
};