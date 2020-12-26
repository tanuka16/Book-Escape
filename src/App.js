import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      // React Fragment tag allows to imitate the html tag, it will work as a parent container, which will be returned
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={ProductList}></Route>
          <Route path='/details' component={Details}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
         {/*outside Switch because we don't need a route for the modal, it just a popup; now modal component is being rendered*/}
        <Modal />

      </React.Fragment>
    );
  }
}

export default App;
