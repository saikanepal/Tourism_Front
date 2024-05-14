import DataTrekking from '../../Assets/Data/Trekking.js';
import DataExpedition from '../../Assets/Data/Expedition.js';
import DataRegion from '../../Assets/Data/Region.js';
import NavBar from './SubFinalPage/NavBar.js';
import Overview from './SubFinalPage/Overview.js';
import Itinerary from './SubFinalPage/Itinerary.js';
import RouteMap from './SubFinalPage/RouteMap.js';
import React,{useState,useEffect,useRef} from 'react';
import CostIncludes from './SubFinalPage/CostIncludes.js';
import CostExcludes from './SubFinalPage/CostExcludes.js';
import FixedDates from './SubFinalPage/FixedDates.js';
import GearsList from './SubFinalPage/GearsList.js';
import Images from './SubFinalPage/Images.js';
import Reviews from './SubFinalPage/Reviews.js';
import Header from '../HomePage/Nav/Header.js';
import { useLocation } from 'react-router-dom';
import trekking from '../../Assets/Data/Trekking.js';
import expeditions from '../../Assets/Data/Expedition.js';

export default function FinalLandingPage() {
    const [activeSection, setActiveSection] = useState(null);
    const location = useLocation();
    const splitValue = location.pathname.split("/")
    const trekOrExpedition=decodeURIComponent(splitValue[1]);
    const campLocation=decodeURIComponent(splitValue[2]);

    const finalLocation=decodeURIComponent(splitValue[3])



    const campObject=Object.entries(trekOrExpedition==='trekking'?trekking.trekking:expeditions.expeditions).find(n=>n[0]===campLocation)
  
    const feedData=Object.entries(campObject[1]).find(n=>n[0]===finalLocation)




    const sectionsRef = useRef([]);
    const scrollToSection = (i) => {
      sectionsRef.current[i].scrollIntoView({ behavior: 'smooth' });
    };


    useEffect(() => {
      
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
    
          // Calculate which section is currently in view
          let currentSection = null;
          sectionsRef.current.forEach((section) => {
            const sectionTop = section.offsetTop-10;
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
      
      
    return (
        <div className='relative'>
          <Header/>
         
            <NavBar activeSection={activeSection} scrollToSection={scrollToSection}/>
            
       <div className='flex justify-between'>
       
        <div className='w-full mt-16'>
        
       <Overview sectionsRef={sectionsRef} feedData={feedData || 'Data Not Found'}/>
       <Itinerary sectionsRef={sectionsRef}/>
       <RouteMap sectionsRef={sectionsRef}/>
       <CostIncludes sectionsRef={sectionsRef}/>
       <CostExcludes sectionsRef={sectionsRef}/>
       <FixedDates sectionsRef={sectionsRef}/>
       <GearsList sectionsRef={sectionsRef}/>
       <Images sectionsRef={sectionsRef}/>
       <Reviews sectionsRef={sectionsRef}/>
       <div className='sticky bottom-10 flex justify-end mr-10'>
                <button className='bg-custom-yellow rounded hover:bg-custom-gold px-4 py-2 text-white'>Book Now</button>
            </div>
        </div>
        
       </div>
       <div className='h-screen'></div>
        </div>
    )

}
