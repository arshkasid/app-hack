import logo from './logo.svg';
import './App.css';

import Reactdata from './compoment/reactdata';
import ExportExcel from './excelexport';
import EventTable from './compoment/reactTable';
import ReactLandinng from './compoment/ReactLanding';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    
<Routes>
  <Route path="/" element={<ReactLandinng/>} />
  <Route path="/reactdata" element={<Reactdata/>} />
    
    {/* <ExportExcel excelData={Reactdata} fileName={"Excel Export"} /> */}
    </Routes>
    </>
  );
}

export default App;