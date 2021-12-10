import flight from './flight.jpg';
import './App.css';
import Home from './Home/Home';
import LoginForm from './Login/LoginForm';
import { Route, Switch,Link } from "react-router-dom";
import Logout from './Logout/Logout';
import AdminMenu from './Admin/AdminMenu';
import UserMenu from './User/UserMenu';
import AddAirline from './Admin/ManageAirlines/AddAirline';
import LoginHome from './Home/LoginHome';
function App() {
  return (
    <div className="App">
      <body 
       img src={flight} className="App-logo" alt="logo" >
       {/* <Home></Home> */}
       <div className="App-header">
        FLIGHT TICKET BOOKING
       </div>
       <div align='center' className='App-div'>
       <Switch>
          <Route exact path="/" component={LoginHome} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route  exact path="/adminMenu" component={AdminMenu} />
          <Route  exact path="/userMenu" component={UserMenu} />
          <Route  exact path="/addAirline" component={AddAirline} />
        </Switch>
        </div> 
        {/* <Logout></Logout> */}
        {/* <Home></Home>  */}
       {/* <AdminMenu></AdminMenu>
       <UserMenu></UserMenu>
        <LoginForm></LoginForm> */}
      </body>
    </div>
  );
}

export default App;
