import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
export const Protected =({curUserData})=>{
     return (
      curUserData ?
       <Outlet/> :
      <Navigate to='/'/>
    )
}
