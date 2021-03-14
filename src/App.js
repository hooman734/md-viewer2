import React from "react";
import MDTranslatorCP from "./components/MDTranslatorCP";

const App = function () {


    return (
        <React.Fragment>
            <h5 className="mx-5 my-2 py-2 text-muted">This application meant to simply interpret and then view your <span className="text-info" title="Markdown is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber and Aaron Swartz created Markdown in 2004 as a markup language that is appealing to human readers in its source code form.">markdown</span> input.</h5>
            <MDTranslatorCP/>
        </React.Fragment>
    );
}

export default App;