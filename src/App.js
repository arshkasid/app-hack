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
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
<Routes>
  <Route path="/" element={<ReactLandinng/>} />
  <Route path="/reactdata" element={<Reactdata/>} />
    
    {/* <ExportExcel excelData={Reactdata} fileName={"Excel Export"} /> */}
    </Routes>
    </>
  );
}

export default App;