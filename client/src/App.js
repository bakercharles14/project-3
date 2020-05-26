import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage.js'
import Products from './components/Products.js'
import SingleProduct from './components/SingleProduct.js'
import Cart from './components/Cart.js'
import './App.css';
import { cart } from './CartData.js';
import Blog from './components/Blog.js';
import NewBlog from './components/NewBlog.js';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Router>
          <nav className='top-nav-bar'>
            <Link to='/'>
              <div className='home-icon'>
                <img src="/homebutton.jpg" height="50" width="60" alt="home button"></img>
              </div>
            </Link>
            <Link to='/cart' className='cart-icon'>
              <span className="material-icons">
                local_grocery_store
              </span>
              <span className='items-in-cart'>
                {cart.quantity}
              </span>
            </Link>
          </nav>
          <div className='splash-image'>
            <h1 className='splash-text'>Locally Sourced.</h1>
            <Link to='/'>
              <img className='logo' src='/honey-logo.png' alt='honey logo' height='200' width='240' />
            </Link>
            <h1 className='splash-text'>Made With Love.</h1>
          </div>
          <nav className='center-nav-bar'>
            <Link to='/products' className='nav-links'>
              <div className='products-nav-icon'>
                <span className="material-icons">
                  store_mall_directory
            </span> <h3 className='nav-words'>Products</h3>
              </div>
            </Link>
            <Link to='/contact' className='nav-links'>
              <div className='contact-nav-icon'>
                <span className="material-icons">
                  contacts
            </span> <h3 className='nav-words'>Contact</h3>
              </div>
            </Link>
            <Link to='/blog' className='nav-links'>
              <div className='blog-nav-icon'>
                <span className="material-icons">
                  insert_comment
            </span> <h3 className='nav-words'>Blog</h3>
              </div>
            </Link>
            <Link to='/about' className='nav-links'>
              <div className='about-nav-icon'>
                <span className="material-icons">
                  menu_book
            </span> <h3 className='nav-words'>About</h3>
              </div>
            </Link>
          </nav>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/products" component={Products} />
            <Route exact path='/products/:index' component={SingleProduct} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/newblog' component={NewBlog} />
          </Switch>
        </Router>
      </div>
    )
  }
}