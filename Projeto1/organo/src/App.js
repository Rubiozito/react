import {useState} from "react";
import Banner from "./components/Banner";
import Formulario from "./components/form";

function App() {
    const [members, setMembers] = useState([]);

    const onNewMember = (member) => {
        console.log(member);
        setMembers([...members, member]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario onMemberRegistered={(member) => onNewMember(member)} />
        </div>
    );
}

export default App;
