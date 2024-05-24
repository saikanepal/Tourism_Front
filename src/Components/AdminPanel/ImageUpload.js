import React, { useState, useRef } from "react";
import axios from "axios";
import { useImage } from "../../Hooks/useImage";
import { useContext } from "react";
import userContext from "../../Context/userContext";
import useFetch from "../../Hooks/useFetch";
const ImageUploadForm = () => {
  const a = useContext(userContext);
  const { isLoading, error, sendRequest, onCloseError } = useFetch();
  const { uploadImage } = useImage();
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false); // Add loading state

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
    setDisable(false);
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
    setLoading(true); // Set loading to true when upload starts

    const uploadedImages = [];
    if (uploadedImages.length === 0) {
      setDisable(true);
    }
    try {
      for (const image of images) {
        const uploadedImage = await uploadImage(image);
        uploadedImages.push(uploadedImage);
      }

      const response = await axios.post(
        "http://localhost:8000/api/Image/postImage",
        {
          uploadedImages,
        }
      );

      // const response = await sendRequest(
      //   "/Image/postImage",
      //   "POST",
      //   JSON.stringify(uploadedImages),
      //   {
      //     "Content-Type": "application/json",
      //   }
      // );
      // console.log("Response:", response);

      setDescription("");
      setImages([]);
    } catch (error) {
      console.error("Error uploading description:", error);
    } finally {
      setLoading(false); // Set loading to false when upload is complete
    }
    alert("Images uploaded successfully!");
  };

  return (
    <form
      className="max-w-[60%] mx-auto my-4 font-Poppins"
      onSubmit={handleSubmit}
    >
      {/* <div className="mb-5">
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
      </div> */}
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
        disabled={loading || disable} // Disable the button when loading
      >
        {loading ? (
          <p className="cursor-not-allowed">
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Image Uploading...
          </p>
        ) : disable ? (
          <div className="cursor-not-allowed">Upload Image</div>
        ) : (
          "Upload Image"
        )}
      </button>
    </form>
  );
};

export default ImageUploadForm;
