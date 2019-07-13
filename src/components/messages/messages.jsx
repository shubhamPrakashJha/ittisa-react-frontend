import React, { Component } from "react";
import http from "../../services/httpservice";
import config from "../../config.json";
import "./message.css";

class Messages extends Component {
    state = {
        messages: []
    };

    async componentDidMount() {
        const { data: messages } = await http.get(config.apiEndpoint);
        this.setState({ messages });
    }

    handleUpdate = async message => {
        message.resolved = true;
        await http.put(config.apiEndpoint + "/" + message._id, message);

        const messages = [...this.state.messages];
        const index = messages.indexOf(message);
        messages[index] = { ...message };
        this.setState({ messages });
    };

    handleDelete = async message => {
        const originalMessages = this.state.messages;

        const messages = this.state.messages.filter(p => p._id !== message._id);
        this.setState({ messages });

        try {
            await http.delete(config.apiEndpoint + "/" + message._id);
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("This post has already been deleted.");
            this.setState({ messages: originalMessages });
        }
    };

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Query</th>
                        <th scope="col">Status</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.state.messages.map(message => (
                        <tr key={message._id}>
                            <td>{message.name}</td>
                            <td>{message.email}</td>
                            <td>{message.query}</td>
                            <td>{message.resolved ? "Resolved" : "Pending"}</td>
                            <td>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => this.handleUpdate(message)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => this.handleDelete(message)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default Messages;
