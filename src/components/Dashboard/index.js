import React from 'react'
import './dashboard.css'
import headernews from '../../assets/images/headernews.jpg'

export default function Dashboard() {
  return (
    <div>
     <header className='header'>
       <img style={{height:100}} src={headernews} alt="HeaderNews" />
     </header>
     <div style={{display:'flex',flexDirection:'row',flex:1}}>
     <div style={{display:'flex',flexDirection:'column',flex:2, backgroundColor:'#FAF9F6', height:'100vh', borderColor:'red',borderWidth:1}}>

      </div>
      <div style={{display:'flex',flexDirection:'column', flex:8, backgroundColor:'white', height:'100vh'}}>

     </div>
     </div>
    </div>
  )
}
