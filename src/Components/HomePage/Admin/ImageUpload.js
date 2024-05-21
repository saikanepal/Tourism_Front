import React, { useState } from "react";

const ImageUploadForm = () => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const imageFiles = Array.from(fileList);
    setImages(imageFiles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (upload images and description)
    console.log("Description:", description);
    console.log("Images:", images);
    // You can add your logic to upload the description and images here
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <input
          type="text"
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="image1"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image 1
        </label>
        <input
          type="file"
          id="image1"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          required
        />
        <label
          htmlFor="image1"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleImageChange}
        >
          Choose Image 1
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="image2"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image 2
        </label>
        <input
          type="file"
          id="image2"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          // required
        />
        <label
          htmlFor="image2"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleImageChange}
        >
          Choose Image 2
        </label>
      </div>
      <div className="mb-5">
        <label
          htmlFor="image3"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image 3
        </label>
        <input
          type="file"
          id="image3"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
          // required
        />
        <label
          htmlFor="image3"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleImageChange}
        >
          Choose Image 3
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Upload Images
      </button>
    </form>
  );
};

export default ImageUploadForm;
