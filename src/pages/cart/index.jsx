import React from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import jsonData from "./events_data.json";
import comboData from "./combopass_data.json";
import randomPassData from "./randompass_data.json";
import combinedData from "./combined_data.json";
import { useState, useEffect } from "react";
import Link from "next/link";
import Classes from "./indexe.module.css";
import RandomPass from "./randomPass";
import Router from "next/router";
import getConfig from 'next/config';
import { type } from "os";
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
  const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
  // const [jsonData, setJsonData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  let updatedSelectedItems=[];

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
  const [selectedOption, setSelectedOption] = useState("");
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
  let globalItems=[];
  useEffect(()=>{
    console.log("globalItems : ",globalItems)
  },[]);
  const addToCart = async (userId, cartItem) => {
    console.log("action to be added to cart")

    console.log("userId : ",userId);
    console.log("cartItem : ",cartItem);
    const response = await fetch(backendURL + "/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: userId,
        cartItem: cartItem,
      }),
    });
    const data = await response.json();
    console.log("data : ",data);
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
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200) {
      console.log("Items deleted from cart");
    } else {
      console.log("Error deleting from cart");
    }
  }
  const handleCheckboxChange = (itemId, item) => {
    const user = sessionStorage.getItem('userData');
    const userInfo = JSON.parse(user);
    console.log(userInfo);
    const userId = userInfo.user._id;
    console.log(userInfo.user._id);
    // Toggle selected state for the clicked item
    const updatedSelectedItems = [...selectedItems];
    globalItems=updatedSelectedItems;
    console.log("item selected");
    // const index = selectedItems.indexOf(itemId);
    const index = updatedSelectedItems.indexOf(itemId);

    if (index !== -1) {
      updatedSelectedItems.splice(index, 1);
      globalItems=updatedSelectedItems;
      // setSelectedItems(selectedItems.splice(index,1));
      deleteFromCart(userId, itemId);
      console.log(selectedItems);
    } else {
      updatedSelectedItems.push(itemId);
      globalItems=updatedSelectedItems;
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
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              Select your pass below
            </div>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("A")}
              >
                Event Pass
              </button>
            </div>

            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("B")}
              >
                Combo Pass
              </button>
            </div>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("C")}
              >
                Random Pass
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
                Event Pass
              </button>
            </div>

            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("B")}
              >
                Combo Pass
              </button>
            </div>
            <div className="w-[275px]  h-[125px] flex justify-center items-center">
              <button
                className="text-[20px] hover:text-[25px] hover:font-semibold transition-all duration-5000 ease-in-out"
                onClick={() => handleOptionSelect("C")}
              >
                Random Pass
              </button>
            </div>
          </div>
        </div>
        <div className={Classes.divCards}>
          <div className={Classes.CardDisplay}>
            <div>
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
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id, item)}
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
                          <div className="title mr-4">{item.genre}</div>
                          <div className="title mr-4">{item.type}</div>
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
              )}
              {selectedOption === "B" && (
                <div>
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
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleCheckboxChange(item.id)}
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
              )}
              {selectedOption === "C" && <RandomPass />}
            </div>
          </div>
        </div>
          <div className={Classes.checkout}>
            <p className={Classes.TotalPrice}>Total Price: Rs.{sumOfSelectedItems}</p>
            <ul className="flex flex-col justify-center align-middle">
              {selectedItems.map((itemId) => (
                <li key={itemId}>
                  {combinedData.find((item) => item.id === itemId)?.Title}
                </li>
              ))}
            </ul>
            <button className={Classes.CheckOutBtnStyle}>
              <Link
                href="/checkout"
                style={{ color: "white", textDecoration: "none" }}
              >
                Checkout
              </Link>
            </button>
          </div>

        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
