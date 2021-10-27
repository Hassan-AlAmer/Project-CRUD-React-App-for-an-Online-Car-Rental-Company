import React,{useState} from 'react'

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContext } from './Contexts/MainContext';
import {Container } from 'react-bootstrap'

function App() {
  const [cars, setCars] = useState([

  ])
  return (

      <MainContext.Provider value={{cars, setCars}}>
        <Router>
        <div className="App">
          <NavBar />
          <Container>
            <Switch>
              <Route exact path="/" component={Home}/>            
            </Switch>
            </Container>
        </div>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
