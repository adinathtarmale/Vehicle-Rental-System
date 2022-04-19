// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Testing from './components/userPages/Testing';
import TestPage from './components/TestPage';
import HomePage from './components/HomePage';

import UserLoginComponent from './components/userPages/UserLoginComponent';
import OwnerLogin from './components/ownerPages/OwnerLogin';
import UserBookRequest from './components/userPages/UserBookRequest';
import RazorPay from './components/userPages/RazorPay';
import AdminLogin from './components/adminPages/AdminLogin';
import ListVehicleRequest from './components/adminPages/ListVehicleRequest';
import AdminDashboard from './components/adminPages/AdminDashboard';
import ListAllUsers from './components/adminPages/ListAllUsers';
import UserRegister from './components/userPages/UserRegister';
import OwnerRegister from './components/ownerPages/OwnerRegister';
import OwnerRequest from './components/ownerPages/OwnerRequest';
import UserBook from './components/adminPages/UserBook';
import OwnerForgetPassword from './components/ownerPages/OwnerForgetPassword';
import ListAllOwners from './components/adminPages/ListAllOwners';
import OwnersVehiclesList from './components/adminPages/OwnersVehiclesList';
import UserForgetPasswordPage from './components/userPages/UserForgetPasswordPage';
import UserBookVehiclesList from './components/userPages/UserBookVehiclesList';

// import UserGetAllVehicles from './components/userPages/UserGetAllVehicles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
      {/* <Route path='/Testing' element={<Testing />} /> */}
        <Route path='/test' element={<TestPage />} />
        <Route path='/' element={<HomePage />} />

        {/* User operations */}
        <Route path='/UserRegister' element={<UserRegister />} />
        <Route path='/UserLoginComponent' element={<UserLoginComponent />} />
        <Route path='/UserBookRequest' element={<UserBookRequest />} />
        <Route path='/UserForgetPasswordPage' element={<UserForgetPasswordPage />} />
        <Route path='/UserBookVehiclesList' element={<UserBookVehiclesList />} />
        <Route path='/payment_gateway' element={<RazorPay />} />

       
       {/* Owner operations */}
        <Route path='/OwnerLogin' element={<OwnerLogin />} />
        <Route path='/OwnerRegister' element={<OwnerRegister />} />
        <Route path='/OwnerRequest' element={<OwnerRequest />} />
        <Route path='/OwnerForgetPassword' element={<OwnerForgetPassword />} />
        
        {/* Admin operations*/}
        <Route path='/AdminLogin' element={<AdminLogin />} />
        <Route path='/ListVehicleRequest' element={<ListVehicleRequest />} />
        <Route path='/AdminDashboard' element={<AdminDashboard />} />
        <Route path='/ListAllUsers' element={<ListAllUsers />} />
        <Route path='/ListAllOwners' element={<ListAllOwners />} />
        <Route path='/OwnersVehiclesList/:ownerId' element={<OwnersVehiclesList />} />
        <Route path='/UserBook' element={<UserBook />} />

        

        {/* <Route path='/UserGetAllVehicles' element={<UserGetAllVehicles />} /> CLASS COMPONENT*/}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
