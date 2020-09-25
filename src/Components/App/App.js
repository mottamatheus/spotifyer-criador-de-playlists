import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    s<span className="highlight">pot</span>ifyer
                </h1>
                <div className="App">
                    <div className="App-playlist">
                        <SearchBar />
                        <SearchResults />
                        <Playlist />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
