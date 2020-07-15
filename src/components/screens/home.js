import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/home.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import name from '../images/name.png';
import bubblesFiltered from '../videos/bubblesFiltered.mov'
import 'animate.css';



export const home = () => {
    return(
        <div className={"page"} style={{height: '100%', overflow: 'hidden'}}>

            {isBrowser &&
            <video className={"backgroundVideo animate__animated animate__fadeIn animate__delay-5s"}
                   src={bubblesFiltered}
                   autoPlay={"true"}
                   loop={"true"}
                   muted={"true"}
                   style={{position: 'absolute', zIndex: '-5', '--animate-duration': '5s'}} />
            }

            <p>
                <BrowserView>
                    <img src={name} alt={"aditya tapshalkar"} className={"homeName animate__animated animate__fadeIn"} style={{'--animate-duration': '1s'}} />
                    <div id={"browser-links"}>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.3s'}} to={"/about"}>
                            about
                        </Link>
                        <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.45s'}}>
                            //
                        </b>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.6s'}} to={"/blog"}>
                            blog
                        </Link>
                        <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.75s'}}>
                            //
                        </b>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.9s'}} to={"/projects"}>
                            projects
                        </Link>
                        <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.05s'}}>
                            //
                        </b>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.2s'}} to={"/resume"}>
                            résumé
                        </Link>
                        <b className={"animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.35s'}}>
                            //
                        </b>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={"/contact"}>
                            contact
                        </Link>
                    </div>
                </BrowserView>

                <MobileView>
                    <img src={name} alt={"aditya tapshalkar"} className={"homeName animate__animated animate__fadeIn"} style={{'--animate-duration': '1s'}} />
                    <div id={"mobile-links"}>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.3s'}} to={"/about"}>
                            about
                        </Link><br/><br/>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.6s'}} to={"/blog"}>
                            blog
                        </Link><br/><br/>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '1.9s'}} to={"/projects"}>
                            projects
                        </Link><br/><br/>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.2s'}} to={"/resume"}>
                            résumé
                        </Link><br/><br/>
                        <Link className={"app-link animate__animated animate__fadeIn animate__delay-1s"} style={{'--animate-delay': '2.5s'}} to={"/contact"}>
                            contact
                        </Link><br/><br/>
                    </div>
                </MobileView>

                <div className={"icons-container animate__animated animate__fadeIn animate__delay-4s"}>

                    <a href="https://www.facebook.com/adits707" rel="noopener noreferrer" target="_blank">
                        <icon span className="iconify" data-icon="entypo-social:facebook-with-circle"
                              data-inline="false"/>
                    </a>
                    <a href="https://www.linkedin.com/in/adityatapshalkar/" rel="noopener noreferrer" target="_blank">
                        <icon span className="iconify" data-icon="entypo-social:linkedin-with-circle"
                              data-inline="false"/>
                    </a>
                    <a href="https://github.com/adityataps" rel="noopener noreferrer" target="_blank">
                        <icon span className="iconify" data-icon="entypo-social:github-with-circle"
                              data-inline="false"/>
                    </a>
                </div>
            </p>
        </div>
    );
};