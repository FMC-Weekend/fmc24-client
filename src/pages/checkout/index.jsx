import React, { useEffect, useState } from "react";
import Header from "../landingpage/Header";
import Footer from "../landingpage/Footer";
import combinedData from "./combined_data.json";
import Image from "next/image";
// import QRCode from "qrcode.react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [insti, setInsti] = useState("");
  const [transcid, setTranscid] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemData, setItemData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
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
    const storedSelectedItems =
      JSON.parse(localStorage.getItem("selectedItems")) || [];
    setSelectedItems(storedSelectedItems);
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
      <section class="flex min-h-screen w-screen "
                style={{
                 
                    backgroundSize: 'cover',  // Adjust as needed
                    backgroundPosition: 'center',  // Adjust as needed
                    position: 'relative',
                }}
            >
                <div className=' top-0'>
                  
                </div>
                <div className=" mt-28 mx-auto p-2">

                    <div class=" flex-1  h-auto max-w-4xl mx-auto bg-white rounded-3xl shadow-xl">
                        <div class="flex flex-col md:flex-row">
                            <div className=' flex items-center justify-center  md:w-1/2 '>
                           
                                <Image
                                    src={require("./static/clip.png")}
                                    width={100}
                                    height={100}
                                    className=" md:h-full sm:h-fit w-[70vw] md:w-screen md:rounded-tl-3xl md:rounded-bl-3xl rounded-tl-3xl  max-md:rounded-tr-3xl"
                                    alt="signup"
                                />
                                
                                <h1 class="absolute md:text-3xl text-2xl text-center  text-white font-semibold  top-16 mt-20 md:mt-20 px-14 tracking-wide">
                                    Complete your purchase</h1>
                                    <h2 class="absolute text-xl text-center text-white font-semibold top-20 mt-32 md:mt-32 px-14 tracking-wide">
                                    Selected Items:</h2>
        <ul class="absolute text-lg text-center text-white font-semibold top-28 mt-40 md:mt-40 px-14 tracking-wide">
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
    
    
                            </div>
                            <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">

                                <div class="w-full">

                                    <h1 class="mb-12 text-2xl font-bold text-center text-black tracking-normal">
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

        <div className='text-center'>
  <button type="submit"
    class="mt-7 ml-12 px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-15 bg-lime-400 ">
    
    <span>Submit</span>
</button>
</div>
</form>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
     <Footer/>

    </div>
  );
};

export default Checkout;
