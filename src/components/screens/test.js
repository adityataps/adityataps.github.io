import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/test.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import name from '../images/name.png'
import bubblesFiltered from '../videos/bubblesFiltered.mov'
import Typist from 'react-typist';




export const test = () => {
    return(
        <div className={"page"}>

            {/*<Typist>*/}
                <Typist cursor={{hideWhenDoneDelay: 3000, blink: true, element: '|'}}>
                    hello world
                </Typist>
            {/*</Typist>*/}


        </div>



    );
};