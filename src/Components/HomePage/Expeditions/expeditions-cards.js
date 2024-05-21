import React from 'react'
import expeditionData from '../../../Assets/Data/Expedition'
import { useNavigate } from 'react-router-dom';
import dog from '../../../Assets/Carousel/dog.jpg'
import {motion} from 'framer-motion'

const ExpeditionCard = () => {

    return (
        <div>
            <h1 className="text-center font-poppins font-bold text-4xl mb-5 ml-90 mt-10 text-yellow-400">Expeditions</h1>

            <div className='flex flex-wrap justify-center gap-5 '>
                {Object.entries(expeditionData.expeditions).map((expedition,i) => (
                    // <div key={i} className='relative w-[400px] h-[500px] overflow-hidden  '>
                    //     <img className="w-full h-full " src={ dog } alt={expedition.title}  />
                    //     <div className='absolute top-0 left-0'>{expedition[0]}</div>
                    //     <div className='hover:bg-black hover:opacity-20 w-full h-full absolute top-0 left-0'></div>
                    // //         <button className="absolute font-jomolhari bottom-10 left-5 px-10 py-5 bg-white text-black opacity-100 text-xl font-bold transition duration-300" onClick={null} style={{ zIndex: '3' }}>Explore</button>
                    // </div>
                    <motion.div whileHover={{scale:1.1}} initial={{opacity:0, x:-100}} whileInView={{opacity:1,x:0}} transition={{delay:(i+0.01)/10, duration:0.5}} viewport={{once:true}} key={expedition.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4 relative group" style={{ width: '100%', height: '500px' }}>
                        <img className="w-full h-full absolute top-0 left-0" src="https://s3-alpha-sig.figma.com/img/27d3/a0cc/c5782e8f534a5619977604f2b2b4db14?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eehnlBvGIc0Z50pg3tVas8oUrVOEn1FNPezHypEuFCW9zUEFrpWgVqnVodaafBPdp15sz6PpSUAcMZylpLou~SqDzOdlgAw-GIR9tqft56RerBRlI-~suT~7BMiFdzyVBSi8iNCkq9YqJimn3IAm4a26rK8WVw~uVI~2x~vtGPiYfieLQU5griLUwSpE9YxL0xsXi5fuUGhFDET0b2gWau8H4NftsshsxtzwRl1z1kbHLxq~wKV4zKmzFGlpfIDcFU6Hg55XuQ45H8KEG0lyca~ybOoHNhoArrL0qrRb3ViTDGoc1oRA0bz~otPDPp5n-nMoGgXateF7hnu9Gn~MVg__" alt={expedition[0]} style={{ zIndex: '0', objectFit: 'cover' }} />
                        <div className="font-poppins font-bold text-3xl mb-2 border border-2 border-custom-gold px-5 py-3 pointer-events-none" style={{ position: 'absolute', zIndex: '10', color: '#FFD084', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', transition: 'all 0.3s ease' }}>{expedition[0]}</div>
                        <div className="absolute w-full h-full hover:bg-black rounded overflow-hidden opacity-0 hover:opacity-40 transition duration-300" style={{ zIndex: '2' }}>
                        
                            
                            
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >





    );
};

export default ExpeditionCard;