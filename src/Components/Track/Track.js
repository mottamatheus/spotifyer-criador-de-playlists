import React from "react";
import "./Track.css";

export class Track extends React.Component {
    renderAction() {
        if (isRemoval) {
            return <button className="Track-action">-</button>;
        } else {
            return <button className="Track-action">+</button>;
        }
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>Boss Bitch</h3>
                    <p>Doja Cat | Joice</p>
                </div>
                <button className="Track-action"></button>
            </div>
        );
    }
}
