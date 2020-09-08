import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Test , PersonDetailes , ContactInfo} from './Component/Test';

ReactDOM.render(
 <Fragment>

  <Test 
    Title='React App' 
    Try='1'/>  
    <Test 
    Title='React App' 
    Try='2'/>
    <Test 
    Title='React App' 
    Try='3'/>
    
  <PersonDetailes 
    Name='basma'
    age='21'
    /> 
    <PersonDetailes 
    Name='Marwa'
    age='25'
    /> 
  <ContactInfo
    Email='basma@gmail.com'
    phone='01235'
    />
    <ContactInfo
    Email='marwa@gmail.com'
    phone='01852445'
    />
 </Fragment>
 ,document.getElementById('root')
);

    