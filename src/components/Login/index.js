import React, { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { ReporterTable } from '../../models';
import './login.css'



import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/loginActions';

import APIHandler from '../../network/APIHandler';
 import { useNavigate } from 'react-router-dom';
import history from '../../router/history';


export default function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const dispatch = useDispatch();


  const toggleTheme = async () => {

    const mm = await DataStore.save(
      new ReporterTable({
        "FirstName": "Lorem ipsum dolor sit amet",
        "LastName": "Lorem ipsum dolor sit amet",
        "EmailID": "Lorem ipsum dolor sit amet",
        "MobileNumber": "Lorem ipsum dolor sit amet",
        "Status": true,
        "Action": "Lorem ipsum dolor sit amet",
        "JoiningDate": "1970-01-01T12:30:23.999Z",
        "ActiveTime": "1970-01-01T12:30:23.999Z",
        "InactiveTime": "1970-01-01T12:30:23.999Z",
        "Comments": "Lorem ipsum dolor sit amet",
        "PrefferenLangugae": "Lorem ipsum dolor sit amet",
        "GovtIDType": "Lorem ipsum dolor sit amet",
        "GovtIDNumber": "Lorem ipsum dolor sit amet"
      })
    );
    alert(JSON.stringify(mm))
  }

  const validateCredentials = () =>{
    //alert(userName + "    "+ password);
    let credentials = {
      userName:userName,
      password: password
    }
    navigate('/Dashboard')
   // history.push('/Dashboard')
   // APIHandler.postData("login","POST",credentials,loginResponse);
   
  }

  
const loginResponse = (response, error) =>{
  if(response){
      alert(JSON.stringify(response));
      dispatch(loginAction("loginAction",response));
     // navigate('/Dashboard')
     history.push('/Dashboard')
  }else{
      alert(error)
  }
}
  const credentialView = () =>{

    return(
      <div className='LoginContainer'>
        <input className='marginClass inputClass' type='email'
          maxLength={20}
          value={userName}
          onChange={(e)=>{setUserName(e.target.value)}}></input>
        <input className='marginClass inputClass' type='password'
          value={password}
          maxLength={20}
          onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button className='marginClass inputClass btnClass'
          onClick={()=>{validateCredentials()}}> Login

        </button>
      </div>
    )
  }




  return (
    <div>

     
     {credentialView()}
    </div>
  )
}
