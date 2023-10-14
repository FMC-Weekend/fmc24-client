import React, { useState, useEffect } from "react";
import randomPassData from "./randompass_data.json";
import Classes from "./indexe.module.css"
import jsonData from "./events_data.json";
function YourComponent() {
  const [option, setOption] = useState(""); // State for selected option
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [events, setEvents] = useState([]); // State for the list of events
  const [selectedEvents, setSelectedEvents] = useState([]); // State for selected events

  // Fetch event data from JSON when the component mounts

  // Function to handle option selection
  const handleOptionSelect = (selectedOption) => {
    setOption(selectedOption);
    setSelectedEvents([]); // Clear the selected events when the option changes
  };

  const handleOptionSelectEvents = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, deselect it
      setSelectedOptions(
        selectedOptions.filter((item) => item.id !== option.id)
      );
    } else if (selectedOptions.length < 6) {
      // If less than 6 options are selected, select the option
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  const handleOptionSelectEvents4 = (option) => {
    if (selectedOptions.includes(option)) {
      // If the option is already selected, deselect it
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else if (selectedOptions.length < 4) {
      // If less than 6 options are selected, select the option
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Function to handle event selection
  const handleEventSelect = (eventId) => {
    if (selectedEvents.length < (option === "A" ? 6 : 4)) {
      setSelectedEvents((prevSelectedEvents) => [
        ...prevSelectedEvents,
        eventId,
      ]);
    }
  };

  return (
    <div className={Classes.SelectOption}>
      <div className={Classes.OptionSelect}>
      <h2>Select an option:</h2>
        <label>
          6 Random Pass
          <input
            type="radio"
            value="A"
            checked={option === "A"}
            onChange={() => handleOptionSelect("A")}
          />
        </label>
        <label>
          4 Random Pass
          <input
            type="radio"
            value="B"
            checked={option === "B"}
            onChange={() => handleOptionSelect("B")}
          />
        </label>
      </div>

      {option === "A" && (
        <div>
          {jsonData.map((option) => (
            <div
              key={option.id}
              className={Classes.PassesCard}
            >
              <div className="inline-flex items-center ">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  for="login"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionSelectEvents(option)}
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
                  for="login"
                >
                  <div className="title mr-4 ml-2">{option.Title}</div>
                  <div className="title mr-4">{option.genre}</div>
                  <div className="title mr-4">{option.type}</div>
                  <div className="title mr-4">Rs. {option.price}</div>
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
      {option === "B" && (
        <div>
          {jsonData.map((option) => (
            <div
              key={option.id}
              className={Classes.PassesCard}
            >
              <div className="inline-flex items-center ">
                <label
                  className="relative flex cursor-pointer items-center rounded-full p-3"
                  for="login"
                  data-ripple-dark="true"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleOptionSelectEvents4(option)}
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
                  for="login"
                >
                  <div className="title mr-4 ml-2">{option.Title}</div>
                  <div className="title mr-4">{option.genre}</div>
                  <div className="title mr-4">{option.type}</div>
                  <div className="title mr-4">Rs. {option.price}</div>
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

      <p className={Classes.SelectedEvents}>Selected Events: {selectedEvents.join(", ")}</p>
    </div>
  );
}

export default YourComponent;

