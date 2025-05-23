import {useState} from "react";
import "./App.css";
import City from "./assets/city.jpg";
import Cardetails from "./components/Cardetails";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import ShowUserName from "./components/ShowUserName";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
    const cars = [
        {id: 1, brand: "Ford", km: 10000, color: "preto"},
        {id: 2, brand: "Chevrolet", km: 20000, color: "branco"},
        {id: 3, brand: "Volkswagen", km: 30000, color: "azul"},
    ];

    function showMessage() {
        console.log("Evento");
    }

    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    const people = [
        {id: 1, name: "Lucas", age: 25, profession: "Developer"},
        {id: 2, name: "Ana", age: 30, profession: "Designer"},
        {id: 3, name: "Carlos", age: 17, profession: "Manager"},
    ];

    return (
        <>
            <div>
                <img src="/img1.jpg" alt="paisagem" />
            </div>
            <div>
                <img src={City} alt="cidade" />
            </div>
            <ManageData />
            <ListRender />
            <ConditionalRender />
            <ShowUserName name="React" />
            <Cardetails brand="Hyundai" km={42000} color="prata" />
            <Cardetails brand="Mitsubishi" km={40000} color="grafite" />
            <Cardetails brand="Fiat" km={20000} color="preto" />
            {cars.map((car) => (
                <Cardetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
            ))}
            <Container>
                <p>Conteudo</p>
            </Container>
            <ExecuteFunction myFunction={showMessage} />
            <Message msg={message} />
            <ChangeMessageState handleMessage={handleMessage} />
            {people.map((person) => (
                <UserDetails
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    age={person.age}
                    profession={person.profession}
                />
            ))}
        </>
    );
}

export default App;
