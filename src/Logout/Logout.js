import React, { useState } from 'react';
import { Route, Switch } from "react-router";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './Logout.css';

const Logout = () => {

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
          <button type='submit' class='bs-example'>Logout</button>
      </div>
  );
};

export default Logout;