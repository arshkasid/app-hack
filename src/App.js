import logo from './logo.svg';
import './App.css';

import Reactdata from './compoment/reactdata';
import ExportExcel from './excelexport';
import EventTable from './compoment/reactTable';
import ReactLandinng from './compoment/ReactLanding';
import {Routes, Route} from 'react-router-dom';
import { Navbar ,Nav} from 'react-bootstrap';


function App() {
  return (
    <>
    {/* <nav className="navbar">
  <ul>
    <div><li id="navhead"><div className="navnav"><img className="icon" src="https://upload.wikimedia.org/wikipedia/en/f/ff/Manipal_University_logo.png" />&nbsp;&nbsp;&nbsp;MANIPAL UNIVERSITY JAIPUR</div></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact us</a></li>
      <li id="lis"><a href="/app-hack">Home</a></li>
     
    
      
    </div></ul>
</nav> */}
 

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/app-hack">&nbsp; &nbsp; HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          <Nav.Link class="btn btn-sm btn-outline-secondary" href="https://jaipur.manipal.edu/muj/about-us.html">About</Nav.Link>
            <Nav.Link class="btn btn-sm btn-outline-secondary" href="https://jaipur.manipal.edu/muj/contact-us.html">Contact</Nav.Link>
            <Nav.Link class="btn btn-sm btn-outline-secondary" href="https://mujslcm.jaipur.manipal.edu:122/" parent="_blank">DMS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>





<Routes>
  <Route path="/app-hack" element={<ReactLandinng/>} />
  <Route path="/reactdata" element={<Reactdata/>} />
    
    {/* <ExportExcel excelData={Reactdata} fileName={"Excel Export"} /> */}
    </Routes>
    </>
  );
}

export default App;