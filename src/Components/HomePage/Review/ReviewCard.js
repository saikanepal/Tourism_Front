import React,{useEffect} from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import data from "./data";
import useFetch from "../../../Hooks/useFetch";
import { useState } from "react";

import FaceIcon from "./FaceIcon";
function StarRating({ count }) {
  const stars = Array.from({ length: count }, (_, index) => (
    <FaStar key={index} style={{ color: "gold" }} />
  ));

  return <div className="flex my-2">{stars}</div>;
}

function ReviewCard({from,page,perPage,setNoComment}) {
  const { isLoading, error, sendRequest, onCloseError }=useFetch();
  const [reviewData,setReviewData]=useState([])

  const fetchingReview=async()=>{
    try {
      const responseData = await sendRequest(
        '/review/generalReview',
        'GET',
        null,
        {
          'Content-Type': 'application/json',
        }

      );
     
      setReviewData(responseData.review)
     
    } catch (error) {
      console.log(error.message || 'An error occurred during login');
    }
  }

  const fetchParticularReview=async(from,page,perPage)=>{
    try {
      const responseData = await sendRequest(
        `/review/getReview/${from}`,
        'POST',
        JSON.stringify({page,perPage}),
        {
          'Content-Type': 'application/json',
        }

      );
     if(responseData.length===0){
      setNoComment(true)
     }
      setReviewData([...reviewData,...responseData])
      
      console.log(responseData,"review")
     
    } catch (error) {
      console.log(error.message || 'An error occurred during login');
    }
  }
  useEffect(()=>{
    if(from){
      fetchParticularReview(from,page,perPage)
    }
    else{
      fetchingReview()
    }
  },[page,perPage])
  return (
    <>
      {reviewData.length!==0?<>{reviewData?.map((person, index) => (
        <div
          key={index}
          className="w-full flex justify-between mt-8 px-2  lg:mt-0  py-2 sm:py-0 sm:pt-0 sm:mt-0 md:mt-0 min-h-60"
        >
          <figure className=" w-screen   px-2 lg:w-72  lg:mr-4  bg-[#F5F5F5] border-gray-200 rounded-lg shadow sm:p-4 md:p-6 h-full bg-gradient-to-t from-[#F7F7F7] to-[#FFFFFF] sm:py-0 md:py-0 ">
            <div className=" flex  space-x-3 rtl:space-x-reverse m-0 p-0">
              {/* <img
                className="w-16 h-16 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="profile picture"
              /> */}
              <FaceIcon rating={person?.personalRating}/>
              <div className="  ">
                <h1 className="pe-3 font-[600] text-[16px] lg:text-[24px] font-Skie text-[#CA8F30]">
                  {" "}
                  {person?.name}
                </h1>
                <div className=" text-black">
                  <StarRating className="" count={person?.personalRating} />
                </div>

                <p className="flex px-auto items-center">
                  <FaLocationDot className=" text-yellow-300" />{" "}
                  <span className="mx-2 text-sm text-black"> {person?.rating?.region || from }</span>
                </p>
              </div>
            </div>

            <blockquote>
              <p className="text-[12px] font-[600] font-Skie text-gray-900 text-justify pt-5 ">
                {person?.description}
              </p>
            </blockquote>
          </figure>
        </div>
      ))}</>:'No Review Found'}
    </>
  );
}

export default ReviewCard;