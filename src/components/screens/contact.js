import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/contact.css';
import './stylesheets/screens.css';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import 'animate.css'
import flowers from '../images/flowers.jpg'
import name from '../images/name.png'
import Typist from "react-typist";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {Slider} from "@material-ui/core";
import Sidebar from '../sidebar'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }


    render() {

        const classes = makeStyles((theme) => ({
            root: {
                flexGrow: 1,
            },
            paper: {
                padding: theme.spacing(2),
                textAlign: 'center',
                color: theme.palette.text.secondary,
            },
        }));

        return (
            <div className={"page"}>

                <BrowserView>
                    <img src={flowers}
                         className={"background-image"}
                         alt={"flowers"}
                         style={{zIndex: -5}}
                    />

                    <div className={"nav-bar"}>

                        <img src={name} className={"nav-name"} alt={"aditya tapshalkar"} style={{float: "left"}}/>


                        <div className={"nav-links-container"}>
                            <Link to={"/"} className={"nav-link"}> home </Link>
                            <b style={{'user-select': 'none'}}>//</b>
                            <Link to={"/about"} className={"nav-link"}> about </Link>
                            <b style={{'user-select': 'none'}}>//</b>
                            <Link to={"/projects"} className={"nav-link"}> projects </Link>
                            <b style={{'user-select': 'none'}}>//</b>
                            <Link to={"/resume"} className={"nav-link"}> résumé </Link>
                            <b style={{'user-select': 'none'}}>//</b>
                            <b style={{'text-shadow': '2px 0 crimson'}}> contact </b>
                        </div>


                    </div>

                    <div className={"content-container"}>

                        <Typist cursor={{blink: true, element: '|'}} className={"typist-contact"}>
                            <Typist.Delay ms={500}/>
                            Console.WriteLine("
                            <b style={{color: 'crimson'}}>
                                let's keep in touch.
                            </b>
                            ");
                        </Typist>

                        <form id={"contact-form"} onSubmit={this.handleSubmit.bind(this)} method={"POST"}>
                            <div className={classes.root} style={{width: "80%", position: "center", margin: "5% auto"}}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} elevation={0}>
                                            <div className={"form-group"}>
                                                <label htmlFor={"name"} className={"form-label"}> Name </label>
                                                <br/>
                                                <input type={"text"} placeholder={"aditya tapshalkar"} style={{width: "100%"}} className={"form-control"} value={this.state.name}
                                                       onChange={this.onNameChange.bind(this)}/>
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Paper className={classes.paper} elevation={0}>
                                            <div className={"form-group"}>
                                                <label htmlFor={"exampleInputEmail1"} className={"form-label"}> Email </label>
                                                <br/>
                                                <input type={"email"} placeholder={"aditya.taps@gatech.edu"} style={{width: "100%"}} className={"form-control"} aria-describedby={"emailHelp"} value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} elevation={0}>
                                            <div className={"form-group"}>
                                                <label htmlFor={"subject"} className={"form-label"}> Subject </label>
                                                <br/>
                                                <input type={"text"} style={{width: "100%"}} className={"form-control"} value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Paper className={classes.paper} elevation={0}>
                                            <div className={"form-group"}>
                                                <label htmlFor={"message"} className={"form-label"}> Message </label>
                                                <br/>
                                                <textarea className={"form-control"} style={{width: "100%"}} rows={"5"} value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                            </div>
                                        </Paper>
                                    </Grid>
                                    {/*<Grid item xs={3}>*/}
                                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                    {/*</Grid>*/}
                                    {/*<Grid item xs={3}>*/}
                                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                    {/*</Grid>*/}
                                    {/*<Grid item xs={3}>*/}
                                    {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                    {/*</Grid>*/}
                                </Grid>
                                <button type={"submit"} className={"btn btn-primary"} style={{"margin-top": "10px"}}> Submit </button>
                            </div>
                        </form>


                    </div>


                    {/*<div className={"aboutContainer animate__animated animate__fadeIn"} >*/}
                    {/*    test*/}
                    {/*</div>*/}


                </BrowserView>

                <MobileView>

                    <Sidebar />

                    <div style={{position: "absolute"}}>
                        <div className={"mobile-container"}>

                            <Typist cursor={{blink: true, element: '|'}} className={"typist-contact-mobile"}>
                                {/*<Typist.Delay ms={500}/>*/}
                                {/*Console.WriteLine("*/}
                                <b style={{color: 'crimson'}}>
                                    let's keep in touch.
                                </b>
                                {/*");*/}
                            </Typist>

                            <form id={"contact-form"} onSubmit={this.handleSubmit.bind(this)} method={"POST"} style={{"margin-top": "50px"}}>
                                <div className={classes.root} style={{width: "80%", position: "center", margin: "5% auto"}}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <div className={"form-group"}>
                                                    <label htmlFor={"name"} className={"form-label"}> Name </label>
                                                    <br/>
                                                    <input type={"text"} placeholder={"aditya tapshalkar"} style={{width: "100%"}} className={"form-control"} value={this.state.name}
                                                           onChange={this.onNameChange.bind(this)}/>
                                                </div>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <div className={"form-group"}>
                                                    <label htmlFor={"exampleInputEmail1"} className={"form-label"}> Email </label>
                                                    <br/>
                                                    <input type={"email"} placeholder={"aditya.taps@gatech.edu"} style={{width: "100%"}} className={"form-control"} aria-describedby={"emailHelp"} value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                                </div>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <div className={"form-group"}>
                                                    <label htmlFor={"subject"} className={"form-label"}> Subject </label>
                                                    <br/>
                                                    <input type={"text"} style={{width: "100%"}} className={"form-control"} value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                                </div>
                                            </Paper>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Paper className={classes.paper} elevation={0}>
                                                <div className={"form-group"}>
                                                    <label htmlFor={"message"} className={"form-label"}> Message </label>
                                                    <br/>
                                                    <textarea className={"form-control"} style={{width: "100%"}} rows={"5"} value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                                </div>
                                            </Paper>
                                        </Grid>
                                        {/*<Grid item xs={3}>*/}
                                        {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item xs={3}>*/}
                                        {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                        {/*</Grid>*/}
                                        {/*<Grid item xs={3}>*/}
                                        {/*    <Paper className={classes.paper}>xs=3</Paper>*/}
                                        {/*</Grid>*/}
                                    </Grid>
                                    <button type={"submit"} className={"btn btn-primary"} style={{"margin-top": "10px"}}> Submit </button>
                                </div>
                            </form>


                        </div>


                    </div>

                </MobileView>


            </div>


        );
    };

    onNameChange(event) {
        this.setState({name: event.target.value});
    }

    onEmailChange(event) {
        this.setState({email: event.target.value});
    }

    onSubjectChange(event) {
        this.setState({subject: event.target.value});
    }

    onMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '', subject: '', message: ''})
    }

}

export default Contact;