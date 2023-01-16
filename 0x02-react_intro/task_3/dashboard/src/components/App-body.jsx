import React from "react";
import "../style sheets/App-body.css"

function Body () {
    return (
        <div className="contenedor-body">
            <p className="parrafo-body-holberton">Login to access the full dashboard</p>
            <form className="formulario">
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" />
                <label htmlFor="email">Password: </label>
                <input type="password" id="password" name="password" />
                <button>OK</button>
            </form>
        </div>
    )
}

export default Body