import React, {Component} from 'react';
import {FaTrash} from 'react-icons/fa'

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.item.image} width={160} height={180}></img>
                <p>{this.props.item.title}</p>
                <b>{this.props.item.price}$</b>
                <FaTrash className='delete-cart' onClick={()=> this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}

export default Order