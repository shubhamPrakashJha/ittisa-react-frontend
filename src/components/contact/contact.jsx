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

    async componentDidMount() {
        const messageId = this.props.match.params.id;
        if (messageId === "new") return;

        const { data: message } = await http.get(
            `${config.apiEndpoint}/${messageId}`
        );
        console.log(message);
        if (!message) return this.props.history.replace("/not-found");

        this.setState({ data: this.mapToViewModal(message) });
    }

    mapToViewModal = message => {
        return {
            _id: message._id,
            name: message.name,
            email: message.email,
            query: message.query
        };
    };

    doSubmit = async () => {
        const messageId = this.props.match.params.id;
        console.log(this.state);
        console.log("Submitted");
        const obj = {
            name: this.state.data.name,
            email: this.state.data.email,
            query: this.state.data.query,
            resolved: this.state.data.resolved
        };
        if (messageId === "new") {
            await http.post(config.apiEndpoint, obj);
        } else {
            await http.put(`${config.apiEndpoint}/${messageId}`, obj);
        }

        this.props.history.push("/messages");
    };

    render() {
        const messageId = this.props.match.params.id;
        return (
            <div>
                <h1>Contact Us</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email")}
                    {this.renderTextArea("query", "Message")}
                    {messageId === "new"
                        ? this.renderButton("LETS TALK")
                        : this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default ContactForm;
