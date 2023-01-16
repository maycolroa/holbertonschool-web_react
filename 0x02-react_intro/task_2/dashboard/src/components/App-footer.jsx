import React from "react";
import "../style sheets/App-footer.css"
import { getFullYear, getFooterCopy } from '../utils.js';

function Footer () {
    return (
        <div className="contenedor-footer">
            <p>Copyright 2019 - holberton School {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
    )
}

export default Footer