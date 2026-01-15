import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import MainDashboard from './components/dashboard/MainDashboard';
import CenterDetails from './components/dashboard/CenterDetails';
import WCDPDashboard from './components/dashboard/WCDPDashboard';
import CDPODetails from './components/master data/CDPODetails';
import SESDashboard from './components/dashboard/SESDashboard';
import District from './components/master data/District';
import Taluka from './components/master data/Taluka';
import Vendor from './components/master data/Vendor';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/main-dashboard" element={<MainDashboard />} />
          <Route path="/center-details" element={<CenterDetails />} />
          <Route path="/wcdp-dashboard" element={<WCDPDashboard />} />
          <Route path="/cdpo-details" element={<CDPODetails />} />
          <Route path="/ses-dashboard" element={<SESDashboard />} />
          <Route path="/district" element={<District />} />
          <Route path="/taluka" element={<Taluka />} />
          <Route path="/vendor" element={<Vendor />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
