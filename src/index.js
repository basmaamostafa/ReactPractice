import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Test , PersonalInfo , } from './Component/Test';

ReactDOM.render(
 <Fragment>

  <Test 
    Title='React App' 
    Try='1'/>  

  <PersonalInfo
    Fname='Basma'
    Lname='Mostaf'
    age='21'
    phone='0102222'
  />

 </Fragment>
 ,document.getElementById('root')
);

    