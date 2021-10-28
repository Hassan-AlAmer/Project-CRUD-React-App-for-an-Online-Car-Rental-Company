import React,{useState} from 'react'

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContext } from './Contexts/MainContext';
import {Container,Row,Col, Image } from 'react-bootstrap'
import NewCar from './Components/NewCar';
import banner from './imgs/banner.png';
import UpdateCar from './Components/UpdateCar';

function App() {
  const [CounCar, setCounCar] = useState(4);
  const [cars, setCars] = useState([
    {           
      id: 1,
      modelName: 'Explorer',
      brandName: 'FORD',
      price: "150,000",
      manufactureYear: '2019',
      urlImg: 'https://file.kelleybluebookimages.com/kbb/base/house/2019/2019-Ford-Explorer-FrontSide_FTEXP1901_640x480.jpg'
  },
  {
      id: 2,
      modelName: 'Camry',
      brandName: 'Toyota',
      price: '96,370',
      manufactureYear: '2020',
      urlImg: 'https://media.ed.edmunds-media.com/toyota/camry/2020/oem/2020_toyota_camry_sedan_se-nightshade-edition_fq_oem_1_1600.jpg'
  },
  { 
      id: 3,
      modelName: 'Azera',
      brandName: 'Hyundai',
      price: "116,600",
      manufactureYear: '2021',
      urlImg: 'https://altarh.com/files/02-2021/ad11722/16139379271723227836_large.jpeg'
  },
  { 
      id: 4,
      modelName: 'Azera',
      brandName: 'Hyundai',
      price: "116,600",
      manufactureYear: '2021',
      urlImg: 'https://altarh.com/files/02-2021/ad11722/16139379271723227836_large.jpeg'
  },
  ])
  return (

      <MainContext.Provider value={{cars, setCars, CounCar, setCounCar}}>
        <Router>
        <div className="App">
          <NavBar />
          <Container fluid style={{padding:"0"}}>
            <Image src={banner} fluid style={{width:"100%"}}/>
          </Container>
          <Container className="mt-5 mb-5">
            <Switch>
              <Route exact path="/" component={Home}/>            
              <Route path="/create" component={NewCar}/>            
              <Route path="/update/:id" component={UpdateCar}/>            
            </Switch>
            </Container>
            <Container fluid className="bg-dark">
              <Row>
                <Col>1 of 1</Col>
              </Row>
            </Container>
        </div>
      </Router>
    </MainContext.Provider>
  );
}

export default App;
