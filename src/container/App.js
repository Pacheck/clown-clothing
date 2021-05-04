import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils';

import './App.css';

// import HatPage from '../pages/HatPage';
import SignPage from '../pages/SignPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import Header from '../components/Header';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/signin" component={SignPage}/>
          {/* <Route path="/shop/hats" component={HatPage}/> */}
        </Switch>
      </>
    );
  }
  
}

export default App;
