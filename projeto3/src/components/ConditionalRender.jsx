import React from "react";

export default function ConditionalRender() {
    const [x] = React.useState(false);

    const [name] = React.useState("Branco");
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x ? <p>Sim</p> : <p>Não</p>}
            <h1>If ternário</h1>
            {name === "Branco" ? (
                <div>
                    <p>É o brancas</p>
                </div>
            ) : (
                <div>
                    <p>Não é o brancas</p>
                </div>
            )}
        </div>
    );
}
