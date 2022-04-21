import React, { useEffect } from "react";
import {Link,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormPage from "./FormPage";
import AdminPage from "./AdminPage";
import Login from "./Login";
import {useDispatch, useSelector} from 'react-redux'
import PrivateRoute from "./helpers/PrivateRoute";
import { loggedOut } from "./action/isLoginAction";

function App() {
  const isLogin=useSelector((state)=>{
    return state.isLogin
  })
  const dispatch=useDispatch()
 const handleOut=()=>{
   localStorage.removeItem('tokens')
   dispatch(loggedOut())
   
 } 
  return (
  <div>
    
    <Link to='/formPage'><button className="btn btn-info">User Form</button></Link>
    {
                     isLogin?  <Link to='/login'><button  className="btn btn-info" style={{display:'inline-block'}} onClick={handleOut}>LogOut</button></Link> :      <Link to='/login'><button  className="btn btn-info" style={{display:'inline-block'}}>LogIn</button></Link>
    }
      <Route path='/formPage' exact={true} component={FormPage}/>
      <Route path='/login' exact={true} component={Login}/>
      <PrivateRoute path='/adminPage' exact={true} component={AdminPage}/>
  </div>
  );
}

export default App;
