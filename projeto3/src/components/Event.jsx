export default function Event() {
    const handleEvent = (event) => {
        console.log(event);
        console.log("Evento do botão clicado");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando algo</h1>;
        } else {
            return <h1>Renderizando nada</h1>;
        }
    };

    return (
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui agora</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
}
