import React, { useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { LanguageTable, ReporterTable } from '../../models';


import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import './login.css'



import { useDispatch } from 'react-redux';
import { loginAction } from '../../redux/actions/loginActions';

import APIHandler from '../../network/APIHandler';
import { useNavigate } from 'react-router-dom';
import history from '../../router/history';
import { createLanguageTable } from '../../graphQLQuaries/mutations';

import * as queries from '../../graphQLQuaries/queries';

import { Storage } from "@aws-amplify/storage"

export default function Login() {

  //Amplify.configure(awsconfig);



  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const validateCredentials = async () => {

    // const rr = await API.graphql(graphqlOperation(createLanguageTable, { input: { LanguageName: "English", SampleScript:"This text is in English",ActiveStatus:true } }))



    /*  const allTodos = await API.graphql({ query: queries.getLanguageTable });
    */

    /*  const list = await Storage.list('')
    
     const images = await Promise.all(list.map(async k =>{
       const signedUrl = await Storage.get(k.key)
       return signedUrl
     }))
     */
    /* const response =  await Storage.put('test.txt', 'Private Content');
     */

    let validCredentials = true;
    if (userName.length == 0) {
      validCredentials = false;

    } else if (password.length == 0) {
      validCredentials = false;
    }

    if (validCredentials) {

      const response = await API.graphql(graphqlOperation(queries.listUserTables, { filter: { userName: { eq: userName }, password: { eq: password } } }))

      if ((response.data.listUserTables.items).length > 0) {
        navigate('/Dashboard')
      } else {
        alert('Please enter valid Credentials')
      }
      console.log(response)
    } else {
      alert("Please enter valid Credentials")
    }
    // 


    /* 
        try {
        const posts = await DataStore.query(LanguageTable);
        console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
      } catch (error) {
        console.log("Error retrieving posts", error);
      }  */

    // APIHandler.postData("login","POST",credentials,loginResponse);
  }


  const loginResponse = (response, error) => {
    if (response) {
      alert(JSON.stringify(response));
      dispatch(loginAction("loginAction", response));
      // navigate('/Dashboard')
      history.push('/Dashboard')
    } else {
      alert(error)
    }
  }
  const credentialView = () => {

    return (
      <div className='LoginContainer'>
        <input className='marginClass inputClass' type='email'
          maxLength={20}
          value={userName}
          onChange={(e) => { setUserName(e.target.value) }}></input>
        <input className='marginClass inputClass' type='password'
          value={password}
          maxLength={20}
          onChange={(e) => { setPassword(e.target.value) }}></input>
        <button className='marginClass inputClass btnClass'
          onClick={() => { validateCredentials() }}> Login

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
