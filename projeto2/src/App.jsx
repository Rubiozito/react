import "./App.css";
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import {useEffect, useState} from "react";

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div className="container">
            <Sidebar />;
            <div>
                <SearchBar />;
                <Filter />;
                <ul className="list-cards">
                    {data ? (
                        data.map((item, index) => (
                            <li key={index}>
                                <Card
                                    id={item.id}
                                    image={item.imagem_capa}
                                    title={item.titulo}
                                    description={item.resumo}
                                    code_lines={item.linhas_de_codigo}
                                    nshares={item.compartilhamentos}
                                    coments={item.comentarios}
                                    user={item.usuario}
                                />
                            </li>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;
