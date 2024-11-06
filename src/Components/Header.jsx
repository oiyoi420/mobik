import React, {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Order from './Order'

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
    <div className="logo">Shop
    <ul className="nav">
        <li><a href = 'https://kirillisuus.streamlit.app/'>Streamlit</a></li>
        <li><a href = 'https://oiyoi420.github.io/Website/'> About us</a></li>
        <li><a href = 'https://www.arizona.edu/'>UofA</a></li>
        <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className= {`shopcart ${cartOpen && 'active'}`} /></li>
    </ul>
    {cartOpen && (
        <div className='basket'>
          {props.orders.length >0 ? showOrders(props) : showNothing()}
        </div>
    )}
      </div>
      <div className="presentation"></div>
    </header>
  )


}

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key = {el.id} item = {el} onDelete = {props.onDelete}/>
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div>
      <h2>Nothing is here</h2>
    </div>
  )
}
