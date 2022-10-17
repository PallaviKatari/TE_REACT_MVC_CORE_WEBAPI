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
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
      <UserDetails/>
      {/* Welcome to Online Training : <Emp empname="John"></Emp> */}
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="map" element={<Fetch_empdetails/>}></Route>
      <Route path="props" element={<Emp empname="John" empid="100" empdesignation="Admin"></Emp>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
