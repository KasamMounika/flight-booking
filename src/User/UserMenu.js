import React, { useState } from 'react';
import { Route, Switch } from "react-router";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './UserMenu.css';
import Home from '../Home/Home';

const UserMenu = () => {

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

  return (
    <div>
    <Home></Home>
          <div align='center'>
        <button type='submit' className='button_userMenu'>Book Flight</button>
        <button type='submit' className='button_userMenu'>Manage Bookings</button>
        <button type='submit' className='button_userMenu'>Booking History</button>
  </div>
  </div>
  );
};

export default UserMenu;