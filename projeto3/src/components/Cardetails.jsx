import React from "react";

export default function Cardetails({brand, km, color}) {
    return (
        <div>
            <h2>Detahles do carro</h2>
            <ul>
                <li>Marca: {brand} </li>
                <li>KM: {km} </li>
                <li>Cor: {color} </li>
            </ul>
        </div>
    );
}
