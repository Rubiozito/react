import React from "react";

export default function ShowUserName(props) {
    return (
        <div>
            <h2>Nome do usuário: {props.name}</h2>
        </div>
    );
}
