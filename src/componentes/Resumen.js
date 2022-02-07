import React from "react";
import Resultado from "./Resultado";

function Resumen(props) {
   const {marca, year, plan } = props.datos;
     if (!marca || !year || !plan) return null;

    const mostrarResumen = () => {
        return (
        <div className = "resumen">
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Anio: {year}</li>
                <li>Plan: {plan}</li>
            </ul>
        </div>)
    }

     

    return (
        <div>
            {mostrarResumen()}
            <Resultado
            resultado = {props.resultado}
            />
        </div>
    )
}

export default Resumen;