import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
    render() {
        return (
            <main>
                <h3>Items</h3>
                {this.props.items.map(el => (
                    <Item key = {el.id} item = {el} onAdd = {this.props.onAdd} />
                    ))}
            </main>
        )
    }
}

export default Items