import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
// import HatPage from '../pages/HatPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
      {/* <Route path="/shop/hats" component={HatPage}/> */}
    </Switch>
  );
}

export default App;
