import React, { useState ,useRef,useEffect} from 'react';
import {motion} from 'framer-motion'
import useFetch from '../../../Hooks/useFetch';
const ContactForm = ({setOverlayActive,overlayActive,finalLocation}) => {
  const contentRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        contactNumber: '',
        Location:finalLocation
      });
    const { isLoading, error, sendRequest, onCloseError }=useFetch();
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData)
        try {
          const responseData = await sendRequest(
            '/booking/postBookingDetail',
            'POST',
            JSON.stringify(formData),
            {
              'Content-Type': 'application/json',
            }
    
          );
          console.log(responseData);
         
        } catch (error) {
          console.log(error.message || 'An error occurred during login');
        }
      };
      const handleReset = () => {
        setFormData({
          name: '',
          email: '',
          country: '',
          contactNumber: '',
          arrivalDate: '',
          departureDate: '',
          requestRequirements: '',
        });
      };
      
      const closeOverlay = (e) => {
        if (contentRef.current && !contentRef.current.contains(e.target)) {
          setOverlayActive(false);
        }
      };
      useEffect(() => {
        if (overlayActive) {
          document.addEventListener('mousedown', closeOverlay);
        } else {
          document.removeEventListener('mousedown', closeOverlay);
        }
    
        return () => {
          document.removeEventListener('mousedown', closeOverlay);
        };
      }, [overlayActive]);


    return (
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='fixed overflow-hidden z-20 w-full top-0 bg-black bg-opacity-50  h-screen'>
        <motion.div initial={{y:-400}} animate={{y:0}} exit={{y:400}} style={{ maxWidth: '1000px', width: '100%', maxHeight: '100%', height: '100%' }} ref={contentRef} className="rounded-xl relative mx-auto bg-gradient-to-tr from-slate-400 to-slate-900 p-10 lg:mt-10 h-32 overflow-scroll no-scrollbar">
<div className="flex items-center mb-8">
  <svg width="25" height="50" className="ml-n6 ">
    <ellipse cx="10" cy="25" rx="10" ry="10" fill="#F29C0F" />
  </svg>
  <h2 className="text-2xl font-semibold text-white">Personal Information</h2>
</div>


        <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-2">

<div className="w-full lg:w-1/2 px-2 mb-2 lg:mb-0">
  <label htmlFor="name" className="block text-white lg:w-65">
    Name<span className="text-red-500">*</span>
  </label>
  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className="border border-gray-300 px-3 py-2 w-2/3 bg-transparent text-white mb-0 lg:mb-4 lg:mr-6"
  />
</div>



  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
    <label htmlFor="email" className="block text-white">Email<span className="text-red-500">*</span></label>
    <input
      type="email"
      id="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      required
      className="border border-gray-300 px-3 py-2 w-2/3 bg-transparent text-white mb-2 lg:mb-0"
    />
  </div>
  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
    <label htmlFor="country" className="block text-white">Country<span className="text-red-500">*</span></label>
    <input
      type="text"
      id="country"
      name="country"
      value={formData.country}
      onChange={handleChange}
      required
      className="border border-gray-300 px-3 py-2 w-2/3 bg-transparent text-white mb-2 lg:mb-0"
    />
  </div>
  <div className="w-full lg:w-1/2 px-2 mb-4 lg:mb-0">
    <label htmlFor="contactNumber" className="block text-white">Contact Number<span className="text-red-500">*</span></label>
    <input
      type="text"
      id="contactNumber"
      name="contactNumber"
      value={formData.contactNumber}
      onChange={handleChange}
      required
      className="border border-gray-300 px-3 py-2 w-2/3 bg-transparent text-white mb-2 lg:mb-0"
    />
  </div>
</div>


<div className="flex items-center mt-10 mb-2">
  <svg width="25" height="50" className="ml-n6 ">
    <ellipse cx="10" cy="25" rx="10" ry="10" fill="#F29C0F" />
  </svg>
  <h2 className="text-2xl font-semibold mb-0 text-white">Booking Details</h2>
</div>

<div className="mb-4 flex flex-wrap">
  <div className="w-full sm:w-1/2 px-2 mb-4 lg:mb-0">
    <label htmlFor="arrivalDate" className="block text-white">Arrival Date:</label>
    <input
      type="date"
      id="arrivalDate"
      name="arrivalDate"
      value={formData.arrivalDate}
      onChange={handleChange}
      required
      className="border border-gray-300 lg:w-2/3 px-3 py-2 bg-transparent text-white"
    />
  </div>
  <div className="w-full sm:w-1/2 px-2 mb-4 lg:mb-0">
    <label htmlFor="departureDate" className="block text-white">Departure Date:</label>
    <input
      type="date"
      id="departureDate"
      name="departureDate"
      value={formData.departureDate}
      onChange={handleChange}
      required
      className="border border-gray-300 lg:w-2/3 px-3 py-2 bg-transparent text-white"
    />
  </div>
</div>


          <div className="flex items-center mt-10 mb-8">
  <svg width="25" height="50" className="ml-n6 ">
    <ellipse cx="10" cy="25" rx="10" ry="10" fill="#F29C0F" />
  </svg>
 
 
  <h2 className="text-2xl font-semibold mb-0 text-white">Requirements</h2>
</div>

<div className="">
  <textarea
    id="requestRequirements"
    name="requestRequirements"
    value={formData.requestRequirements}
    onChange={handleChange}
    className="border border-gray-300 px-3 py-2 w-full h-48 lg:w-[854px] lg:h-64 bg-transparent text-white resize-none"
  />
</div>



<div class="flex items-center mb-4">
  <div class="mr-8">
    <label class="flex items-center">
      <input type="checkbox" required class="mr-4"/>
      <span class="text-white">I agree to all the conditions</span>
    </label>
  </div>
  <div class="ml-auto mr-8 opacity-50">
    <p class="text-white">Fields with * are mandatory</p>
  </div>
</div>



          <div class="flex justify-center space-x-4">
          <button type="submit" class=" text-white py-2 px-4 mr-60" style={{ backgroundColor: '#F29C0F' }}>Submit</button>

          <button type="button" onClick={handleReset} class="bg-transparent py-2 px-4" style={{ color: '#F29C0F', border: '1px solid #F29C0F' }}>Reset</button>




</div>


        </form>
        <div className='absolute top-3 text-white z-20 right-3' onClick={()=>{setOverlayActive(!overlayActive)}}>Back</div>
      </motion.div>
      
      </motion.div>

  );
    }

    export default ContactForm;