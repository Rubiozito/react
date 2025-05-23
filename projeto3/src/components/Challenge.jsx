export default function Challenge() {
    const x = 10;
    const y = 20;
    const sum = () => {
        console.log(x + y);
    };
    return (
        <div>
            <h2>{x}</h2>
            <h2>{y}</h2>
            <button onClick={sum}>Somar</button>
        </div>
    );
}
