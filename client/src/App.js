import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Patients from './components/Patients';
import Products from './components/Products';
import Reviews from './components/Reviews';
import Header from './components/Header';
import CreatePatients from './components/CreatePatients';
import CreateProducts from './components/CreateProducts';
import CreateReviews from './components/CreateReviews';
import PatientData from "./components/PatientData";
import ProductData from "./components/ProductData";
import ReviewsData from "./components/ReviewsData"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/patients/" component={Patients} />
          <Route exact path="/patients/:id" component={PatientData} />
          <Route exact path="/products/" component={Products} />
          <Route exact path="/products/:id" component={ProductData} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/reviews/:id" component={ReviewsData} />
          <Route exact path="/patients/new" component={CreatePatients} />
          <Route exact path="/products/new" component={CreateProducts} />
          <Route exact path="/review/new" component={CreateReviews} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
