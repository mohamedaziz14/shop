import './App.css'
import Search from './component/Search'
import ProductsList from './component/ProductList'
import React, { useState } from 'react'
import CartList from './component/CartList'
import AddProduct from './component/AddProduct'
import ProductDetails from './component/ProductDetails'

const App = () => {
  const [menuView, setMenuView] = useState(false)
  const [view, setView] = useState('productList')
  const [Id, setId] = useState('')

  const toggleMenu = () => {
    setMenuView(!menuView)
  }

  const switchView = (option) => {
    setView(option)
  }

  return (
    <div className="App">
      <div className="nav">
        <span className="logo" onClick={() => switchView('productList')}>
          STORE
        </span>
        <span className="logo" onClick={() => switchView('addProduct')}>
          AddProduct 
        </span>
        {view === 'productList' && <Search />}
        {view === 'productList' && (
          <span className="items" onClick={toggleMenu}>
            &#9660; CATEGORIES &#9660;
          </span>
        )}
        <span className="items" onClick={() => switchView('cart')}>
          🛒 CART
        </span>
      </div>
      {menuView && (
        <div className="menu">
          <span className="menu-item">All</span>
          <span className="menu-item">Computers</span>
          <span className="menu-item">Phones</span>
          <span className="menu-item">Electronics</span>
        </div>
      )}
      {view === 'productList' && <ProductsList/>}
      {view === 'cart' && <CartList />}
      {view === 'productDetails' && <div><ProductDetails/></div>}
      {view === 'addProduct' && <AddProduct/>}

    </div>
  )
}

export default App
