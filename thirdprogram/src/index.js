import React from  'react';
import reactDom from 'react-dom';
const myfname = 'RAHUL';
const currDate =  new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
reactDom.render(
  <>
  <h1>MY NAME IS {myfname}</h1>
  <p>current date = {currDate} </p>
  <p>current time = {currTime}</p>
  </>,



  document.getElementById('root')

);