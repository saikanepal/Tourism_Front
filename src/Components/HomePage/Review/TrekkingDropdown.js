import React, { useState } from "react";
import trekkingData from "../../../Assets/Data/Trekking"; // Import trekking data
import expeditionData from "../../../Assets/Data/Expedition"; //
import "../Nav/Header.css";
const TrekkingDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    const allItems = {
      ...trekkingData.trekking,
      ...expeditionData.expeditions,
    };

    const filteredResults = Object.keys(allItems).reduce((acc, category) => {
      const items = Object.keys(allItems[category]).filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      return [...acc, ...items];
    }, []);

    setSearchResults(filteredResults);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSearchTerm(item); // Display the selected item in the search bar
    setSearchResults([]); // Clear search results
  };

  return (
    <div className="mx-1 w-full  my-5">
      <input
        className="bg-[#EDEDED] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 border-none outline-none "
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for items..."
      />

      {searchTerm.trim() !== "" && searchResults.length > 0 && (
        <ul className="absolute bg-white text-[14px]  h-48 overflow-auto scrollable-container  pr-1 w-[70%] sm:[w-50%] md:w-[27%] lg:w-[19%] ">
          {searchResults.map((item) => (
            <li
              className=" my-2 ml-2  "
              key={item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {selectedItem && (
        <div>
          {/* Display item details or perform other actions */}
          {/* <p>Selected Item: {selectedItem}</p> */}
          {/* You can add more details based on the selected item */}
        </div>
      )}
    </div>
  );
};

export default TrekkingDropdown;
