import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { HashRouter, BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './components/pages/Home';
import Story from './components/pages/Story';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';


function App() {

  return (

    <HashRouter basename='/'>
        <main style={{ overflow: 'hidden'}}>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/story' component={Story} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/service' component={Services} />
            </Switch>
          </AnimatePresence>
        </main>
    </HashRouter>
  );
}

export default App;


