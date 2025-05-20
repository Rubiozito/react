import {useState} from "react";
import Banner from "./components/Banner";
import Formulario from "./components/form";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
    const teams = [
        {
            nome: "Diretoria",
            primaryColor: "#e06b69",
            secundaryColor: "#fde7e8",
        },
        {
            nome: "Infra",
            primaryColor: "#ff8a29",
            secundaryColor: "#ffeedf",
        },
        {
            nome: "Back-end",
            primaryColor: "#57c278",
            secundaryColor: "#d9f7e9",
        },
        {
            nome: "Front-end",
            primaryColor: "#82cffa",
            secundaryColor: "#e8f8ff",
        },
        {
            nome: "UX/UI",
            primaryColor: "#db6ebf",
            secundaryColor: "#fae9f5",
        },
        {
            nome: "Business",
            primaryColor: "#ffba05",
            secundaryColor: "#fff5d9",
        },
    ];

    const [members, setMembers] = useState([]);

    const onNewMember = (member) => {
        setMembers([...members, member]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario
                team={teams.map((team) => team.nome)}
                onMemberRegistered={(member) => onNewMember(member)}
            />

            {teams.map((team) => (
                <Team
                    key={team.nome}
                    nome={team.nome}
                    primaryColor={team.primaryColor}
                    secundaryColor={team.secundaryColor}
                    members={members.filter((member) => member.time === team.nome)}
                />
            ))}

            <Footer />
        </div>
    );
}

export default App;
