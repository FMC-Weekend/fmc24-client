import React from 'react'
import { GoogleOAuthProvider, useGoogleOneTapLogin, GoogleLogin } from '@react-oauth/google';
import Classes from "./login.module.css"
import Header from "../landingpage/Header"
import Router from 'next/router'
import axios from 'axios';
import Image from 'next/image';
import getConfig from 'next/config';
import { BeatLoader } from 'react-spinners';
const LogIn = () => {

    const [clicked, setClicked] = React.useState(false);
    const { publicRuntimeConfig } = getConfig();

    const clientId = publicRuntimeConfig.GOOGLE_CLIENT_ID;
    console.log("clientId : ",publicRuntimeConfig.GOOGLE_CLIENT_ID);

    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    // console.log(backendURL)


    console.log("backendURL : " + backendURL);

    const handleFailure = (error) => {
        console.log("Authentication failed", error);
    };

    const handleLogin = async (credentialResponse) => {
        sessionStorage.clear();
        localStorage.clear();
        try {
            // console.log(credentialResponse.getBasicProfile)
            console.log("handleLogin invoked", credentialResponse);
            const idToken = credentialResponse.credential;
            const info = await fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken)
            console.log(idToken);
            console.log("info", info)
            const data = await info.json();
            console.log(data)
            sessionStorage.setItem("img", data.picture)
            setClicked(true);
            console.log(credentialResponse.credential);
            sessionStorage.setItem('token', credentialResponse.credential);
            const response = await axios.post(backendURL + "/api/google-login", {
                token: credentialResponse.credential,
                audience: clientId,
            });
            console.log("axios data", response);
            if (response.status === 200) {


                // const data = await response.data.json();
                // console.log(data);

                // sessionStorage.setItem('token', credentialResponse.credential);
                const isNewUser = response.data.message === "New user log in";
                console.log(response)
                console.log(response.data.message)
                sessionStorage.setItem('isNewUser', isNewUser);
                sessionStorage.setItem('isLoggedIn', true);
                if (isNewUser) {
                    Router.push('/register');
                } else {
                    Router.push('/dashboard');
                }
            } else {
                console.error('Authentication failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };


    return (
        <>
            <section class="flex min-h-screen w-screen "
                style={{
                    backgroundImage: `url(${require("./static/loginbg.png")})`,
                    backgroundSize: 'cover',  // Adjust as needed
                    backgroundPosition: 'center',  // Adjust as needed
                    position: 'relative',
                }}
            >
                <div className=' top-0'>
                    <Header />
                </div>
                <div className=" mt-28 mx-auto p-2">

                    <div class=" flex-1  h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
                        <div class="flex flex-col md:flex-row">
                            <div className=' md:w-1/2 '>

                                <Image
                                    src={require("./static/clip.png")}
                                    width={100}
                                    height={100}
                                    className=" md:h-full sm:h-fit w-screen md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl  max-md:rounded-tr-3xl"
                                    alt="signup"
                                />
                                <h1 class="absolute text-5xl w-7 text-white font-semibold top-20 mt-40 md:mt-40 px-14 tracking-wide">
                                    Login to your Account</h1>


                            </div>
                            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

                                <div class="w-full">

                                    <h1 class="mb-12 text-6xl font-bold text-center text-black tracking-normal">
                                        Login
                                    </h1>
                                    <div className={Classes.authenticateButton}>
                                        <GoogleOAuthProvider
                                            auto_select
                                            clientId={clientId}
                                            className={Classes.gButton}
                                        >

                                            {/* <BeatLoader size={15} color={'#123abc'} loading={true} /> */}
                                            {/*Loader action on onclick */}

                                            <GoogleLogin
                                                onSuccess={handleLogin}
                                                onFailure={handleFailure}

                                                cookiePolicy="single_host_origin"
                                                useOneTap
                                            />
                                        </GoogleOAuthProvider>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default LogIn