import React from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { ReporterTable } from '../../models';
export default function Login() {


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
  return (
    <div>

      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <button
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>

    </div>
  )
}
