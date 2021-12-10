import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import AdminMenu from '../AdminMenu';
import './AddAirlines.css';

const AddAirline = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [instrumentUsed, setInstrumentUsed] = useState('');
  const [ticketCost, setticketCost] = useState('');
  const [bCSeats, setbCSeats] = useState('');
  const [nonBCSeats, setnonBCSeats] = useState('');
  const [rows, setrows] = useState('');
  const [contactNumber, setcontactNumber] = useState('');
  const [emailAddress, setemailAddress] = useState('');
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let loginData = {
      username: username,
      password: password,
    };

    console.log(loginData);
   setUsername('');
   setPassword('');
   loginData=null;
   console.log(loginData);
  };

  return (
    <div>
    <AdminMenu></AdminMenu>
    <form onSubmit={submitHandler}>
      <table className='table.center'>
        <tr>
        <div className='new-expense-addAirline__controls'>
          <td className='tdStyle'>
        <div className='new-expense-addAirline__control' >
          <label>Flight Number</label>
          <input
            type='text'
            value={username}  
            onChange={usernameChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Airline</label>
          <input
            type='text'
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
         <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>From place</label>
          <select className='selectStyle'>
  <option value="hyderabad">Hyderabad</option>
  <option value="chennai">Chennai</option>
  <option selected value="banglore">Banglore</option>
  <option value="mysore">Mysore</option>
</select>
        </div>
        </td>
         <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>To place</label>
          <select className='selectStyle'>
          <option value="hyderabad">Hyderabad</option>
          <option value="chennai">Chennai</option>
          <option selected value="banglore">Banglore</option>
          <option value="mysore">Mysore</option>
          </select>
        </div>
        </td> 
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Scheduled days</label>
          <select className='selectStyle'>
          <option value="hyderabad">Daily</option>
          <option value="chennai">Week Days</option>
          <option selected value="banglore">Week Ends</option>
          </select>
        </div>
        </td> 
        </div>
        </tr>
        <tr>
        <div className='new-expense-addAirline__controls'>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Start date</label>
          <div className='new-expense__control'>
          <input type='date'  className='datepickerStyle'/>
        </div>
        </div>
        </td> 
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>End date</label>
          <div className='new-expense__control'>
          <input type='date'  className='datepickerStyle'/>
        </div>
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Instrument used</label>
          <input
            type='text'
            value={instrumentUsed}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Ticket cost</label>
          <input
            type='text'
            value={ticketCost}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Meal</label>
          <select className='selectStyle'>
          <option value="none">None</option>
          <option value="veg">Veg</option>
          <option selected value="nonVeg">Non Veg</option>
          </select>
        </div>
        </td> 
        </div>
        </tr>
        <tr>
        <div className='new-expense-addAirline__controls'>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Business class seats</label>
          <input
            type='text'
            value={bCSeats}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Non Business class seats</label>
          <input
            type='text'
            value={nonBCSeats}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Number of rows</label>
          <input
            type='text'
            value={rows}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Contact Number</label>
          <input
            type='text'
            value={contactNumber}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        <td className='tdStyle'>
        <div className='new-expense-addAirline__control'>
          <label>Contact email address</label>
          <input
            type='text'
            value={emailAddress}
            onChange={passwordChangeHandler}
          />
        </div>
        </td>
        </div>
        </tr>
        </table>
       <div>
        <button type='submit' className='new-expense-addAirline__actions'>Add Airline</button>
      </div>
     
    </form>
    </div>
  );
};

export default AddAirline;