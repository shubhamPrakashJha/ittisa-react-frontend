import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "../navBar/navBar";
import Home from "../home/home";
import Contact from "../contact/contact";
import NotFound from "../notFound/notFound";
import "./container.css";
import Messages from "./../messages/messages";

class Container extends Component {
    render() {
        return (
            <div>
                <div className="page" />
                <NavBar />
                <div className="container">
                    <Switch>
                        <Route path="/messages" component={Messages} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/home" component={Home} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/home" />
                        <Redirect to="/not-found" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Container;
