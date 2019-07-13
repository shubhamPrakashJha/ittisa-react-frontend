import React from "react";
import Joi from "joi-browser";
import http from "../../services/httpservice";
import config from "../../config.json";
import Form from "../common/form";

class ContactForm extends Form {
    state = {
        data: { name: "", email: "", query: "", resolved: false },
        errors: {}
    };

    schema = {
        username: Joi.string()
            .required()
            .label("name"),
        email: Joi.string()
            .required()
            .label("email"),
        message: Joi.string()
            .required()
            .label("message")
    };

    doSubmit = async () => {
        // Call the server
        console.log(this.state);
        console.log("Submitted");
        const obj = {
            name: this.state.data.name,
            email: this.state.data.email,
            query: this.state.data.message,
            resolved: this.state.data.resolved
        };
        await http.post(config.apiEndpoint, obj);

        this.props.history.push("/messages");
        // const posts = [post, ...this.state.posts];
        // this.setState({ posts });
    };

    render() {
        return (
            <div>
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "name")}
                    {this.renderInput("email", "email")}
                    {this.renderTextArea("message", "message")}
                    {this.renderButton("LETS TALK")}
                </form>
            </div>
        );
    }
}

export default ContactForm;
