import React from 'react';
import {Route,Routes,Link,BrowserRouter as Router} from "react-router-dom"
// import AddRegistration from './AddRegistration';
import ViewRegistration from './ViewRegistration';
import DeleteRegistration from './DeleteRegistration';
import UpdateRegistration from './UpdateRegistration';
import AddRegister from './AddRegister';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "./ViewRegistration.css";
function App(){
  return(
    <Router>
      <div>
      <nav>
        <ul>
          <li><Link to="/add">Register</Link></li>
          <li><Link to="/view">display</Link></li>
          <li><Link to="/dele">Delete</Link></li>
          <li><Link to="/upd">Update</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/add' element={<AddRegister/>}></Route>
        <Route path='/view' element={<ViewRegistration/>}></Route>
        <Route path='/dele' element={<DeleteRegistration/>}></Route>
        <Route path='/upd' element={<UpdateRegistration/>}></Route>
      </Routes>
      </div>
    </Router>
  )
}
export default App;
