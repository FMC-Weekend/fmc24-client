import React from 'react'
import Header from "../landingpage/Header"
import Footer from "../landingpage/Footer"
import Classes from './login.module.css';
import GoogleLogin from 'react-google-login';
const LogIn = () => {
  return (
    <>
    <Header/>
 <div className={Classes.auth_section}>
      <div className={Classes.top}></div>
      
      <div className={Classes.authenticateButton}>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
         
          cookiePolicy="single_host_origin"
        //   icon={false}
          className={Classes.gButton}>
          <p>Sign in with Google</p>
        </GoogleLogin>
         
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default LogIn
