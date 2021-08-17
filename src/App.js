import React from 'react'
import{ BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/Contact'>
            <Contact />
          </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
