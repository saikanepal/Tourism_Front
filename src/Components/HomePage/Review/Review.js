import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../Nav/Header.css";
import trekkingData from "../../../Assets/Data/Trekking";

import TrekkingDropdown from "./TrekkingDropdown";
import useFetch from "../../../Hooks/useFetch";

export default function Review() {
  const { isLoading, error, sendRequest, onCloseError } = useFetch();
  const [reviewData, setReviewData] = useState({
    name: "",
    personalRating: 5,
    description: "",
    region: "",
  });

  const [rating, setRating] = useState(0); // State to store the selected rating

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  useEffect(() => {
    setReviewData({ ...reviewData, personalRating: rating });
  }, [rating]);
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      if (
        reviewData.name &&
        reviewData.personalRating &&
        reviewData.description &&
        reviewData.region
      ) {
        const responseData = await sendRequest(
          "/review/posting",
          "POST",
          JSON.stringify(reviewData),
          {
            "Content-Type": "application/json",
          }
        );
        if (responseData.name) alert("Success");
      } else {
        alert("Missing Params");
      }
    } catch (error) {
      console.log(error.message || "An error occurred during login");
    }
  };

  const handleTextBoxChange = (e) => {
    const newValue =
      e.target.value.length <= 300 ? e.target.value : reviewData.description;
    setReviewData({ ...reviewData, description: newValue });
  };
  return (
    <>
      <h1
        className="flex justify-around text-4xl font-
Skie font-semibold text-[#CA8F30] my-12"
      >
        {" "}
        Leave a Review
      </h1>
      <div className=" md:flex  justify-center ">
        <div className="w-4/5 mx-auto   bg-white-600 py-8  md:flex gap-10">
          <div className=" md:w-1/2   lg:mx-10 lg:w-[48%] my-auto max-w-sm md:p-2 p-4 bg-[#F5F5F5]  rounded-lg shadow sm:p-6 md:p-8  h-full">
            <form className="space-y-6 flex flex-col items-center" action="#">
              <div>
                <label
                  for="message"
                  className="block mb-2 text-lg font-medium text-[#7F7F7F] font-jomolhari text-center"
                >
                  Write Reviews
                </label>
                <TrekkingDropdown
                  data={trekkingData}
                  reviewData={reviewData}
                  setReviewData={setReviewData}
                />
                <input
                  type=""
                  name="name"
                  id="name"
                  className="bg-[#EDEDED] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 border-none outline-none "
                  placeholder="Name"
                  onChange={(e) => {
                    setReviewData((data) => {
                      return { ...data, name: e.target.value };
                    });
                    console.log(reviewData);
                  }}
                  required
                />
              </div>

              <textarea
                id="message"
                rows="2"
                class="block p-2.5 w-full text-sm text-gray-900 bg-[#EDEDED] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 border-none outline-none"
                placeholder="|"
                value={reviewData.description}
                onChange={handleTextBoxChange}
              ></textarea>

              <div className="flex items-center text-3xl">
                {[...Array(5)].map((_, index) => (
                  <button
                    key={index}
                    className={`${
                      index < rating ? "text-yellow-500" : "text-gray-400"
                    } focus:outline-none`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRatingChange(index + 1);
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>

              <button
                type="submit"
                className=" flex  text-white font-jomolhari bg-[#F29C0F]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={handleSubmitReview}
              >
                Submit{" "}
                <IoIosArrowForward className="  ml-2 text-lg  font-bold" />
              </button>
            </form>
          </div>
          <div className="  flex justify-between overflow-y-auto  no-scroll scrollable-container  mx-auto md:w-[60%] lg:w-full min-h-60">
            {" "}
            <ReviewCard perPage={0} />
          </div>
        </div>
      </div>
    </>
  );
}
