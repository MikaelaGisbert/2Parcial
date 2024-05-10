import React from "react";
import TextoEjercicio from "./TextoEjercicio";
import BotonPlay from "./BotonPlay";
import './Card.css'

function Card ()
{
    return(
        <div className="ContenedorPrincipal">
            <div className="ContImagen">
                <img src="19.jpg" alt="Imagen del Ejercicio" />
            </div>
            <BotonPlay/>
            <TextoEjercicio/>
        </div>
    )
}
export default Card;