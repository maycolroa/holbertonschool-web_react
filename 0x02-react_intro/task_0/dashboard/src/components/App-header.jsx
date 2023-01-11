import React from "react";
import "../style sheets/App-header.css";

function Head () {
    return (
        <div className="contenedor-head">
            <img className="imagen-holberton" src={require("../img/holberton-logo.jpg")} alt="logo holberton" />
            <div className="contenedor-texto">
                <p className="parrafo-holberton">School dashboard</p>
            </div>
        </div>
    )
}

export default Head;