import React from 'react';
import { Counter } from './features/counter/Counter';

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Beranda from './Component/Beranda/Beranda';
import Loginadmin from './Component/Admin/Loginadmin';
import Dashboardadmin from './Component/Admin/Dashboardadmin';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Beranda/>}></Route>
          <Route path='/Loginadmin' element={<Loginadmin/>}></Route>
          <Route path='/dashboardadmin' element={<Dashboardadmin/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
