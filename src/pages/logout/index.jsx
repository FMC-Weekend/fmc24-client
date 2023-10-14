import React from 'react'
import Router from 'next/router'

const Logout = () => {
    try{
    sessionStorage.clear();
    localStorage.clear();
    Router.push('/login');
    }catch{
        console.log("E");
    }
  return (
    <div>Logout</div>
  )
}

export default Logout