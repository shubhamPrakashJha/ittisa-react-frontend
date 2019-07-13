import React from "react";
import rebel from "../../assets/REBELS.png";
import "./home.css";

function Home() {
    return (
        <div id="header">
            <img src={rebel} alt="Logo" />
            <h1>
                <strong>Best Digital Marketing Company</strong>
            </h1>
            <h3>-A Google Partner Agency-</h3>
            <p>
                We are a team of highly motivated, passionate millennials for
                whom digital marketing is a way of life. Ittisa, one of the best
                digital marketing companies in India, believes in building
                world-class digital experiences that easily metamorphose into
                offline experiences and help brands tell stories, build
                communities and transform their business. We aim for absolute
                online success– a goal that impacts every decision we make.
            </p>
        </div>
    );
}

export default Home;
