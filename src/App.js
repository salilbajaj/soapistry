import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import {AppProvider} from './context/AppContext';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <AppProvider>
      <div className="App">
        <div className="container">
          <Navbar />        
            <Switch>
              <Route exact path="/" >
                <Home/>
              </Route>
              <Route path="/shop" >
                <Shop/>
              </Route>
              <Route path="/cart" >
                <Cart/>
              </Route>
            </Switch>        
        </div>
      </div>
      </AppProvider>
    </Router>
  );
}

export default App;
