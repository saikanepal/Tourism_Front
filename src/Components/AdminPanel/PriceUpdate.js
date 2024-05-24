import React, { useState } from "react";
import TrekkingDropdown from "../HomePage/Review/TrekkingDropdown";
import userContext from "../../Context/userContext";
import useFetch from "../../Hooks/useFetch";

export default function PriceUpdate() {
  const { isLoading, error, sendRequest, onCloseError } = useFetch();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendRequest(
        "/price/updatePrice",
        "POST",
        JSON.stringify(formData),
        {
          "Content-Type": "application/json",
        }
      );

      // console.log("response", response);
      // Simulate a successful response

      // setTimeout(() => {
      setLoading(false);
      alert("Price updated successfully!");

      // Reset form fields
      setFormData({
        price: "",
        region: "",
      });
      // }, 2000);
    } catch (error) {
      alert("Failed to update price. Please try again.");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto my-4 sm:w-1/2 font-Poppins bg-custom-gold p-8 rounded-lg shadow-md"
      >
        <h1 className="flex items-center justify-center my-10 text-3xl text-white font-bold">
          Update Price
        </h1>
        <div className="mb-5">
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose Your Location
          </label>
          <TrekkingDropdown
            setReviewData={setFormData}
            value={formData.region}
            className="bg-red-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleChange}
            className="bg-gray-50 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none border-none"
            placeholder="Enter price"
            required
          />
        </div>
        <button
          type="submit"
          className={`text-black bg-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <p className="cursor-not-allowed">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 mr-3 text-gray-500 animate-spin"
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
              Updating...
            </p>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}