
import {motion} from 'framer-motion'
const HeroSectionSub = ({data}) => {
    return (

        <div class="relative">
    <img src="https://cdn.pixabay.com/photo/2023/12/06/08/41/mountain-8433234_1280.jpg" class="w-full h-screen object-cover" alt="Trekking Image" />
    <div class="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    <p  class="absolute top-0 left-0 h-full w-full flex justify-center items-center p-2 text-custom-gold text-5xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-poppins z-10"><motion.div initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.3}} className='text-center'>{data}</motion.div></p>
</div>

  );
}

export default HeroSectionSub;