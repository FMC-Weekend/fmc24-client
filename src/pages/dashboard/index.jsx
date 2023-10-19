/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useContext, useEffect, useState } from 'react';
import Classes from "./dashboard.module.css"
import Button from './Button/Button';
import Router from 'next/router';
import getConfig from 'next/config';
import Loader from "../loading"
import jwt_decode from 'jwt-decode';
import Image from 'next/image';
import Header from '../landingpage/Header';
import Footer from '../landingpage/Footer';
import ContestCard from './contestCard/ContestCard';
import WorkshopCard from './workshopCard/WorkshopCard';
import Link from 'next/link';
import { useAuth } from '../../context/auth';
import jsonData from './combined_data.json';
const DashBoard = () => {
    const {state} = useAuth();
    const { isAuthenticated, user } = state;
    const { publicRuntimeConfig } = getConfig();
    const [profileImage, setProfileImage] = useState('');
    const NEXT_PUBLIC_REACT_APP_BACKEND_URI = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;

    const [isLoading, setIsLoading] = useState(false);
    const [contests, setContests] = useState([]);
    const [workshops, setWorkshops] = useState([]);
    const [loaded,setLoaded]= useState(false);
    const [eventsList,setEventsList]=useState([]);
    const [verified,setVerified]=useState(false);
    useEffect(()=>{
        if(!loaded){
        const getEvents= async ()=>{
                const useremail=sessionStorage.getItem('email')
                const response2=await fetch(backendURL+"/api/events",{
                    method:"POST",
                    headers: { 
                        'Content-Type':  
                        'application/json;charset=utf-8'
                    },
                    body:JSON.stringify({
                        email:useremail
                    })
                })
                const data2=await response2.json();
                let [events]=Array(data2.registeredEvents);
                console.log(events)
                console.log(jsonData)
                let eventsArray=[];
                for(let x in jsonData){
                    if(events.includes(jsonData[x].id)){
                        eventsArray.push(jsonData[x].Title)
                    }
                }
                console.log(eventsArray)
                setVerified(data2.verified)
                setEventsList(eventsArray)
                
                
            }
                getEvents();
                setLoaded(true);
            }
    },[])
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'foo@foo.com',
        college: 'Foo',
        phone: 'XXXXXXXXXX',
        year: '0',
        instaHandle: '_blah_',
        userType: '-1'
    });
    useEffect(() => {
        const storedImage = sessionStorage.getItem('img');
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            Router.push('/');
            return;
        }
        const decodedToken = jwt_decode(token);
        const storedEmail = decodedToken.email;
        setIsLoading(true);

        const fetchUserData = async () => {
            const storedUserData = sessionStorage.getItem('userData');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                const user = parsedUserData.user.userID || parsedUserData.user; 

                setUserData({
                    name: user.name,
                    email: user.email,
                    college: user.college,
                    phone: user.number,
                    year: user.yearOfStudy,
                    instaHandle: user.instaHandle,
                    userType: user.role,
                    refCode: user.ref_code,
                    timesReferred: user.norefcode,
                });
                setIsLoading(false);
                return;
            }
            try {
                const res = await fetch(NEXT_PUBLIC_REACT_APP_BACKEND_URI + '/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        email: storedEmail,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await res.json();
                console.log(data)
                sessionStorage.setItem('userData', JSON.stringify(data));
                if (data && typeof data === 'object' &&
                    data.user && typeof data.user === 'object' &&
                    data.user.userID && typeof data.user.userID === 'object' &&
                    data.user.userID.userCart !== null) {
                    let cartItems=[];
                    try{
                        cartItems = data.user.userID.userCart.cartItems;
                    }catch(error){
                        console.log("no cart items");
                    }
                    const contestItems = new Set();
                    const workshopItems = new Set();

                    cartItems.forEach((item) => {
                        if (item.Type === 'Contest' && item.payment.status === -1) {
                            const { title, img, id } = item;
                            contestItems.add({ title, img, id });
                        } else if (item.Type === 'Workshop' && item.payment.status === -1) {
                            const { title, img, id } = item;
                            workshopItems.add({ title, img, id });
                        }
                    });
                    setContests([...contests, ...contestItems]);
                    setWorkshops([...workshops, ...workshopItems]);
                    console.log(contests, workshops)
                    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
                    console.log("cartItems", cartItems);
                } else {

                    console.log("Data or userCart is missing or null.");
                }

                const user = data.user.userID || data.user; // Adjust this based on your API response structure

                setUserData({
                    name: user.name,
                    email: user.email,
                    college: user.college,
                    phone: user.number,
                    year: user.yearOfStudy,
                    instaHandle: user.instaHandle,
                    userType: user.role,
                    refCode: user.ref_code,
                    timesReferred: user.norefcode,
                });

                setIsLoading(false);
            } catch (error) {
                console.error(error);
                alert('Error with authentication, please login again');
                Router.push('/');
            }
        };

        fetchUserData();
    }, []);

    const logOutHandler = () => {
        sessionStorage.clear();
        Router.push('/');
    };
    const reset = () => {
        Router.push("/register");
    }

    // if(!isAuthenticated){
    //     return <h1>Not authenticated. Please log in</h1>
    // }

    // console.log("state", state);

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <Header />


                        <div className={`${Classes.main} ${Classes.column_2}`}>

                            <div class=" shadow-lg  shadow-amber-200/30 mt-28 w-[80vw] h-auto p-6 justify-center my-6 border mr-5 border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[14px] bg-opacity-10 backdrop-blur-lg  drop-shadow-xl bg-blend-normal z-10 ">
                                <div class="flex flex-col md:flex-row">
                                    <div className=' md:w-1/2 text-center  md:border-r-2 border-white '>

                                        <Image
                                            src={profileImage}
                                            width={100}
                                            height={100}
                                            className=" rounded-full mx-auto mt-14 h-56 w-56 "
                                            alt="signup"
                                        />

                                        <div className='flex items-center mx-auto m'>
                                            <div className='mx-auto mt-14'>
                                                <button className=' text-white font-bold py-1 px-4 rounded-lg text-lg  mx-4  border-white bg-gradient-to-t from-white/10 to-white/30 bg-opacity-10 backdrop-blur-lg  drop-shadow-xl bg-blend-normal z-10' onClick={reset}  >Edit Info</button>
                                                <button className=' bg-red-700 text-white  text-lg rounded-lg font-bold py-1 px-4  border-white bg-gradient-to-t from-red-600/50 to-red-700/70 bg-opacity-10 backdrop-blur-lg  drop-shadow-xl bg-blend-normal z-10 ' onClick={logOutHandler}>Logout</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

                                        <div class="w-full">

                                            <h1 class="mb-12 text-6xl font-normal text-center text-white tracking-normal font-sans">
                                                {userData.name}
                                            </h1>
                                            <form className=''>

                                                <div className='mt-3'>
                                                    <label className="block text-sm">
                                                        Email
                                                    </label>
                                                    <div

                                                        className="w-full  py-2 text-sm font-bold"
                                                    >{userData.email}</div>

                                                </div>

                                                <div className='mt-3'>

                                                    <label htmlFor="college" className="block text-sm">
                                                        University / College Name
                                                    </label>
                                                    <div

                                                        className="w-full  py-2 text-sm font-bold"
                                                    >{userData.college}</div>

                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="insta" class="block text-sm">
                                                        Phone
                                                    </label>
                                                    <div

                                                        className="w-full  py-2 text-sm font-bold"
                                                    >{userData.phone}</div>
                                                </div>

                                                <div className='mt-3'>
                                                    <label htmlFor="insta" class="block text-sm">
                                                        Instagram Handle
                                                    </label>
                                                    <div

                                                        className="w-full  py-2 text-sm font-bold"
                                                    >{userData.instaHandle}</div>
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="insta" class="block text-sm">
                                                        User Type
                                                    </label>
                                                    <div

                                                        className="w-full  py-2 text-sm font-bold"
                                                    >{userData.userType == 2 ? 'Campus Ambassador' : 'Participant'}</div>
                                                </div>



                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className=' text-3xl text-white font-mono font-semibold mt-4'>Registered Contests</div>
                            <div className="flex flex-col flex-wrap md:flex-row justify-between p-10  text-[14px]">


                                {
                                    eventsList.map((events) => (
                                        <ContestCard
                                            title={events}
                                        />
                                    ))
                                }
                                <div class="w-[340px] h-[250px] justify-center my-6   hover:shadow-amber-100/20  transition-all border mx-2 border-white bg-gradient-to-t from-white/10 to-white/30 text-white rounded-[14px] bg-opacity-10 backdrop-blur-lg  shadow-xl drop-shadow-xl bg-blend-normal z-10 ">
                                    <div class="flex flex-col text-center justify-center align-middle px-6 py-4">
                                    <Link href="/cart"> 
                                        <div class=" flex flex-rows justify-around font-bold text-7xl text-black mb-2 my-5"><div>+</div></div>
                                       
                                        <p class=" my-3.5 h-[180px] text-2xl text-center">
                                            Add more events
                                        </p>
                                        </Link>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>

                </>
            )}

        </div>
    );
}

export default DashBoard;

