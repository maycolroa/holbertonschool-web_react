import React from "react";
import "../style sheets/App-footer.css"

function Footer () {
    return (
        <div className="contenedor-footer">
            <p className="parrafo-footer-holberton">Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
        </div>
    )
}

export default Footer