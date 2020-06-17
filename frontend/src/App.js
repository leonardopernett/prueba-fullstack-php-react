import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import ListProduct from './components/ListProduct';
import CreateProduct from './components/CreateProduct';
import Navigation from './components/Navigation';


function App() {
  return (
       <Router>
         <Navigation />
         <div className="container">
           <Switch>
             <Route path="/productos"  exact component={ListProduct} />
             <Route path="/productos/crear"  component={CreateProduct} />
             <Route path="/productos/edit/:id"  component={CreateProduct} />
             <Redirect from="/" to="/productos" />
           </Switch>
         </div>
       </Router>
     
  );
}

export default App;
