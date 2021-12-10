import React, { useState } from 'react';
import { Route, Switch } from "react-router";
import { Redirect ,useHistory} from 'react-router-dom'
import './AdminMenu.css';
import Home from '../Home/Home';

const AdminMenu = () => {

  const submitHandler = (event) => {
//     event.preventDefault();

//     let expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };

//     console.log(expenseData);
//    setEnteredTitle('');
//    setEnteredAmount('');
//    setEnteredDate('');

//    expenseData=null;
//    console.log(expenseData);
  };
  let history = useHistory();
  const clickedManageAirlines = () => {
    console.log('clicked Manage Airlines');
    history.push("/addAirline");
    
  }

  return (
    <div>
    <Home></Home>
          <div align='center'>
        <button type='submit' className='button_adminMenu'>Manage Schedules</button>
      <button type='submit' className='button_adminMenu'>Manage Discounts</button>
    <button type='submit' className='button_adminMenu' onClick={clickedManageAirlines}>Manage Airlines</button>
    <button type='submit' className='button_adminMenu'>Reports</button>
  </div>
  </div>
  );
};

export default AdminMenu;