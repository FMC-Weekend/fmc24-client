import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import jsonData from "./events_data.json";
import comboData from "./combopass_data.json";
import randomPassData from "./randompass_data.json";
import combinedData from "./combined_data.json";
import combinedWithoutAcco from "./combopass_without_acco_data.json";
import { useState, useEffect } from "react";
import Link from "next/link";
import Classes from "./indexe.module.css";
import RandomPass from "./randomPass";
import Router from "next/router";
import getConfig from 'next/config';
import { type } from "os";
import Image from "next/image";
const textStyleBold = {
  backdropFilter: "blur(9px) saturate(100%)",
  WebkitBackdropFilter: "blur(9px) saturate(100%)",
  backgroundColor: "rgba(39, 39, 39, 0)",
  fontSize: "4rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "20rem",
  minHeight: "520px",
};
const divStyle = {
  minHeight: "100px",
};

const checkoutBtnStyle = {
  backgroundColor: "#007BFF",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const Index = () => {
  const { publicRuntimeConfig } = getConfig();
  const [email, setEmail] = useState('');
  const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
  // const [jsonData, setJsonData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [disabledItems, setDisabledItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  let updatedSelectedItems = [];
  const getInitialUsers = async () => {
    // let i,j;
    const useremail = sessionStorage.getItem('email');
    console.log(useremail)
    const data = await fetch(backendURL + "/api/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: useremail
      })
    });
    let cart, cartArray_temp = [], cartArray;
    const response = await data.json();
    console.log(response.cartItems)
    cart = response.cartItems
    for (let j in cart) {
      cartArray_temp.push(cart[j].id)
    }
    cartArray = cartArray_temp

    // disable registered events

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
    let events=data2.registeredEvents;
    console.log(events)
    setDisabledItems(events);


    // console.log(cartArray_temp)
    setSelectedItems(cartArray)
  }
  useEffect(() => {
    if (!loaded) {
      console.log("loaded");
      setLoaded(true);
      getInitialUsers();
    }
  }, loaded)

  useEffect(() => {
    const storedItems = sessionStorage.getItem("cartItems");
    console.log("storedItems", storedItems)
    const initialItems = storedItems ? JSON.parse(storedItems) : [];
    setSelectedItems(initialItems);
    console.log(initialItems);
  }, []);

  // useEffect(()=>{
  //   setSelectedItems(updatedSelectedItems);
  // },updatedSelectedItems);
  const [selectedOption, setSelectedOption] = useState("D");
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    const loginOrNot = sessionStorage.getItem('isLoggedIn');
    console.log(loginOrNot);
    if (loginOrNot === 'true') {
      setOpen(true);
    } else {
      // alert('Please Sign in first');
      Router.push('/login');
    }
  }, [])
  let globalItems = [];
  useEffect(() => {
    console.log("globalItems : ", globalItems)
    try {
      const email = sessionStorage.getItem('email');
      setEmail(email);
      console.log("email : ", email)
    } catch (e) {
      console.log(e);
    }
  }, []);



  const addToCart = async (userId, cartItem) => {
    console.log("action to be added to cart")

    console.log("userId : ", userId);
    console.log("cartItem : ", cartItem);
    const response = await fetch(backendURL + "/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId,
        cartItem: cartItem,
        email: email
      }),
    });
    const data = await response.json();
    console.log("data : ", data);
    if (data.status === "success") {
      console.log("Items added to cart");
    } else {
      console.log("Error adding to cart");
    }
  }
  const deleteFromCart = async (userId, itemId) => {
    console.log("action to be deleted from cart")

    const response = await fetch(backendURL + "/api/cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId,
        itemId: itemId,
        email: email,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "Success") {
      console.log("Items deleted from cart");
    } else {
      console.log("Error deleting from cart");
    }
  }
  const handleCheckboxChange = (itemId, item) => {
    console.log("item", item);
    console.log("itemId", itemId)
    const user = sessionStorage.getItem('userData');
    const userInfo = JSON.parse(user);
    console.log(userInfo);
    const userId = userInfo.user._id;
    console.log(userInfo.user._id);
    // Toggle selected state for the clicked item
    const updatedSelectedItems = [...selectedItems];
    globalItems = updatedSelectedItems;
    console.log("item selected");
    // const index = selectedItems.indexOf(itemId);
    const index = updatedSelectedItems.indexOf(itemId);

    if (index !== -1) {
      updatedSelectedItems.splice(index, 1);
      globalItems = updatedSelectedItems;
      // setSelectedItems(selectedItems.splice(index,1));
      deleteFromCart(userId, itemId);
      console.log(selectedItems);
    } else {
      updatedSelectedItems.push(itemId);
      globalItems = updatedSelectedItems;
      console.log(selectedItems);
      // setSelectedItems(selectedItems.concat([itemId]));
      console.log(item)
      addToCart(userId, item);
    }
    console.log(updatedSelectedItems);
    setSelectedItems(updatedSelectedItems);

    // Save selected items to localStorage
    localStorage.setItem("selectedItems", JSON.stringify(updatedSelectedItems));
  };

  const sumOfSelectedItems = selectedItems.reduce((acc, itemId) => {
    const item = combinedData.find((item) => item.id === itemId);
    if (item) {
      return acc + item.price;
    }
    return acc;
  }, 0);
  useEffect(() => {
    sessionStorage.setItem("total", sumOfSelectedItems);

  }, [sumOfSelectedItems])

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const glassCard = {
    backdropFilter: "blur(21px) saturate(99%)",
    WebkitBackdropFilter: "blur(21px) saturate(99%)",
    backgroundColor: "rgba(0, 23, 53, 0.82)",
  };

  return (
    <div
      className={Classes.FullPage}
    >
      <Header />
      <div className={Classes.MainArea}>
        <div className={Classes.Hide}>
          <div className={Classes.TopBar}>
            <div className={Classes.BarIn}>
              <div className="w-[275px]  h-[125px] flex  flex-col justify-center items-center">
                Select your Tickets below
                <div className="w-[275px]  h-[40px] flex justify-center items-center">
                  <button
                    className="text-[14px] hover:text-[18px] hover:font-bold transition-all duration-5000 ease-in-out"
                    onClick={() => handleOptionSelect("D")}
                  >
                    View Event Ticket Structure
                  </button>
                </div>
              </div>



              <div className="w-[275px]  h-[125px] flex justify-center items-center">
                <button
                  className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                  onClick={() => handleOptionSelect("A")}
                >
                  Event Tickets
                </button>
              </div>

              <div className="w-[275px]  h-[125px] flex justify-center items-center">
                <button
                  className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                  onClick={() => handleOptionSelect("B")}
                >
                  Combo Tickets
                </button>
              </div>
              <div className="w-[275px]  h-[125px] flex justify-center items-center">
                <button
                  className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                  onClick={() => handleOptionSelect("C")}
                >
                  Special Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={Classes.showOnMobile}>
          <div className={Classes.BarIn}>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              Select your pass below
            </div>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("A")}
              >
                Event Tickets
              </button>
            </div>

            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("B")}
              >
                Combo Tickets
              </button>
            </div>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("C")}
              >
                Special Tickets
              </button>
            </div>
          </div>
        </div>
        <div className={Classes.divCards}>
          <div className={Classes.CardDisplay}>
            <div>
              {/* {
              selectedOption==="D"&&(<>
                <Image src={"https://res.cloudinary.com/shubhamiitbhu/image/upload/v1697540907/Gens/rwfr3rpktsoglese1oca.jpg"} alt="Picture of the author" width={500} height={500} />
              </>)
            } */}
              {selectedOption === "D" && (
                <div>
                  <Image
                    src="https://res.cloudinary.com/dkyhoira8/image/upload/v1697651660/vbj6qfnk1gq42hykf2sy.png" // Replace with the actual Unsplash image URL
                    alt="Image"
                    className="w-[60vw]"
                    width={400} // Specify the desired width
                    height={400} // Specify the desired height to make it square
                  />
                </div>
              )}
              {selectedOption === "A" && (
                <div>
                  {jsonData.map((item, index) => (
                    <div
                      key={index}
                      className={Classes.PassesCard}
                    >
                      <div className="inline-flex items-center ">
                        <label
                          className="relative flex cursor-pointer items-center rounded-full p-3"
                          htmlFor="login"
                          data-ripple-dark="true"
                        >
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)} disabled={disabledItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id, item)} style={disabledItems.includes(item.id)?{'backgroundColor':'grey'}:{}}
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                          />

                          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="1"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </label>
                        <label
                          className="mt-px cursor-pointer flex flex-row select-none font-light text-white"
                          htmlFor="login"
                        >
                        
                          <div className="font-bold mr-4 ml-2 self-center">{item.Title}</div>
                          <div className=" bg-blue-900 hover:bg-blue-300 px-4 py-4 border-dark-500 font-semibold mr-4">Genre: {item.genre}</div>
                          <div className="font-light mr-4 self-center">{item.type}</div>
                          <div className="font-semibold mr-4 self-center">Price: Rs. {item.price}</div>
                
                          
                        </label>
                      </div>

                      {/* You can add additional content here */}
                    </div>
                  ))}
                  <style jsx>{`
                    .item-container {
                      border: 1px solid #ccc;
                      margin-bottom: 10px;
                      padding: 10px;
                    }
                    .title {
                      font-weight: bold;
                    }
                  `}</style>
                </div>
              )}
              {selectedOption === "B" && (
                <div className={Classes.Accomodation}>
                <div>
                  <h className={Classes.AccoHeader}>Accomodation Included</h>
                  {comboData.map((item, index) => (
                    <div
                      key={index}
                      className={Classes.PassesCard}
                    >
                      <div className="inline-flex items-center ">
                        <label
                          className="relative flex cursor-pointer items-center rounded-full p-3"
                          htmlFor="login"
                          data-ripple-dark="true"
                        >
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(item.id)} disabled={disabledItems.includes(item.id)}
                            style={disabledItems.includes(item.id)?{'backgroundColor':'grey'}:{}}
                            onChange={() => handleCheckboxChange(item.id,item)}
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                          />

                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </label>
                          <label
                            className="mt-px cursor-pointer flex flex-row select-none font-light text-white"
                            htmlFor="login"
                          >
                            <div className="title mr-4 ml-2">{item.Title}</div>
                            <div className="title mr-4">Rs. {item.price}</div>
                          </label>
                        </div>
                        {/* You can add additional content here */}
                      </div>
                    ))}
                    <style jsx>{`
                    .item-container {
                      border: 1px solid #ccc;
                      margin-bottom: 10px;
                      padding: 10px;
                    }
                    .title {
                      font-weight: bold;
                    }
                  `}</style>
                </div>
                <div>
                <h className={Classes.AccoHeader}>Accomodation Excluded</h>
                {combinedWithoutAcco.map((item, index) => (
                  <div
                    key={index}
                    className={Classes.PassesCard}
                  >
                    <div className="inline-flex items-center ">
                      <label
                        className="relative flex cursor-pointer items-center rounded-full p-3"
                        htmlFor="login"
                        data-ripple-dark="true"
                      >
                        <input
                          type="checkbox"
                          checked={selectedItems.includes(item.id)} disabled={disabledItems.includes(item.id)}
                          style={disabledItems.includes(item.id)?{'backgroundColor':'grey'}:{}}
                          onChange={() => handleCheckboxChange(item.id,item)}
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-500 checked:bg-green-500 checked:before:bg-green-500 hover:before:opacity-10"
                        />

                            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </label>
                          <label
                            className="mt-px cursor-pointer flex flex-row select-none font-light text-white"
                            htmlFor="login"
                          >
                            <div className="title mr-4 ml-2">{item.Title}</div>
                            <div className="title mr-4">Rs. {item.price}</div>
                          </label>
                        </div>
                        {/* You can add additional content here */}
                      </div>
                    ))}
                    <style jsx>{`
                  .item-container {
                    border: 1px solid #ccc;
                    margin-bottom: 10px;
                    padding: 10px;
                  }
                  .title {
                    font-weight: bold;
                  }
                `}</style>
                  </div>
                </div>
              )}
              {selectedOption === "C" && <RandomPass />}
            </div>
          </div>
        </div>
        <div className={Classes.checkout}>
          <p className={Classes.TotalPrice}>Total Price: Rs.{sumOfSelectedItems}</p>
          <ul className={Classes.SelectedItemsList}>
            {selectedItems.map((itemId) => (
              <li key={itemId}>
                {combinedData.find((item) => item.id === itemId)?.Title}
              </li>
            ))}
          </ul>
          <Link
            href="/checkout"
            //style={{ color: "white", width: "100px", textDecoration: "none" }}
            className={Classes.CheckOutBtnStyle}
          >
            <button >

              Checkout

            </button>
          </Link>
        </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Index;