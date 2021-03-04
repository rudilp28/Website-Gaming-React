import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import First from './components/First';
import Home from './components/pages/Home';
import Story from './components/pages/Story';
import Services from './components/pages/Services';
import Gallery from './components/pages/Gallery';
import SignUp from './components/pages/SignUp';


function App() {

  return (

    <>
      <Router>
        <Navbar />
        <First />
        <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path='/home' exact component={Home} />
              <Route path='/story' component={Story} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/service' component={Services} />
            </Switch>
          </AnimatePresence>
        <main style={{ overflow: 'hidden'}}>
         
        </main>
      </Router>
    </>
  );
}

export default App;


