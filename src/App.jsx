import React from 'react';
import logo from './react.png';
import './App.css';
import NavBar from './Components/NavBar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
//Page Not Found Component
import PageNotFound from './Components/PageNotFound';
//Props in React
import Emp from './Components/Props';
//Map function with array
import Fetch_empdetails from './Components/Map';
//Hooks
import UserDetails from './Components/Hook';
//LifeCycle
import LifeCycle from './Components/LifeCycle';
//Spread Syntax
import SpreadSyntax from './Components/SpreadSyntax';
//Conditional Rendering -> Toggle 
import Toggle from './Components/Toggle';
//Rooks
import Rooks from './Components/Rooks';
//Fetch API
import FetchAPI from './Components/FetchAPI';
//Form Validator
import FormValidator from './Components/FormValidation';
//React HookForm
import HookForm from './Components/ReactHookForm';
//Axios Demo
import Footer from './Components/Axios';
//Axios with async and await
import AxiosAwaitAsync from './Components/AxiosAwaitAsync';
import GetCoreAPI from './Components/AxiosCoreAPI';
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <UserDetails/>
      {/* Welcome to Online Training : <Emp empname="John"></Emp> */}
     <Routes>
      <Route path="" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="map" element={<Fetch_empdetails/>}></Route>
      <Route path="lifecycle" element={<LifeCycle/>}></Route>
      <Route path="spreadsyntax" element={<SpreadSyntax/>}></Route>
      <Route path="toggle" element={<Toggle/>}></Route>
      <Route path="rooks" element={<Rooks/>}></Route>
      <Route path="fetch" element={<FetchAPI/>}></Route>
      <Route path="form" element={<FormValidator/>}></Route>
      <Route path="hookform" element={<HookForm/>}></Route>
      <Route path="getapi" element={<GetCoreAPI/>}></Route>
      <Route path="props" element={<Emp empname="John" empid="100" empdesignation="Admin"></Emp>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
     {/* <AxiosAwaitAsync/> */}
     <footer>
      <nav className='navbar fixed-bottom navbar-light bg-light' style={{marginTop:100}}>
        <Footer/>
      </nav>
     </footer>
    </div>
  );
}

export default App;
