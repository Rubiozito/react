import {useState} from "react";
import "./styles.css";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <input
            type="search"
            placeholder="Pesquisar"
            className="search-bar"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
        />
    );
}
