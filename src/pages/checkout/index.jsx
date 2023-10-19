import React, { useEffect, useState } from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import combinedData from "./combined_data.json";
import Image from "next/image";
import getConfig from 'next/config';
import Router from "next/router";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Classes from "./checkout.module.css";
// import QRCode from "qrcode.react";

const Checkout = () => {
  const { publicRuntimeConfig } = getConfig();
  const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
  const cloudName = publicRuntimeConfig.CLOUD_NAME;
  const cloudinaryApiKey = publicRuntimeConfig.CLOUDINARY_API_KEY;
  const cloudinaryApiSecret = publicRuntimeConfig.CLOUDINARY_API_SECRET;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insti, setInsti] = useState("");
  const [transcid, setTranscid] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemData, setItemData] = useState(null);
  const [screenShot, setScreenShot] = useState("");
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [url, setUrl] = useState('');
  const [prices, setPrices] = useState(0);
  const [showScanner, setShowScanner] = useState(false);
  const handleFileChange = async (event) => {
    setFile(event.target.files[0]);
    console.log(file)
    setFilename(event.target.files[0].name);


    // }


    // const res=await fetch("/api/upload",{
    //   method:"POST",
    //   body:{
    //     file:event.target.files[0],
    //   }
    // })
    // const data=await res.json();
    // console.log(data)
  };








  const link = "https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=HUBHDEWQSN&entry.1589365680=HEBJWDNKQ&entry.2107420521=HBFJEWDKLQ&entry.248033448=+HCEJNWQ";
  // const link="https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=HUBHDEWQSN&entry.1589365680=HEBJWDNKQ&entry.2107420521=HBFJEWDKLQ&entry.248033448=+HCEJNWQ"

  const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfmxwNrwZhBfLMMnaCpydwBV9Juozd6Uty0zwAgMRZNRDdMgg/formResponse';
  const handleSubmit = async (e) => {


    e.preventDefault();
    const imgName = uuidv4();
    const naming = `https://res.cloudinary.com/shubhamiitbhu/image/upload/v1697484414/payment/${imgName}.jpg`
    const data = new FormData();
    data.append("file", screenShot);
    data.append("upload_preset", "shubhamkumar");
    data.append("cloud_name", "shubhamiitbhu");
    data.append("public_id", imgName);
    fetch("https://api.cloudinary.com/v1_1/shubhamiitbhu/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.url)
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });

    try {
      var t = 0;
      var val = [];
      for (var i = 0; i < selectedItems.length; i++) {
        const selectedItem = getItemDetails(selectedItems[i]);
        let x = selectedItem.Title;
        x += ':'
        x += selectedItem.price;
        val.push(x);
        t = t + selectedItem.price;
      }
      console.log(t)
      console.log(val)

      console.log(prices)

      //dev gupta:(God)
      // let response = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfmxwNrwZhBfLMMnaCpydwBV9Juozd6Uty0zwAgMRZNRDdMgg/formResponse?&submit=Submit?usp=pp_url&entry.2058644330=${name}&entry.666527389=${phone}&entry.352462634=${email}&entry.161165018=${insti}&entry.169406111=${transcid}&entry.1113568387=${JSON.stringify(selectedItems)}`, { 
      //fmc
      //https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/viewform?usp=pp_url&entry.997687481=Shubham&entry.1447534415=6201060889&entry.1224001380=shubham.kikayujs&entry.1589365680=ieghsfuia&entry.2107420521=56789u&entry.248033448=123425twrgefsd&entry.953972318=qerwt435&entry.1901095039=1e3qrwge

      let response = await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSdkNcyta0lRVHc7M4QvVqHnTXuI5G8yP_pK1wZv0EXqwjgA8g/formResponse?&submit=Submit?usp=pp_url&entry.997687481=${name}&entry.1447534415=${phone}&entry.1224001380=${email}&entry.1589365680=${insti}&entry.2107420521=${transcid}&entry.248033448=${val}&entry.953972318=${t}&entry.1901095039=${naming}`, {

        method: "POST",
      });
    } catch (err) {
      console.log("submitted");
      // alert("Submitted we will update you soon");
      const useremail = sessionStorage.getItem('email');
      console.log(useremail)


      // add current cart to registered events
      console.log(selectedItems)
      console.log(JSON.stringify({
        "email":useremail,
        "appendToRegisteredEvents":selectedItems
      }))
      const response2=await fetch(backendURL+"/api/events/add",{
        method:"POST",
        headers: { 
          'Content-Type':  
              'application/json;charset=utf-8'
      },
        body:JSON.stringify({
          "email":useremail,
          "appendToRegisteredEvents":selectedItems
        })
      })
      const data3=await response2.json();
      console.log(data3);


      const resp=await fetch(backendURL + "/api/carts", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: useremail,
          }),
        });
        const data2 = await resp.json();
        console.log(data2);
        Router.push('/dashboard');
    }

  };
  const textBold = {
    fontWeight: "bold",
    fontSize: "2rem",
    textAlign: "center",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "500px",
    margin: "auto",
  };

  const checkoutBtnStyle = {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  useEffect(() => {
    // Function to fetch item data from JSON or your data source
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
      // console.log(response.cartItems)

      cart = response.cartItems
      console.log(cart)
      for (let j in cart) {
        console.log(cart[j].payment.status, cart[j])

        const status = cart[j].payment.status;
        if (status === -1) { cartArray_temp.push(cart[j].id) }

      }
      cartArray = cartArray_temp
      setSelectedItems(cartArray);
    }


    const fetchItemData = async () => {
      try {
        const data = combinedData;
        setItemData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch item data when the component mounts
    fetchItemData();

    // Load selected item IDs from local storage
    // const storedSelectedItems =
    // JSON.parse(localStorage.getItem("selectedItems")) || [];
    getInitialUsers();

  }, []);
  useEffect(() => {
    try {
      const x = sessionStorage.getItem("total");
      setPrices(x);

    } catch (err) {

      console.log(err)
    }
  })

  useEffect(() => {
    const storedItems = sessionStorage.getItem("cartItems");

    console.log("storedItems", storedItems)
    const initialItems = storedItems ? JSON.parse(storedItems) : [];
    setSelectedItems(initialItems);
    console.log(initialItems);
  }, []);

  const getItemDetails = (itemId) => {
    if (!itemData) return null;
    const selectedItem = itemData.find((item) => item.id === itemId);
    return selectedItem;
  };

  const sumOfSelectedItems = selectedItems.reduce((acc, itemId) => {
    const item = combinedData.find((item) => item.id === itemId);
    if (item) {
      return acc + item.price;
    }
    // setPrices(acc)
    return acc;
  }, 0);


  return (
    <div>
      <Header />
      {/* <br />
      <br />
      <br />
      <br />
      <div style={textBold}>Checkout</div>
      <br /> */}
      {/* <div style={formStyle}>
        <h2>Selected Items:</h2>
        <ul>
          {selectedItems.map((itemId) => {
            const selectedItem = getItemDetails(itemId);
            if (selectedItem) {
              return (
                <li key={itemId}>
                  {selectedItem.Title} {selectedItem.price}
                </li>
              );
            }
            return null; // Handle if the item is not found in the data
          })}
        </ul>

        <strong>Total Price: Rs.{sumOfSelectedItems}</strong>

        <Image
        src="/qrcode.png" // Replace with the actual Unsplash image URL
        alt="Unsplash Image"
        width={300} // Specify the desired width
        height={300} // Specify the desired height to make it square
      />
      </div> */}
      {/* <form onSubmit={handleSubmit} style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          required
          onChange={(e) => setPhone(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="insti">Institution:</label>
        <input
          type="text"
          id="insti"
          value={insti}
          required
          onChange={(e) => setInsti(e.target.value)}
        />

        <label htmlFor="transcid">Transaction ID:</label>
        <input
          type="text"
          id="transcid"
          value={transcid}
          required
          onChange={(e) => setTranscid(e.target.value)}
        />

        <button style={checkoutBtnStyle} type="submit">
          Submit
        </button>
      </form> */}

      {/* <div>
        <a href="https://google.com">Google Form</a>
      </div> */}
      {/* <section className="flex min-h-screen w-screen "
        style={{

          backgroundSize: 'cover',  // Adjust as needed
          backgroundPosition: 'center',  // Adjust as needed
          position: 'relative',
        }}
      >
        <div className=' top-0'>

        </div>
        <div className=" mt-28 mx-auto p-2">

          <div className=" flex-1  h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
            <div className="flex flex-col md:flex-row">
              {showScanner ? (<>
                <div className=' flex items-center justify-center  md:w-1/2 '>

                  <Image
                    src={"https://res.cloudinary.com/shubhamiitbhu/image/upload/c_thumb,w_200,g_face/v1697544418/Gens/i74wgd922idblu0gwdq8.svg"}
                    width={100}
                    height={100}
                    className=" md:h-full sm:h-fit w-[70vw] md:w-screen md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl  max-md:rounded-tr-3xl"
                    alt="signup"
                  />

                </div>
              </>) : (<><div className=' flex items-center justify-center  md:w-1/2 '  >

                <Image
                  src={require("./static/clip.png")}
                  width={100}
                  height={100}
                  className=" md:h-full sm:h-fit w-[70vw] md:w-screen md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl  max-md:rounded-tr-3xl"
                  alt="signup"
                />

                <h1 className="absolute md:text-3xl text-2xl text-center  text-white font-semibold  top-16 mt-20 md:mt-20 px-14 tracking-wide">
                  Complete your purchase</h1>
                <h2 className="absolute text-xl text-center text-white font-semibold top-20 mt-32 md:mt-32 px-14 tracking-wide">
                  Selected Items:</h2>

                <ul className="absolute text-lg text-center text-white font-semibold top-28 mt-40 md:mt-40 px-14 tracking-wide"

                >
                  {selectedItems.map((itemId) => {
                    const selectedItem = getItemDetails(itemId);
                    if (selectedItem) {
                      return (
                        <li key={itemId}>
                          {selectedItem.Title} {selectedItem.price}
                        </li>
                      );
                    }
                    return null; // Handle if the item is not found in the data
                  })}
                </ul>

                <h3 className="absolute text-lg md:text-xl mb-2 text-center text-white font-semibold  mt-64 md:mt-64 border-white border-2 p-2 rounded-lg px-4 "> Total Amount to be paid: {sumOfSelectedItems} </h3>


              </div></>)}

              <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

                <div className="w-full">

                  <h1 className="mb-12 text-2xl font-bold text-center text-black tracking-normal">
                    Checkout Form
                  </h1>
                  <form onSubmit={(e) => handleSubmit(e)} className=''>

                    <label htmlFor="name" className="block text-sm">Name:</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="phone" className="block text-sm">Phone:</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />

                    <label htmlFor="email" className="block text-sm">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="insti" className="block text-sm">Institution:</label>
                    <input
                      type="text"
                      id="insti"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={insti}
                      required
                      onChange={(e) => setInsti(e.target.value)}
                    />

                    <label htmlFor="transcid" className="block text-sm">Transaction ID:</label>
                    <input
                      type="text"
                      id="transcid"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      value={transcid}
                      required
                      onChange={(e) => setTranscid(e.target.value)}
                    />
                    <label htmlFor="file" className="block text-sm">Upload Screenshot:</label>
                    <input
                      type="file"
                      id="file"
                      className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                      onChange={(e) => setScreenShot(e.target.files[0])}

                    />
                    <div className="flex flex-row">
                      <div className="flex-row">
                        <button type="submit"
                          className="mt-7 ml-12 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-15 bg-blue-900 ">

                          <span>Submit</span>
                        </button>

                      </div>

                      <button type="button"
                        onClick={() => setShowScanner(!showScanner)}
                        className="mt-7 ml-12 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-white hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-15 bg-blue-900 ">
                        {
                          showScanner ? (<span>Hide QR</span>) : (<span>Show QR</span>)
                        }

                      </button>
                    </div>

                  </form>



                </div>
              </div>
            </div>
          </div>
        </div>



        

      </section> */}
      <section className="flex min-h-screen w-screen "
        style={{

          backgroundSize: 'cover',  // Adjust as needed
          backgroundPosition: 'center',  // Adjust as needed
          position: 'relative',
        }}
      >
        <div className="relative mx-auto w-[80vw] bg-white rounded-3xl mt-24 mb-4">
          <div className="grid min-h-screen grid-cols-10">
            <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
              <div className="mx-auto w-full max-w-lg">
                <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl tracking-wide p-2">Checkout<span className="mt-2 block h-1 w-10 bg-purple-600 sm:w-20"></span></h1>
                <form onSubmit={(e) => handleSubmit(e)} className="mt-10 flex flex-col space-y-4 p-1">
                  <div>
                    <label for="name" className="text-xs font-semibold text-gray-500">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-500">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold text-gray-500">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="insti" className="text-xs font-semibold text-gray-500">Institution</label>
                    <input
                      type="text"
                      id="insti"
                      value={insti}
                      required
                      onChange={(e) => setInsti(e.target.value)}
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="transcid" className="text-xs font-semibold text-gray-500">Transaction ID</label>
                    <input
                      type="text"
                      id="transcid"
                      value={transcid}
                      required
                      onChange={(e) => setTranscid(e.target.value)}
                      className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>
                  <div>
                    <label htmlFor="file" className="text-xs font-semibold text-gray-500">Upload Screenshot of Payment</label>
                    <button
                      type="button"
                      onClick={() => setShowScanner(!showScanner)}
                      className="mt-4 inline-flex w-full items-center justify-center rounded bg-gray-600/60 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100  sm:text-lg">
                      {
                        showScanner ? (<span>Hide QR</span>) : (<span>Show QR</span>)
                      }
                    </button>
                    {
                      showScanner ? (<>
                        <Image src="https://res.cloudinary.com/shubhamiitbhu/image/upload/c_thumb,w_200,g_face/v1697544418/Gens/i74wgd922idblu0gwdq8.svg" id="qrcode" className=" h-60 w-60" alt="qr" width={100} height={100} />
                      </>) : (null)
                    }
                    <input
                      type="file"
                      id="file"
                      required
                      onChange={(e) => setScreenShot(e.target.files[0])}
                      className="mt-2 block w-full rounded text-xs border-gray-300 bg-gray-50 py-3 px-4  placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-purple-500" />
                  </div>


                  <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded bg-purple-600/60 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-purple-500 sm:text-lg">Place Order</button>

                </form>
              </div>


            </div>
            <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">

              <div>
                <Image src="/clip.png" alt="" className="absolute inset-0 h-full w-full object-cover md:rounded-tr-3xl md:rounded-br-3xl max-lg:rounded-bl-3xl  max-lg:rounded-br-3xl" width={100} height={100} />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t  opacity-95"></div>
              </div>


              <div className="relative">
                <div className="space-y-2">
                  <p className="flex justify-between text-3xl mb-3 font-thin text-white p-4"><span>Order Summary</span></p>
                </div>
                <div className={Classes.scroll}>
                  <ul className="space-y-3" >
                    {selectedItems.map((itemId) => {
                      const selectedItem = getItemDetails(itemId);
                      if (selectedItem) {
                        return (
                          <li className="flex justify-between" key={itemId}>
                            <div className="inline-flex">
                              <div className="ml-3">
                                <p className="text-base font-semibold text-white">{selectedItem.Title}</p>
                              </div>
                            </div>
                            <p className="text-sm font-semibold text-white">₹ {selectedItem.price}</p>
                          </li>
                        );
                      }
                      return null; // Handle if the item is not found in the data
                    })}
                  </ul>
                </div>
                <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
                <div className="space-y-2">
                  <p className="flex justify-between text-lg font-bold text-white"><span>Total Price:</span><span>₹ {sumOfSelectedItems}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <Footer />

    </div>
  )
}

export default Checkout;
