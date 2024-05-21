import React, { useState, useRef } from "react";
import axios from "axios";
import { useImage } from "../../Hooks/useImage";

const ImageUploadForm = () => {
  const { uploadImage } = useImage();
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  // Refs for file inputs
  const fileInputRefs = useRef([]);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = file;
      return updatedImages;
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[index] = null;
      return updatedImages.filter((image) => image !== null); // Remove null values
    });

    // Reset the corresponding file input field
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index].value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const uploadedImages = [];

    for (const image of images) {
      const uploadedImage = await uploadImage(image);
      uploadedImages.push(uploadedImage);
      console.log("Uploaded Image:", uploadedImage);
    }

    console.log("All Uploaded Images:", uploadedImages);
    console.log("Description:", description);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/Image/postImage",
        {
          uploadedImages,
        }
      );
      console.log("Response:", response.data);
      setDescription("");
      setImages([]);
    } catch (error) {
      console.error("Error uploading description:", error);
    }
    setImages([]);
    setDescription("");
  };

  return (
    <form
      className="max-w-[60%] mx-auto my-4 font-Poppins"
      onSubmit={handleSubmit}
    >
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
          className=" text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 outline-none border-none bg-gray-50 border"
          placeholder="Enter description"
          value={description}
          onChange={handleDescriptionChange}
          // required
        />
      </div>
      {[1, 2, 3].map((index) => (
        <div className="mb-5" key={index}>
          <label
            htmlFor={`image${index}`}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image {index}
          </label>
          <input
            type="file"
            id={`image${index}`}
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageChange(e, index - 1)}
            ref={(el) => (fileInputRefs.current[index - 1] = el)} // Assign ref
          />
          {images[index - 1] ? (
            <div className="flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <p className="text-gray-600 text-sm mr-2">
                {images[index - 1].name}
              </p>
              <button
                type="button"
                className="text-red-500"
                onClick={() => handleRemoveImage(index - 1)}
              >
                Remove
              </button>
            </div>
          ) : (
            <label
              htmlFor={`image${index}`}
              className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            >
              Choose Image {index}
            </label>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="text-white bg-custom-gold focus:ring-4 focus:outline-none focus:ring-custom-gold font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Upload Images
      </button>
    </form>
  );
};

export default ImageUploadForm;
