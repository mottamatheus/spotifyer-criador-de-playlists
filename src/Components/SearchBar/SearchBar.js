import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Digite uma música, artista ou álbum" />
                <button className="SearchButton">PESQUISAR</button>
            </div>
        );
    }
}
