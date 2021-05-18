import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/actions/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/selectors/user';


import './App.css';

import SignPage from '../pages/SignPage';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CheckoutPage from '../pages/CheckoutPage';
import Header from '../components/Header';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }else{
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignPage />)} />
        </Switch>
      </>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
