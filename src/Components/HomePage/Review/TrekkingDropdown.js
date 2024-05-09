import React, { useState } from "react";
import trekkingData from "../../../Assets/Data/Trekking"; // Import trekking data
import expeditionData from "../../../Assets/Data/Expedition"; //

const TrekkingDropdown = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemChange = (e) => {
    setSelectedItem(e.target.value);
    // Handle selected item logic here, such as displaying details or navigating to a page
  };

  const allItems = {
    ...trekkingData.trekking,
    ...expeditionData.expeditions,
  };

  const filteredItems = Object.keys(allItems)
    .flatMap((category) =>
      Object.keys(allItems[category]).map((item) => ({ category, item }))
    )
    .filter(({ item }) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className=" ">
      <input
        className=""
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search items..."
      />

      <select value={selectedItem} onChange={handleItemChange} className="">
        <option value="">Select an Item</option>
        {filteredItems.map(({ category, item }) => (
          <option key={item} value={item}>
            {category} - {item}
          </option>
        ))}
      </select>

      {selectedItem && (
        <div>
          <p>Selected Item: {selectedItem}</p>
        </div>
      )}
    </div>
  );
};

export default TrekkingDropdown;
