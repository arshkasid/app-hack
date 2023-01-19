import logo from './logo.svg';
import './App.css';

import Reactdata from './compoment/reactdata';
import ExportExcel from './excelexport';
import EventTable from './compoment/reactTable';

function App() {
  return (
    <div className="App">

    <Reactdata />
    <ExportExcel excelData={Reactdata} fileName={"Excel Export"} />
    </div>
  );
}

export default App;