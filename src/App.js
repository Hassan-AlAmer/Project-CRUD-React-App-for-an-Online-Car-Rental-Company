import React,{useState} from 'react'

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContext } from './Contexts/MainContext';

function App() {
  const [cars, setCars] = useState([

  ])
  return (
    <div className="App">
      <MainContext.Provider value={{cars, setCars}}>
        <Router>
        <div className="App">
          <NavBar />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}/>            
            </Switch>
          </div>
        </div>
      </Router>
    </MainContext.Provider>
    </div>
  );
}

export default App;
