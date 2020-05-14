import React, { Component } from 'react';
import Home from './Home';
import OfferCard from './OfferCard';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
       <div>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/offer-card">Offer Entry Point</Link></li>
         </ul>

         <hr/>

         <Route exact path="/" component={Home}/>
         <Route path="/offer-card" component={OfferCard}/>
       </div>
     </Router>
    );
  }
}

export default App;
