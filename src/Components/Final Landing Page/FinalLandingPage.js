import DataTrekking from '../../Assets/Data/Trekking.js';
import DataExpedition from '../../Assets/Data/Expedition.js';
import DataRegion from '../../Assets/Data/Region.js';
import NavBar from './SubFinalPage/NavBar.js';
import Overview from './SubFinalPage/Overview.js';
import Itinerary from './SubFinalPage/Itinerary.js';
import RouteMap from './SubFinalPage/RouteMap.js';
import React,{useState,useEffect,useRef} from 'react';

export default function FinalLandingPage() {
    const [activeSection, setActiveSection] = useState(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
    
          // Calculate which section is currently in view
          let currentSection = null;
          sectionsRef.current.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentSection = section.id;
            }
          });
    
          setActiveSection(currentSection);
        };
    
        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Remove scroll event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
      
      console.log(activeSection)
    return (
        <div className='relative'>
            <NavBar activeSection={activeSection}/>
            <div className='h-screen'></div>
       <div className='flex justify-between'>
       
        <div className='w-3/4'>
        
       <Overview sectionsRef={sectionsRef}/>
       <Itinerary sectionsRef={sectionsRef}/>
       <RouteMap sectionsRef={sectionsRef}/>
        </div>
        <div className='relative flex items-end mr-10'>
            <div className='sticky bottom-10'>
                <button className='bg-custom-yellow rounded hover:bg-custom-gold px-4 py-2 text-white'>Book Now</button>
            </div>
        </div>
       </div>
       <div className='h-screen'></div>
        </div>
    )

}
