import React, { Component } from "react"

export class Item extends Component {
    render() {
        return (
            <div className="item">
                <img src={this.props.item.image} width={160} height={180}></img>
                <b>{this.props.item.category}</b>
                <b>{this.props.item.title}</b>
                <b>{this.props.item.desc}</b>
                <b>{this.props.item.price}$</b>
                <div className="add-to-cart" onClick={()=>this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}

export default Item







