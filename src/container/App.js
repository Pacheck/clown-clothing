import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

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

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser}/>
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
