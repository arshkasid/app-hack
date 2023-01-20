import logo from './logo.svg';
import './App.css';

import Reactdata from './compoment/reactdata';
import ExportExcel from './excelexport';
import EventTable from './compoment/reactTable';
import ReactLandinng from './compoment/ReactLanding';
import {Routes, Route} from 'react-router-dom';
import { Navbar ,Nav,NavDropdown} from 'react-bootstrap';


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
          <a className="navbar-brand" href="/app-hack">&nbsp; &nbsp;
      <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/Manipal_University_logo.png" alt="Bootstrap" width={30} height={24} />
    </a>
        <Navbar.Brand href="/app-hack"> HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
        


          <Nav.Link class="btn btn-sm btn-outline-secondary" href="https://jaipur.manipal.edu/muj/about-us.html" target="_blank">About</Nav.Link>
            <Nav.Link class="btn btn-sm btn-outline-secondary" href="https://mujslcm.jaipur.manipal.edu:122/" target="_blank">DMS</Nav.Link>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contact Us
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="mailto:academic@jaipur.manipal.edu">Academics</a></li>
            <li><a class="dropdown-item" href="mailto:admissions@jaipur.manipal.edu">Admissions</a></li>
            <li><a class="dropdown-item" href="mailto: registrar.office@jaipur.manipal.edu">Registrar Office</a></li>
          </ul>
        </li>

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