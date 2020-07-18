import React from 'react';
import './App.css';
import { Link, BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { home } from './components/screens/home'
import { about } from './components/screens/about'
import { blog } from './components/screens/blog'
import { projects } from './components/screens/projects'
import { resume } from './components/screens/resume'
import { contact } from './components/screens/contact'
import { notFound } from "./components/screens/notFound";
import { test } from './components/screens/test'


function App() {
  return (
    <div>
      <BrowserRouter>
          <Route render={({location}) => (
              <TransitionGroup>
                  <CSSTransition key={location.key}
                                 classNames={"fade"}
                                 timeout={500}
                  >
                      <Switch location={location}>
                          <Route path={"/"} exact component={home} />
                          <Route path={"/about"} exact component={about} />
                          <Route path={"/blog"} exact component={blog} />
                          <Route path={"/projects"} exact component={projects} />
                          <Route path={"/resume"} exact component={resume} />
                          <Route path={"/contact"} exact component={contact} />
                          <Route path={"/test"} exact component={test} />
                          <Route path={"/"} component={notFound} />
                      </Switch>
                  </CSSTransition>
              </TransitionGroup>
          )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
