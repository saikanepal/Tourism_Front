import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useFetch from "../../../../Hooks/useFetch";


const Image = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([])
    const { isLoading, sendRequest } = useFetch();
    async function fetchGalleryData() {
      try {

          // Uninstall axios later
          const responseData = await sendRequest(
              '/gallery/getSomeImage',  // Gallery ko GET Api rakhne
              'GET',
              null,
              {
                  'Content-Type': 'application/json',
              }

          );
          
          setImages(responseData.galleryImageDetails)

      } catch (error) {
          console.log('An error occurred in fetching gallery image', error.message);
      }
  }

  useEffect(() => {
    fetchGalleryData()
}, [])

    const handleLeftClick = (e) => {
        e.preventDefault()
        console.log(currentIndex)
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleRightClick = (e) => {
        e.preventDefault()
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  return (
    <>{images.length===0?"Loading":
    <div className="carousel-container relative w-full min-w-80 h-72 perspective">
      <div>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="carousel-slide absolute w-full h-full flex items-center justify-center"
          style={{ zIndex: images.length - Math.abs(index - currentIndex) }}
          animate={{
            x: -15 * Math.abs(index - currentIndex),
            y: 5 * Math.abs(index - currentIndex),
          }}
          transition={{ duration: 0.5 }}
        >
          <img src={image.imageUrl} alt={`Image ${index + 1}`} className="carousel-image h-72 w-full rounded shadow-lg object-cover" />
        </motion.div>
      ))}
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full opacity-50 hover:opacity-100 z-10" onClick={handleLeftClick}>
        &lt;  
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded-full opacity-50 hover:opacity-100 z-10" onClick={handleRightClick}>
        &gt;
      </button>
    </div>}
    </>
  )
}

export default Image