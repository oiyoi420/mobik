import React from 'react'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'  
import Categories from './Components/Categories'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [
        {
          id: 1,
          title: 'ecco',
          image: './img/sneak.jpg',
          desc: '-------',
          category: 'sneakers',
          price: '1'
        },

        {
          id: 2,
          title: 'abibas',
          image: './img/abib1.jpg',
          desc: '-------',
          category: 'sneakers',
          price: '420'
        },

        {
          id: 3,
          title: 'abibas',
          image: './img/sapogi.jpg',
          desc: '-------',
          category: 'sapogi',
          price: '666'
        },

        {
          id: 4,
          title: 'adidas',
          image: './img/sapogi2.jpg',
          desc: '-------',
          category: 'sapogi',
          price: '0'
        },

        {
          id: 5,
          title: 'valenki',
          image: './img/valenki.jpg',
          desc: '-------',
          category: 'valenki',
          price: '1337'
        },

        {
          id: 6,
          title: 'valenki',
          image: './img/val2.jpg',
          desc: '-------',
          category: 'valenki',
          price: '420'
        },

        {
          id: 7,
          title: 'govnodavy',
          image: './img/govn.jpg',
          desc: '-------',
          category: 'govnodavy',
          price: '999'
        },

        {
          id: 8,
          title: 'tapki',
          image: './img/tapy.jpg',
          desc: '-------',
          category: 'tapki',
          price: '1'
        },

        {
          id: 9,
          title: 'govnodavy',
          image: './img/govn2.jpg',
          desc: '-------',
          category: 'govnodavy',
          price: '1'
        },

        {
          id: 10,
          title: 'leopardiki',
          image: './img/leo.jpg',
          desc: '-------',
          category: 'sneakers',
          price: '777'
        },

        {
          id: 11,
          title: 'tapki',
          image: './img/tapy.jpg',
          desc: '-------',
          category: 'tapki',
          price: '1'
        },
        {
          id: 12,
          title: 'valiki',
          image: './img/val3.jpg',
          desc: '-------',
          category: 'valenki',
          price: '1'
        },
      ]

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(props) {
    return (
      <div className="wrapper">
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
      <Categories chooseCategory = {this.chooseCategory}/>
      <Items items={this.state.currentItems} onAdd = {this.addToOrder}/>

      <Footer />
      </div>
    )
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }

  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    if (!arrayId) {
    this.setState({orders: [...this.state.orders, item]})
    }
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({currentItems: this.state.items.filter(el => el.category === category)})
  }

  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
  
}
  


export default App
