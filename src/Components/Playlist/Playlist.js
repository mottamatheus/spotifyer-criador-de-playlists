import React from "react";
import "./Playlist.css";

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"Nova Playlist"} />
                <button className="Playlist-save">Adicione ao seu Spotify!</button>
            </div>
        );
    }
}
