import React, { useState } from 'react';
import { Redirect ,useHistory,Link} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const LoginHome = () => {
  return (
    <div className="App-link">
    <Link to="/login" >Login</Link>
    </div>
  );
};

export default LoginHome;