import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
const Image = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="carousel-container relative w-80 h-96 perspective">
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
          <img src={image} alt={`Image ${index + 1}`} className="carousel-image w-80 max-w-48 rounded shadow-lg" />
        </motion.div>
      ))}
      <button className="absolute -left-24 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded z-10" onClick={handleLeftClick}>
        Hello
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white py-2 px-4 rounded z-10" onClick={handleRightClick}>
        Hi
      </button>
    </div>
  )
}

export default Image